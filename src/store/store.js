import globalData from './dataList/globalData';
import adminDetail from './dataList/adminDetail';
import shopDetail from './dataList/shopDetail';
import shopList from './dataList/shopList';
import shopListAssistant from './dataList/shopListAssistant';


/*
 *  store数据信息 :
 *	将所有数据dataList整合为一体
 *  作者     : hoverCow
 *  日期     : 2017-03-08
 *	GitHub   : https://github.com/hoverCow1990/outFood
 */

var store = {
	globalData 	      : globalData,
	adminDetail 	  : adminDetail,
	shopDetail 		  : shopDetail,
	shopList 	  	  : shopList,
	shopListAssistant : shopListAssistant
}

export default store;