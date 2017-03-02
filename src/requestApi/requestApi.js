import requestUrl from './requestUrl';
import ShopList from '../component/shopList/shopList';
import shopListData from '../store/shopList';
import adminDetail from '../store/adminDetail';


/* 请求shopList
 * data为请求数组的起始点,end为请求数据的结束点
 * 在php中利用array_slice进行分割请求
 */
function requestShopList(start,end,cb){
	$.ajax({
		url : requestUrl.shopList,
		type : 'post',
		data : {
			start : start,
			end : end
		},
		dataType : 'json',
		success: function(data){
			data.forEach(function(item){
				shopListData.add(JSON.parse(item));
			})
			ShopList.render();
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
function requestadminDetail(cb){
	$.ajax({
		url : requestUrl.adminDetail,
		type : 'post',
		dataType : 'json',
		success: function(data){
			adminDetail.set(JSON.parse(data[0]));
			cb && cb();
		},
		error:function(err){
			console.log(err)
		}
	})
} 


export {requestShopList,requestadminDetail};