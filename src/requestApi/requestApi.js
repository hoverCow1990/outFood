import requestUrl from './requestUrl';
import DistanceQuery from '../lib/DistanceQuery';
import store from '../store/store'
import ShopList from '../component/shopList/shopList';

/*
 *  用于各类数据请求
 *  作者     : hoverCow
 *  日期     : 2017-03-02
 *  GitHub   : https://github.com/hoverCow1990/outFood

 *==========================================================================================================
 * 
 * requestadminDetail
 * 请求用户信息
 * 在Header组件处进行请求
 * -----------------------------------------------------------------------
 * 返回json对象示例 : {...}
 * adminPoints:null
 * adress:""
 * allAdress: ['']
 * balance:52.2
 * friend: [],
 * name:"胖胖的牛牛哦"
 * order:[]
 * redPacket:[{
 *	 value : 2,
 *	 time : '2017-3-25'
 * }]
 * tele:"13636556375"
 */

function requestadminDetail(success,fail){
	$.ajax({
		url : requestUrl.adminDetail,
		type : 'post',
		dataType : 'json',
		success: function(data){
			DistanceQuery.getPoints(data.address,function(point){
				data.adminPoints = point;
				store.adminDetail.set(data);
				success && success();
			})
		},
		error:function(err){
			fail && fail(err)
		}
	})
} 

/*
 *==========================================================================================================
 *
 * requestShopList
 * 请求商户列表信息
 * data数据为 start:请求的起始数,tag:请求的路由(首页则为'index'),success,fail均为回调函数
 * -----------------------------------------------------------------------
 * 返回json对象示例 : [{},...]
 * address:"徐汇区老沪闵路809号好又多正门附近"
 * distance:"1.2"
 * express:10
 * id:0
 * isLove:true
 * logo:"mc"
 * name:"麦当劳"
 * points:H
 * sales:1266
 * search:"快餐,炸鸡,mc,肉,夜宵"
 * stars:2800
 * start:20
 * tag:"fast"
 * tele:"(021)54391019"
 * time:12
 * trafficTime:8
 */

function requestShopList(start,tag,success,fail){
	$.ajax({
		url : requestUrl.shopList,
		type : 'post',
		data : {
			tag : tag,
			start : start,
		},
		dataType : 'json',
		success: function(data){
			var shopListData = tag === 'index'?store.shopList:store.shopListAssistant;	//首页请求操作数据为shopList,二级页为shopListAssitant
			if(data.length === 0){								//全部数据请求完毕
				ShopList.state.requestSwitch = false;
				ShopList.render();								//渲染最后的已加载全部
				return;
			}
			if(data[0].id == -1){								//当搜索页时返回收个数据id为-1时说明没有搜索到该商铺
				ShopList.state.hasSearchData = false;			//用于渲染没有数据的字符串
				shopListData.reset([]);
				return;
			}
			ShopList.state.hasSearchData = true;
			DistanceQuery.getDistance(data,store.adminDetail.get('adminPoints'),function(data){	//调用百度地图api换算商品与用户之间的距离与车程时间
				var	state = shopListData.toJSON(),
				state = state.concat(data);
				shopListData.reset(state);						//与旧数据合并并重设shopList
			});
		},
		error:function(err){
			shopListData.reset({});
		}
	})
} 

/*
 *==========================================================================================================
 *
 * requestshopDetail
 * 请求商户详细信息,与原本基础信息进行合并
 * data为 id:请求商铺的id
 * -----------------------------------------------------------------------
 * 返回json对象示例 : {...}
 * collection:3252
 * info:"麦当劳遍布全球六大洲119个国家"
 * menu:[{id:0,name:'麦趣鸡盒',score:98,sell:478,value:26}]
 */

function requestshopDetail(data,success,fail){
	$.ajax({
		url : requestUrl.shopDetail,
		type : 'post',
		dataType : 'json',
		data : {
			id : data.id
		},
		success: function(res){
			var baseShopData = data.baseShopData;
			res.menu = res.menu.map(function(item){
				item = JSON.parse(item);
				item.num = 0;
				return item;
			});
			res = $.extend(res,baseShopData,{pageTab:0,tabInfo:['点餐','详情','交通'],packageList:[],payment:0})
			success && success(store.shopDetail.add(res));

		},
		error:function(err){
			fail & fail(err);
		}
	})
} 


export {requestShopList,requestadminDetail,requestshopDetail};
