import requestUrl from './requestUrl';
import ShopList from '../component/shopList/shopList';
import shopListData from '../store/ShopListData';
import adminDetailData from '../store/adminDetailData';
import shopDetailData from '../store/shopDetailData';


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
			if(data.length === 0){
				cb && cb();
				return;
			}
			if(data[0].id == -1){
				ShopList.templateData.hasData = false;
				shopListData.reset({});
				return;
			}
			ShopList.templateData.hasData = true;
			var state = shopListData.toJSON(),
				data = data.map(function(item){
					return item;
				}),
				state = state.concat(data);
			if(!state[0].hasOwnProperty('id')) state.shift();
			shopListData.reset(state);
		},
		error:function(err){
			shopListData.reset({});
		}
	})
} 

/* 请求用户数据
 * 返回用户数据
 */
function requestadminDetail(cb){
	$.ajax({
		url : requestUrl.adminDetail,
		type : 'post',
		dataType : 'json',
		success: function(data){
			adminDetailData.set(JSON.parse(data[0]));
			cb && cb();
		},
		error:function(err){
			console.log(err)
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