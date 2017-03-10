import config 	   from  '../config/config';
import store  	   from  '../store/store';
import Header 	   from  '../component/header/header'; 	
import Footer 	   from  '../component/footer/footer';	
import Index 	   from  '../component/index/index';	
import ShopList    from  '../component/shopList/shopList';
import ShopDetail  from  '../component/shopDetail/shopDetail';
import AdminDetail from  '../component/adminDetail/adminDetail';
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
	//首次登录的开关避免index的重复渲染
	initSwitch : true,
	//首次登录的执行事件
	init : function(){
		var callBack = ShopList.requestShopList.bind(ShopList,'index');	
		Header.requestadminDetail(callBack);					//发起用户数据的请求,会改变用户adrress,引发Header的渲染,回调请求ShopList数据,并引发ShopList的渲染
		Index.setState({scrollTop:0});				  			//渲染index页面
		Footer.render();										//渲染Footer
	},
	//首页路由的渲染机制
	indexPage : function(){
		if(this.initSwitch) return delete this.initSwitch;		//第一次路由匹配到index时,直接结束该执行,并清除initSwitch
		var address   = this.getAttr.address(),
			count     = Math.ceil(store.shopList.length/5),		//对首页ShopList请求数据的起始值重新设定
			tabActive = store.adminDetail.attributes.tabActive,	//对首页ShopList排序进行设定
			scrollTop = store.adminDetail.attributes.scrollTop;	//对首页的滚动高度渲染设定
		Footer.render();
		Index.setState({scrollTop:scrollTop});					//渲染Index页面
		ShopList.initState({									//初始化ShopList列表
			count 	  : count,
			tabActive : tabActive
		});
		ShopList.setState({										//渲染ShopList列表
			routerId 	 : 'index',
			shopListData : store.shopList
		});
		Header.resetBgColor();									//对头部的背景色按滚动高度重新设定
	},
	//二级页shopListPage路由的渲染机制
	shopListPage : function(routerId){
		ShopList.initState({									//对ShopList组件初始化数据
			count 	  : 0,
			tabActive : -1
		});
		ShopList.requestShopList.call(ShopList,routerId);		//发起新的ShopList请求
		store.shopListAssistant.reset([],{						//对shopListAssistant清空
			silent : true
		})
		Footer.render();										//渲染Footer
		Header.resetBgColor();									//头部背景色重置
	},
	//商铺详情页的渲染机制
	shopDetailPage : function(routerId){
		var lastRouterId = store.globalData.get('lastRouterId'),					//获取之前RouterId
			baseShopData = lastRouterId === 'index'?store.shopList.get(routerId):store.shopListAssistant.get(routerId),	//获取基础数据准备与新请求的数据合并成完整的商铺数据
			lastUrl      = lastRouterId === 'index'?'':'shopList/' + lastRouterId;	//将之前RouterId转回为回退按键的URL
		ShopList.cancelEvents();													//注销ShopList滚屏事件
		ShopDetail.setState({														//ShopDetail更新数据进行渲染
			id:Number(routerId),
			baseShopData   : baseShopData.attributes,
			shopDetailData : store.shopDetail,
			lastUrl   	   : lastUrl
		});
		Header.resetBgColor();														//重设Header的背景色
	},
	//用户详情的渲染机制
	adminDetailPage : function(){
		AdminDetail.setState(store.adminDetail);
		// Header.render();
		// Footer.render();
		// AdminDetail.render();
	},
	//观察者模式
	listener : {
		//监听到adminDetail中地址变化后的事件
		addressEvent : function(adminDetailData){
			var address = adminDetailData.get('address');
			Header.setState({address:address});				//对头部地址进行新的渲染

		},
		//监听到shopList数据变化后的事件
		shopListEvent : function(shopListData){					
			var routerId = store.globalData.get('routerId');	
			ShopList.setState({									//对ShopList进行渲染
				routerId 	 : routerId,
				shopListData : shopListData
			});
		},
		adminDetailEvent : function(data){
			AdminDetail.setState(data);
		},
	},
	//获取一些属性
	getAttr : {
		address : function(){
			return store.adminDetail.get('address');
		}
	},
	//对之前路径以及新的路径进行配置
	routerEvent : function(routerId){
		var globalData   = store.globalData,
			lastRouterId = globalData.get('routerId');
		globalData.set({
			lastRouterId : lastRouterId,
			routerId 	 : routerId
		})
	}
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
  	"" 					: 'index',				//首页
  	"adminDetail" 		: "adminDetail",		//用户详情页
  	"shopList/:query"   : "shopList",   		//二级页内的店铺列表页
  	"shopDetail/:query" : "shopDetail"			//商铺详情页
  }
})

//实例化 Router
var app_router = new AppRouter(); 		

//各router匹配后执行的事件
app_router.on('route:index',function(){			//匹配至首页页面
	routerRender.routerEvent('index');
	routerRender.indexPage();
}).on('route:adminDetail',function(){			//匹配至用户详情页面
	routerRender.routerEvent('adminDetail');
	routerRender.adminDetailPage();
}).on('route:shopList',function(routerId){		//匹配渲染商铺列表
	routerRender.routerEvent(routerId);
	routerRender.shopListPage(routerId);
}).on('route:shopDetail',function(routerId){	//匹配渲染商户详情信息
	routerRender.routerEvent(routerId);	
	routerRender.shopDetailPage(routerId);
});

//开启路由机制
Backbone.history.start();

//监听adminDetail的地址信息改变
store.adminDetail.on('change:address',function(adminDetailData){
	routerRender.listener.addressEvent(adminDetailData);
}).on('change:name change:balance',function(data){
	if(store.globalData.get('routerId') !== 'adminDetail') return;
	routerRender.listener.adminDetailEvent(data);
})

//监听shopList模块的变化
store.shopList.on('set reset',function(shopListData){
	routerRender.listener.shopListEvent(shopListData);
})

//监听shopListAssistant模块的变化
store.shopListAssistant.on('set reset',function(shopListAssistantData){
	routerRender.listener.shopListEvent(shopListAssistantData);
})