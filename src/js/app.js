import Index from '../component/index/index';
import Header from '../component/header/header';
import ShopList from '../component/shopList/shopList';
import Footer from '../component/footer/footer';
import AdminDetail from '../component/adminDetail/adminDetail';
import globalData from '../store/globalData';
import shopListData from '../store/ShopListData';
import adminDetailData from '../store/adminDetailData';

//修改据juicer的内置变量符号(encode类型)
//原本为${}由于使用``避免与原语法冲突修改为%{}
juicer.set({    
    'tag::noneencodeOpen': '<%= ',  
    'tag::noneencodeClose': '=>',   
});  

//关闭模态框点击既关闭的设置
$.modal.prototype.defaults.autoClose = false;

 /*
 *  App首页展示
 *	渲染Header,Index,ShopList
 *  作者:hoverCow,日期:2017-03-01
 */

var indexShow = {
	init : function(){
		//var cb = this.handlerScroll.bind(this);
		Header.render();
		Index.render();
		ShopList.initialize();
		ShopList.handlerRequest();
		ShopList.render();
		Footer.render();
	}
}

/* 
 * 商店列表
 */

var shopListShow = $.extend({},indexShow,{
	init : function(){
		Header.render();
		Footer.render()
		ShopList.initState();
	},
})

/* 
 * 用户列表
 */

var adminDetailShow = $.extend({},indexShow,{
	init : function(){
		Header.render();
		Footer.render();
		AdminDetail.render();
	},
})


/*
 * app路由机制
 * 键他
 */

var AppRouter = Backbone.Router.extend({
  routes: {
  	""  : 'index',					// 首页
  	"shopList/:query":"shopList",   // 店铺列表页
  	"adminDetail" : "adminDetail"	// 用户详情页
  }
});
// 实例化 Router
var app_router = new AppRouter();

//首页页面
app_router.on('route:index', function(id){
	globalData.set({routerId:null});
	indexShow.init.call(indexShow);
});
//用户详情页面
app_router.on('route:adminDetail', function(){
	globalData.set({routerId:"adminDetail"});
	adminDetailShow.init.call(adminDetailShow);
});
//店铺列表页页面
app_router.on('route:shopList',function(id){
	globalData.set({routerId:id});
	shopListShow.init.call(shopListShow);
});

Backbone.history.start();

/*
 * adminDetailData地址发生变化时对Header渲染
 * 作者:hoverCow,日期:2017-03-02
 */

shopListData.on('reset set add',function(){
	ShopList.render();
})

/*
 * adminDetailData地址发生变化时对Header渲染
 * 如果此时页面为adminDetail,则同时对adminDetail渲染
 * 作者:hoverCow,日期:2017-03-03
 */

adminDetailData.on('change:adress',function(){
	Header.render();
	//if(globalData.get('routerId') === 'adminDetail') AdminDetail.render();
})

adminDetailData.on('change',function(){
	if(globalData.get('routerId') === 'adminDetail') AdminDetail.render();
})

