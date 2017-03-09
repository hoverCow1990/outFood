// import Index from '../component/index/index';
// import Header from '../component/header/header';
// import ShopList from '../component/shopList/shopList';
// import ShopDetail from '../component/shopDetail/shopDetail';
// import ShopMenu from '../component/shopDetail/shopMenu';
// import AdminDetail from '../component/adminDetail/adminDetail';
// import Footer from '../component/footer/footer';
// import globalData from '../store/globalData';
// import shopListData from '../store/ShopListData';
// import adminDetailData from '../store/adminDetailData';
// import shopDetailData from '../store/shopDetailData';

// /*
//  * app路由机制
//  * 键他
//  */

// var AppRouter = Backbone.Router.extend({
//   routes: {
//   	""  : 'index',						// 首页
//   	"shopList/:query":"shopList",   	// 店铺列表页
//   	"adminDetail" : "adminDetail",		// 用户详情页
//   	"shopDetail/:query" : "shopDetail"	// 商铺详情页
//   }
// });

// // 实例化 Router
// var app_router = new AppRouter();


//  /*
//  *  各页面的渲染机制
//  *	分别为index,shopList,adminDetail,shopDetail模块
//  *  作者:hoverCow,日期:2017-03-01
//  */

// var routerRender = {
// 	index : function(){
// 		Header.render();
// 		Index.render();
// 		Footer.render();
// 		if(void 0 === adminDetailData.get('adminPoints')) return;
// 		ShopList.initialize();
// 		ShopList.handlerRequest();
// 		ShopList.render();
// 	},
// 	shopList : function(){
// 		Header.render();
// 		Footer.render()
// 		ShopList.initState();
// 	},
// 	adminDetail : function(){
// 		Header.render();
// 		Footer.render();
// 		AdminDetail.render();
// 	},
// 	shopDetail : function(id){
// 		Header.render();
// 		ShopDetail.initState(Number(id));
// 	},
// 	listener : {
// 		shopListEvent : function(){
// 			ShopList.render();
// 		},
// 		addressEvent : function(){
// 			Header.render();
// 			ShopList.initState();
// 			if(null !== globalData.get('routerId')) return;
// 			//ShopList.handlerRequest();
// 			ShopList.render();
// 		},
// 		adminDetail : function(){
// 			if(globalData.get('routerId') === 'adminDetail') AdminDetail.render();
// 		},
// 		shopDetail : function(){
// 			ShopDetail.state = shopDetailData.last().attributes;
// 			ShopDetail.render();
// 		},
// 		pageTab : function(){
// 			ShopDetail.initState(ShopDetail.state.id);
// 		}
// 	}
// }

// //首页页面
// app_router.on('route:index', function(id){
// 	globalData.set({routerId:null});
// 	routerRender.index();
// });
// //用户详情页面
// app_router.on('route:adminDetail', function(){
// 	globalData.set({routerId:"adminDetail"});
// 	routerRender.adminDetail();
// });
// //店铺列表页页面
// app_router.on('route:shopList',function(id){
// 	globalData.set({routerId:id});
// 	routerRender.shopList();
// });

// //店铺列表页页面
// app_router.on('route:shopDetail',function(id){
// 	globalData.set({routerId:id});
// 	routerRender.shopDetail(id);
// });

// Backbone.history.start();

// /*
//  * adminDetailData地址发生变化时对Header渲染
//  * 作者:hoverCow,日期:2017-03-02
//  */

// shopListData.on('reset set add',function(){
// 	routerRender.listener.shopListEvent();
// })

// /*
//  * adminDetailData地址发生变化时对Header渲染
//  * 如果此时页面为adminDetail,则同时对adminDetail渲染
//  * 作者:hoverCow,日期:2017-03-03
//  */

// adminDetailData.on('change:adress',function(){
// 	routerRender.listener.addressEvent();
// })

// adminDetailData.on('change',function(){
// 	routerRender.listener.adminDetail();
// })

// /*
//  * shopDetailData数据发生变化时对shopDetail页面渲染
//  * 作者:hoverCow,日期:2017-03-05
//  */
// shopDetailData.on('add',function(){
// 	routerRender.listener.shopDetail();
// })

// shopDetailData.on('change:pageTab',function(){
// 	routerRender.listener.pageTab();
// })

import config from '../config/config';
import store  from '../store/store';
import Header from '../component/header/header'; 		//头部组件
import Index from '../component/index/index';			//首页组件
import ShopList from '../component/shopList/shopList';
import Footer from '../component/footer/footer';
/*
*  App主要js文件
*  连接路由/试图/数据监听
*  作者     : hoverCow
*  日期     : 2017-03-02
*  GitHub   : https://github.com/hoverCow1990/outFood
*/

