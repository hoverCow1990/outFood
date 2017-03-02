import Index from '../component/index/index';
import Header from '../component/header/header';
import ShopList from '../component/shopList/shopList';
import Footer from '../component/footer/footer';
import AdminDetail from '../component/adminDetail/adminDetail';
import globalData from '../store/globalData';

//修改据juicer的内置变量符号(encode类型)
//原本为${}由于使用``避免与原语法冲突修改为%{}
juicer.set({    
    'tag::noneencodeOpen': '<%= ',  
    'tag::noneencodeClose': '=>',   
});  

 /*
 *  App首页展示
 *	渲染Header,Index,ShopList
 *  作者:hoverCow,日期:2017-03-01
 */

var indexShow = {
	init : function(){
		var cb = this.handlerScroll.bind(this);
		Header.render($('#header'));
		Index.render($('#app-Wrapper'));
		ShopList.handlerRequest($('#shopList-container'),cb);
		Footer.render($('#footer'))
	},
	//处理页面滚动事件，包括head头以及动态请求加载shopList
	handlerScroll : function(){
		var self = this,
			loadingSwitch = true,
			loadingHeight = this.getLoadingHeight(),
			sortNavHeight = ShopList.getTop() - 40,
			$sortDom = $('.storeList-sort'),
			sortNavSwitch = true,
			scrollTop; 
		$(window).off('scroll').on('scroll',function(){
			scrollTop = $(this).scrollTop();
			if(scrollTop < 200){
				Header.handlerStyle(scrollTop);
			}
			if(scrollTop > loadingHeight && loadingSwitch){
				loadingSwitch = false;
				ShopList.handlerRequest($('#shopList-container'),self.shopListCallBack.bind(self,loadingSwitch));
			}
			if(scrollTop > sortNavHeight && sortNavSwitch){
				sortNavSwitch = false;
				ShopList.templateData.isFixed = true;
				ShopList.render();
			}else if(scrollTop < sortNavHeight && !sortNavSwitch){
				sortNavSwitch = true;
				ShopList.templateData.isFixed = false;
				ShopList.render();
			}
		})
	},
	shopListCallBack : function(){
		this.handlerScroll();
		arguments[0] = true;
	},
	getLoadingHeight : function(){
		return $(document).height() - $(window).height() - 50;
	}
}

/* 
 * 商店列表
 */

var shopListShow = $.extend({},indexShow,{
	init : function(){
		var cb = this.handlerScroll.bind(this);
		Header.render($('#header'));
		Footer.render($('#footer'))
		ShopList.initState();
		ShopList.handlerRequest($('#app-Wrapper'),cb)
	},
})

/* 
 * 用户列表
 */

var adminDetail = $.extend({},indexShow,{
	init : function(){
		Header.render($('#header'));
		Footer.render($('#footer'));
		AdminDetail.render();
	},
})


/*
 * app路由机制
 * 
 */

var AppRouter = Backbone.Router.extend({
  routes: {
  	""  : 'index',
  	"shopList/:query":"shopList",  // #search/kiwis
  	"adminDetail" : "adminDetail"
  }
});
 // 实例化 Router
var app_router = new AppRouter();

app_router.on('route:index', function (id) {
	globalData.set({routerId:id});
	indexShow.init.call(indexShow);
});

app_router.on('route:shopList', function (id) {
	globalData.set({routerId:id});
	shopListShow.init.call(shopListShow);
});

app_router.on('route:adminDetail', function (id) {
	globalData.set({routerId:id});
	adminDetail.init.call(adminDetail);
});


Backbone.history.start();
