import Index from '../component/index/index';
import Header from '../component/header/header';
import ShopList from '../component/shopList/shopList';
import ShopDetail from '../component/shopDetail/shopDetail';
import ShopMenu from '../component/shopDetail/shopMenu';
import AdminDetail from '../component/adminDetail/adminDetail';
import Footer from '../component/footer/footer';
import globalData from '../store/globalData';
import shopListData from '../store/ShopListData';
import adminDetailData from '../store/adminDetailData';
import shopDetailData from '../store/shopDetailData';

if(window.location.hash !== '') window.location.hash = '';

//修改据juicer的内置变量符号(encode类型)
//原本为${}由于使用``避免与原语法冲突修改为%{}
juicer.set({    
    'tag::noneencodeOpen': '<%= ',  
    'tag::noneencodeClose': '=>',   
});  

//关闭模态框点击既关闭的设置
$.modal.prototype.defaults.autoClose = false;

/*
 * app路由机制
 * 键他
 */

var AppRouter = Backbone.Router.extend({
  routes: {
  	""  : 'index',						// 首页
  	"shopList/:query":"shopList",   	// 店铺列表页
  	"adminDetail" : "adminDetail",		// 用户详情页
  	"shopDetail/:query" : "shopDetail"	// 商铺详情页
  }
});

// 实例化 Router
var app_router = new AppRouter();


 /*
 *  各页面的渲染机制
 *	分别为index,shopList,adminDetail,shopDetail模块
 *  作者:hoverCow,日期:2017-03-01
 */

var routerRender = {
	index : function(){
		Header.render();
		Index.render();
		Footer.render();
		if(void 0 === adminDetailData.get('adminPoints')) return;
		ShopList.initialize();
		ShopList.handlerRequest();
		ShopList.render();
	},
	shopList : function(){
		Header.render();
		Footer.render()
		ShopList.initState();
	},
	adminDetail : function(){
		Header.render();
		Footer.render();
		AdminDetail.render();
	},
	shopDetail : function(id){
		Header.render();
		ShopDetail.initState(Number(id));
	},
	listener : {
		shopListEvent : function(){
			ShopList.render();
		},
		addressEvent : function(){
			Header.render();
			ShopList.initState();
			if(null !== globalData.get('routerId')) return;
			//ShopList.handlerRequest();
			ShopList.render();
		},
		adminDetail : function(){
			if(globalData.get('routerId') === 'adminDetail') AdminDetail.render();
		},
		shopDetail : function(){
			ShopDetail.state = shopDetailData.last().attributes;
			ShopDetail.render();
		},
		pageTab : function(){
			ShopDetail.initState(ShopDetail.state.id);
		}
	}
}

//首页页面
app_router.on('route:index', function(id){
	globalData.set({routerId:null});
	routerRender.index();
});
//用户详情页面
app_router.on('route:adminDetail', function(){
	globalData.set({routerId:"adminDetail"});
	routerRender.adminDetail();
});
//店铺列表页页面
app_router.on('route:shopList',function(id){
	globalData.set({routerId:id});
	routerRender.shopList();
});

//店铺列表页页面
app_router.on('route:shopDetail',function(id){
	globalData.set({routerId:id});
	routerRender.shopDetail(id);
});

Backbone.history.start();

/*
 * adminDetailData地址发生变化时对Header渲染
 * 作者:hoverCow,日期:2017-03-02
 */

shopListData.on('reset set add',function(){
	routerRender.listener.shopListEvent();
})

/*
 * adminDetailData地址发生变化时对Header渲染
 * 如果此时页面为adminDetail,则同时对adminDetail渲染
 * 作者:hoverCow,日期:2017-03-03
 */

adminDetailData.on('change:adress',function(){
	routerRender.listener.addressEvent();
})

adminDetailData.on('change',function(){
	routerRender.listener.adminDetail();
})

/*
 * shopDetailData数据发生变化时对shopDetail页面渲染
 * 作者:hoverCow,日期:2017-03-05
 */
shopDetailData.on('add',function(){
	routerRender.listener.shopDetail();
})

shopDetailData.on('change:pageTab',function(){
	routerRender.listener.pageTab();
})