//当用户在二级页刷新页面时候,跳回主页
if(window.location.hash !== '') window.location.hash = '';


/*
 *  各页面的渲染机制
 *  根据路由匹配机制,以及数据监听机制渲染不同页面的内容
 */

var routerRender = {
	initSwitch : true,
	init : function(){
		var callBack = ShopList.requestShopList.bind(ShopList,'index');
		Header.requestadminDetail(callBack);
		Index.setState({scrollTop : 0});
		Footer.render();
	},
	indexPage : function(){
		if(this.initSwitch) return delete this.initSwitch;
		var address   = this.getAttr.address(),
			count     = Math.ceil(store.shopList.length/5),
			tabActive = store.adminDetail.attributes.tabActive,
			scrollTop = store.adminDetail.attributes.scrollTop;
		Footer.render();
		Index.setState({scrollTop : scrollTop});
		ShopList.initState({
			count 	  : count,
			tabActive : tabActive
		});
		ShopList.setState({
			routerId 	 : 'index',
			shopListData : store.shopList
		});
	},
	shopListPage : function(routerId){
		ShopList.initState({
			count 	  : 0,
			tabActive : -1
		});
		ShopList.requestShopList.call(ShopList,routerId);
		store.shopListAssistant.reset([],{
			silent : true
		})
		Footer.render();
	},
	shopDetailPage : function(routerId){
		console.log(routerId)
	},
	listener : {
		addressEvent : function(){
			var address = routerRender.getAttr.address();
			Header.setState({address : address});
		},
		shopListEvent : function(shopListData){
			var routerId = store.globalData.get('routerId');
			ShopList.setState({
				routerId 	 : routerId,
				shopListData : shopListData
			});
		}
	},
	getAttr : {
		address : function(){
			return store.adminDetail.get('address');
		}
	},
}

routerRender.init();

/*
 *  App路由
 *	根据不同的地址渲染不同界面
 *  作者     : hoverCow
 *  日期     : 2017-03-02
 *	GitHub   : https://github.com/hoverCow1990/outFood
 */

var AppRouter = Backbone.Router.extend({
  routes: {
  	"" 					: 'index',			// 首页
  	"adminDetail" 		: "adminDetail",	// 用户详情页
  	"shopList/:query"   : "shopList",   	// 店铺列表页
  	"shopDetail/:query" : "shopDetail"		// 商铺详情页
  }
})

// 实例化 Router
var app_router = new AppRouter(); 		

//匹配至首页页面
app_router.on('route:index',function(){
	store.globalData.set({routerId:'index'});
	routerRender.indexPage();
}).on('route:adminDetail',function(){
	store.globalData.set({routerId:'adminDetail'});
	// routerRender.index();
}).on('route:shopList',function(routerId){
	store.globalData.set({routerId:routerId});
	routerRender.shopListPage(routerId);
}).on('route:shopDetail',function(routerId){
	store.globalData.set({routerId:routerId});	
	routerRender.shopDetailPage(routerId);
});

//开启路由机制
Backbone.history.start();


store.adminDetail.on('change:address',function(){
	routerRender.listener.addressEvent();
})

store.shopList.on('set reset',function(shopListData){
	routerRender.listener.shopListEvent(shopListData);
})

store.shopListAssistant.on('set reset',function(shopListAssistantData){
	routerRender.listener.shopListEvent(shopListAssistantData);
})







// var routerRender = {
// 	index : function(){
// 		Header.render();
// 		Index.render();
// 		Footer.render();
// 		if(void 0 === adminDetailData.get('adminPoints')) return;
// 		ShopList.initialize();
// 		ShopList.handlerRequest();
// 		ShopList.render();
// 	},
// 	shopList : function(){
// 		Header.render();
// 		Footer.render()
// 		ShopList.initState();
// 	},
// 	adminDetail : function(){
// 		Header.render();
// 		Footer.render();
// 		AdminDetail.render();
// 	},
// 	shopDetail : function(id){
// 		Header.render();
// 		ShopDetail.initState(Number(id));
// 	},
// 	listener : {
// 		shopListEvent : function(){
// 			ShopList.render();
// 		},
// 		addressEvent : function(){
// 			Header.render();
// 			ShopList.initState();
// 			if(null !== globalData.get('routerId')) return;
// 			//ShopList.handlerRequest();
// 			ShopList.render();
// 		},
// 		adminDetail : function(){
// 			if(globalData.get('routerId') === 'adminDetail') AdminDetail.render();
// 		},
// 		shopDetail : function(){
// 			ShopDetail.state = shopDetailData.last().attributes;
// 			ShopDetail.render();
// 		},
// 		pageTab : function(){
// 			ShopDetail.initState(ShopDetail.state.id);
// 		}
// 	}
// }