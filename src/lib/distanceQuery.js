import {trafficConfig} from '../defaultConfig/config';

var defaultConfig = {
	area : trafficConfig.area,
} 

function DistanceQuery(option){
	this.option = $.extend({},defaultConfig,option);
	this.map = new BMap.Map();
}

DistanceQuery.prototype = {
	getPoints : function(adress,sucess,fail){
		var area = this.option.area,
	        myGeo = new BMap.Geocoder(),
	        adress = adress.slice(adress.indexOf('区')+1);      
	        myGeo.getPoint(adress,function(point){
	        	if(null !== point){
	        		sucess && sucess(point);
	        	}else{
	        		fail && fail(area + '无法定位该地址');
	        	}
	    },area);
	},
	getDistance : function(arr,adminPoints,success){
		var state = {length:arr.length,count:0},
			self = this,newArr = new Array();
		arr.forEach(function(item){
			self.getPoints(item.address,function(shopPoints){
				item.points = shopPoints;
				self.handlerSearch(item,shopPoints,adminPoints,state,callBack);
			})
		});
		function callBack(){
			success && success(arr);
		};
	},
	handlerSearch : function(item,shopPoints,adminPoints,state,callBack){
		var driving = new BMap.DrivingRoute(this.map,{
			onSearchComplete: function(results){   
			    if(driving.getStatus() == BMAP_STATUS_SUCCESS){
			    	var res = results.ur[0];
			    	item.trafficTime = Math.ceil(res.Oq/60) * 2;
			    	item.distance = (res.cg/1000).toFixed(1);
			    	if(++state.count === state.length) callBack();
			    }    
			}  
		});
		driving.search(shopPoints,adminPoints); 
	},
}

export default new DistanceQuery();