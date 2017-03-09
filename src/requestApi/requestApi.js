import requestUrl from './requestUrl';
import distanceQuery from '../lib/distanceQuery';
import store from '../store/store'
import ShopList from '../component/shopList/shopList';
// import shopListData from '../store/ShopListData';
// import adminDetailData from '../store/adminDetailData';
// import shopDetailData from '../store/shopDetailData';

/*
 *  用于各类数据请求
 *  作者     : hoverCow
 *  日期     : 2017-03-02
 *  GitHub   : https://github.com/hoverCow1990/outFood
 */

/* 
 * 请求用户信息
 * 返回json对象示例 : {
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
 * tele:"13636556375"}
 */

function requestadminDetail(success,fail){
	$.ajax({
		url : requestUrl.adminDetail,
		type : 'post',
		dataType : 'json',
		success: function(data){
			distanceQuery.getPoints(data.address,function(point){
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



/* 请求shopList
 * data为请求数组的起始点,end为请求数据的结束点
 * 在php中利用array_slice进行分割请求
 */
function requestShopList(start,tag,cb){
	$.ajax({
		url : requestUrl.shopList,
		type : 'post',
		data : {
			tag : tag,
			start : start,
		},
		dataType : 'json',
		success: function(data){
			var shopListData = tag === 'index'?store.shopList:store.shopListAssistant;
			if(data.length === 0){
				ShopList.state.requestSwitch = false;
				ShopList.render();
				return;
			}
			if(data[0].id == -1){
				ShopList.state.hasSearchData = false;
				shopListData.reset([]);
				return;
			}
			ShopList.state.hasSearchData = true;
			distanceQuery.getDistance(data,store.adminDetail.get('adminPoints'),function(data){
				var	state = shopListData.toJSON(),
				// data = data.map(function(item){
				// 	return item;
				// }),
				state = state.concat(data);
				//if(!state[0].hasOwnProperty('id')) state.shift();
				shopListData.reset(state);
			});
		},
		error:function(err){
			shopListData.reset({});
		}
	})
} 

/* 请求shopList
 * data为请求数组的起始点,end为请求数据的结束点
 * 在php中利用array_slice进行分割请求
 */
function requestshopDetail(id,cb){
	$.ajax({
		url : requestUrl.shopDetail,
		type : 'post',
		dataType : 'json',
		data : {
			id : id
		},
		success: function(data){
			data.menu = data.menu.map(function(item){
				item = JSON.parse(item);
				item.num = 0;
				return item;
			})
			data = $.extend(data,{pageTab:0,tabInfo : ['点餐','详情','交通'],packageList : [],payment : 0});
			shopDetailData.add(data);
			cb&&cb();
		},
		error:function(err){
			console.log(err)
		}
	})
} 


export {requestShopList,requestadminDetail,requestshopDetail};
