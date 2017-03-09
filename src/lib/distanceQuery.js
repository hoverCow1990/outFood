import {trafficConfig} from '../config/config';

/*
 *  DistanceQuery
 *	调用百度地图Api,在不渲染视图的情况下
 *	定位用户坐标[经度,纬度],搜索两坐标之间的驾车距离以及路程
 *  作者     : hoverCow
 *  日期     : 2017-03-08
 *  GitHub   : https://github.com/hoverCow1990/outFood
 *
 */

//默认配置,在config/config内设置
var defaultConfig = {
	area : trafficConfig.area,
} 

//DistanceQuery构造函数
function DistanceQuery(option){
	this.option = $.extend({},defaultConfig,option);	//继承默认属性
	this.map = new BMap.Map();							//定义出百度地图
}

//DistanceQuery原型
DistanceQuery.prototype = {
	//调用BMap.Geocoder接口,传入物理地址,返回坐标轴
	getPoints : function(address,sucess,fail){					//参数为 string,fn,fn
		var area = this.option.area,
	        myGeo = new BMap.Geocoder(),
	        address = address.slice(address.indexOf('区')+1);   //由于搜索目标如上海市徐汇区[错误的路名]...其会模糊匹配到上海市徐汇区的大致坐标,所以只能传入路名检测  
	        myGeo.getPoint(address,function(point){
	        	if(null !== point){								//如果获取的point不为null,则代表地址正确,返回正确的new BMap.Point(x,y)对象
	        		sucess && sucess(point);					//执行正确回调
	        	}else{
	        		fail && fail(area + '无法定位该地址');		//执行错误
	        	}
	    },area);												//传入的area为搜索地区,如'上海市'
	},
	//获取两点之间的行车距离以及时间
	getDistance : function(arr,adminPoints,success){			//参数为 [],new BMap.Point(x,y)对象,fn
		var state = {length:arr.length,count:0},				//用json数据类型传入,由于是引用,多次累加后当count === arr.length时代表所有数据请求完毕
			self  = this,newArr = new Array();		
		arr.forEach(function(item){
			self.getPoints(item.address,function(shopPoints){	//首先调用getPoints,获取到商铺的new BMap.Point(x,y)坐标对象,在进行search
				item.points = shopPoints;
				self.handlerSearch(item,shopPoints,adminPoints,state,callBack);	
			})
		});
		function callBack(){
			success && success(arr);							//当数据全部执行完毕后调用传入的success
		};
	},
	handlerSearch : function(item,shopPoints,adminPoints,state,callBack){		//{},new BMap.Point(x,y),new BMap.Point(x,y),{},fn
		var driving = new BMap.DrivingRoute(this.map,{
			onSearchComplete: function(results){   
			    if(driving.getStatus() == BMAP_STATUS_SUCCESS){
			    	var res = results.ur[0];
			    	item.trafficTime = Math.ceil(res.Oq/60) * 2;				//设置当前循环数据的交通时间,由于是驾车,所以此处将自行车的行驶时间大致*2
			    	item.distance = (res.cg/1000).toFixed(1);					//设置当前循环数据的距离
			    	if(++state.count === state.length) callBack();				//当全部循环结束的时候执行回调函数
			    }    
			}  
		});
		driving.search(shopPoints,adminPoints); 								//进行搜索
	},
}

//输出实例对象
export default new DistanceQuery();