
 /*
 *  商铺列表页
 *	渲染ShopList,在首页index以及shopList下均有显示
 *  作者:hoverCow,日期:2017-03-02
 */

// var ShopList = Backbone.View.extend({  
// 	tagName : 'div',  
// 	className : 'outFood-storeList',
// 	//ShopList内事件
// 	events :{
//  		'touchstart  .sort-btn' : 'handlerSort', 	//处理销量或者热度排序的事件
// 	},
// 	//初始化
// 	initialize : function(){
// 		this.state.requestSwitch = true;
// 		//this.state.count = 0;
// 		var tab = this.state.sortTab;
// 		tab = tab.map(function(item){
// 			item.active = false;
// 			return item;
// 		})
// 		//shopListData.reset([],{silent : true});
// 	},
// 	//将loading以及count转初始状态
// 	initState(){
// 		this.state.requestSwitch = true;
// 		this.state.count = 0;
// 		var tab = this.state.sortTab;
// 		tab = tab.map(function(item){
// 			item.active = false;
// 			return item;
// 		})
// 		shopListData.reset([],{silent : true});
// 		this.handlerRequest();
// 	},
// 	//模板数据信息
// 	state : {
// 		id : '',
// 		count : 0,
// 		hasData : true,													//根据routerId匹配渲染不同的信息
// 		requestSwitch : true,											//是否还有新的数据可以更新
// 		loadingSwitch : true,
// 		list : [],														//最后将请求后在数据层shopListData内获取
// 		ColumnTitle : {cn : '',english : ''},							//ColumnTitle的头部标题渲染信息,根据id匹配
// 		sortTab : [ {inner : '销量最高',ev : "sales",active : false},	//active控制红色高亮,ev控制点击后时间,inner则为渲染数据
// 					{inner : '评分最高',ev : "stars",active : false},
// 					{inner : '速度最快',ev : "time",active : false},
// 					{inner : '起送最低',ev : "start",active : false}],
// 		orderList : []
// 	},
// 	//模板
//   	template: function(){
//   		var id = globalData.get('routerId');
//   		this.state.id = id;
//   		this.state.list = shopListData.toJSON();					//在stroe内的shopListData
//   		this.state.ColumnTitle = this.handerColumnTitle(id);		//利用函数handerColumnTitle返回不同的头部信息
//   		this.state.orderList = adminDetailData.get('orderList');
// 		return juicer(shopListTemplate,this.state);
//   	},
//   	//模板渲染$('#app-Wrapper')为shopList路由内渲染,
//   	//首页页面则装在一个$('#shopList-container')内
// 	render : function(){
// 		if(!shopListData.length) return;				//避免没有数据的时候渲染
// 		var $dom = globalData.get('routerId')?$('#app'):$('#shopList-container');
// 		this.el.innerHTML = this.template();
// 	    $dom.text('');
// 	    $dom.append(this.el);
// 	    this.initEvents($dom);
// 	    this.delegateEvents();  	
// 	},
// 	initEvents($box){
// 		var $listDom = globalData.get('routerId')?$('.outFood-storeList'):$('#index'),
// 			loadingHeight = this.getLoadingHeight($listDom),
// 			self = this,
// 			scrollTop;
// 		this.state.loadingSwitch = true;
// 		$listDom.off('touchmove.shopList').on('touchmove.shopList',function(){
// 			scrollTop = -1*this.getBoundingClientRect().top;
// 			if(scrollTop > loadingHeight && self.state.loadingSwitch){
// 				self.state.loadingSwitch = false;
// 				self.handlerRequest($box,function(){
// 					loadingHeight = self.getLoadingHeight($listDom);
// 					self.state.loadingSwitch = true;
// 				});
// 			}
// 		});
// 	},
// 	getLoadingHeight : function($dom){
// 		return $dom.height() - $(window).height() - 50;
// 	},
// 	//进行请求数据,shopList初始申请5条数据,之后到达一定高度后继续往后申请
// 	handlerRequest : function($dom){
// 		var id = globalData.get('routerId');
// 		if(!this.state.requestSwitch || id === 'adminDetail') return;
// 		var start = (this.state.count++)*5,
// 			tag = id === null?'all':id,
// 			self = this;
// 		requestShopList(start,tag,function(){
// 			self.state.requestSwitch = false;
// 			self.render();
// 		});
// 	},
// 	//排序函数,点击排序tab按键后根据data-ev事件对store内的数据从新排序
// 	handlerSort : function(e){	
// 		var dom = e.target,
// 			$dom = dom.tagName === 'SPAN'?$(dom).parent():$(dom),
// 			tag = $dom.data('ev'),
// 			index = $dom.index(),
// 			sortTab = this.state.sortTab;
// 		var array = shopListData.sortBy(function(item){
// 			return item.get(tag);
// 		})
// 		if(tag === 'sales' || tag === 'stars') array.reverse();
// 		sortTab = sortTab.map(function(item,i){
// 			if(index == i){
// 				item.active = true;
// 			}else{
// 				item.active = false;
// 			}
// 			return item;
// 		})
// 		shopListData.reset(array);
// 	},
// 	//根据当前路由的id返回不同的头部！
// 	handerColumnTitle : function(id){
//   		switch (id){
//   			case null :
//   				return {cn:'附近美食',english:'Nearby diet'};
//   			case 'delicious':
//   				return {cn:'推荐美食',english:'Recommended food'};
//   			case 'seafood':
//   				return {cn:'海鲜盛宴',english:'Seafood feast'};
//   			case 'fruit':
//   				return {cn:'健康水果',english:'Healthy fruit'};
//   			case 'sweet':
//   				return {cn:'诱人甜食',english:'Tempting dessert'};
//   			case 'fast':
//   				return {cn:'最爱快餐',english:'Favorite fast food'};
//   			case 'drink':
//   				return {cn:'解渴饮品',english:'Drink drink'};
//   			case 'chinese':
//   				return {cn:'中式餐点',english:'Chinese meal'};
//   			case 'discount':
//   				return {cn:'优惠美食',english:'Premium food'};
//   			case 'love' :
//   				return {cn:'收藏商户',english:'Collection merchant'};
//   			default :
//   				return {cn:'我的搜索',english:'My search'};
//   		}
//   	}
// });  



// import shopListData from '../../store/ShopListData';
// import globalData from '../../store/globalData';
import store from '../../store/store';
import shopListTemplate from './shopListTemplate';
import {requestShopList} from '../../requestApi/requestApi';
import {shopListConfig} from '../../config/config';

/*
 *  ShopList
 *  渲染ShopList,在首页index以及shopList下均有显示
 *  作为搜索页或者二级页时使用store.shopListAssistant
 *  作为首页渲染时使用store.shopListMain
 *  作者     : hoverCow
 *  日期     : 2017-03-04
 *  GitHub   : https://github.com/hoverCow1990/outFood
 */

//商户列表页的试图层
var ShopList = Backbone.View.extend({  
	tagName : 'div',  
	className : 'outFood-storeList',
	//ShopList内事件
	events :{
 		'touchstart  .sort-btn' : 'handlerSort', 	//处理销量或者热度排序的事件
	},
	dom : {
		$appWrapper : $('#app-Wrapper')
	},
	//state
	state : {
		count : 0,									//每次请求数组的起始位置			
		routerId : '',								//当前路由匹配的id
		hasSearchData : true,						//作为搜索页时是否有搜索结果的渲染判断
		requestSwitch : true,						//是否还有新的数据可以更新
		loadingSwitch : true,						//超过加载高度时,在两次加载间避免重复请求
		list : [],									//最后将请求后在数据层shopListData内获取
		columnTitle : {cn : '',english : ''},		//ColumnTitle的头部标题渲染信息,根据id匹配
		tabActive : -1,								//sortTab按键红色高亮的index渲染
		orderList : [],								//用于用户在添加购物车后对有订单的商户进行红色标示
		shopListData : null,						//store.shopListData,
	},
	//在切换主页和二级页或者二级页与二级页之间切换是,将一些state还原成初始状态,count则用于还原index也已经加载完毕的count
	initState : function(nextState){
		var state = this.state;
		state.hasSearchData = true;
		state.requestSwitch = true;
		state.loadingSwitch = true;
		state.count 		= nextState.count;
		state.tabActive 	= nextState.tabActive;
	},
	//将loading以及count转初始状态
	setState : function(nextState){
		var state 		 = this.state,
			routerId     = nextState.routerId,
			shopListData = nextState.shopListData,
			list         = shopListData.toJSON(),
			columnTitle  = this.getColumnTitle(routerId);
		state = $.extend(state,{
			routerId 	 : routerId,
			shopListData : shopListData,
			list         : shopListData.toJSON(),
			columnTitle  : columnTitle
		})
		this.render();		
	},
  	//模板渲染$('#app-Wrapper')为shopList路由内渲染,
  	//作为首页时装在$('#shopList-container')内,作为二级页时装在#app内
	render : function(){
 		var $dom = this.state.routerId === 'index'?$('#shopList-container'):$('#app');
 		this.el.innerHTML = juicer(shopListTemplate,this.state)
	    $dom.text('').append(this.el);
	    this.initEvents(this.state.routerId);
	    this.delegateEvents(); 	
	},
	//初始化事件,滚屏事件,如果页面滚到shopList底部部分,开始新的请求,并且初始化二级页的滚动高度
	initEvents(routerId){
		var $app = this.dom.$appWrapper.children(':first').removeAttr('style'),
			loadingHeight = this.getLoadingHeight($app),
			isIndex = this.state.routerId === 'index',
			self = this,scrollTop;
		this.state.loadingSwitch = true;
		this.dom.$appWrapper.off('scroll.shopList').on('scroll.shopList',function(){
			scrollTop = this.scrollTop;
			if(scrollTop > loadingHeight && self.state.loadingSwitch){
				self.state.loadingSwitch = false;
				self.requestShopList(routerId,function(){
					loadingHeight = self.getLoadingHeight($app);
					self.state.loadingSwitch = true;
				});
			}
		}).off('touchend').on('touchend',function(){
			isIndex && store.adminDetail.set({scrollTop:this.scrollTop},{silent:true})  	//记录在首页时候
		})
		!isIndex && this.dom.$appWrapper.scrollTop(0);
	},
	getLoadingHeight : function($app){
		return $app.height() - $(window).height() - shopListConfig.requestDistance;
	},
	//进行请求数据,shopList初始申请5条数据,之后到达一定高度后继续往后申请
	requestShopList : function(tag){
		//var id = globalData.get('routerId');
		//if(!this.state.requestSwitch || id === 'adminDetail') return;
		if(!this.state.requestSwitch) return;
		var start = (this.state.count++) * 5,
			self  = this;
		requestShopList(start,tag,function(){
			//self.state.requestSwitch = false;
			//self.render();
		});
	},
	//排序函数,点击排序tab按键后根据data-ev事件对store内的数据从新排序
	handlerSort : function(e){	
		var $dom  = e.target.tagName === 'SPAN'?$(e.target).parent():$(e.target),
			index = $dom.index(),
			tag   = $dom.data('ev'),
			data  = this.state.shopListData;
		this.state.tabActive = index;
		var array = data.sortBy(function(item){
			return item.get(tag);
		})
		if(tag === 'sales' || tag === 'stars') array.reverse();
		if(this.state.routerId) store.adminDetail.set({tabActive:index},{silent : true})
		data.reset(array);
	},
	//根据当前路由的id返回不同的头部！
	getColumnTitle : function(routerId){
  		switch(routerId){
  			case 'index' :
  				return {cn:'附近美食',english:'Nearby diet'};
  			case 'delicious':
  				return {cn:'推荐美食',english:'Recommended food'};
  			case 'seafood':
  				return {cn:'海鲜盛宴',english:'Seafood feast'};
  			case 'fruit':
  				return {cn:'健康水果',english:'Healthy fruit'};
  			case 'sweet':
  				return {cn:'诱人甜食',english:'Tempting dessert'};
  			case 'fast':
  				return {cn:'最爱快餐',english:'Favorite fast food'};
  			case 'drink':
  				return {cn:'解渴饮品',english:'Drink drink'};
  			case 'chinese':
  				return {cn:'中式餐点',english:'Chinese meal'};
  			case 'discount':
  				return {cn:'优惠美食',english:'Premium food'};
  			case 'love' :
  				return {cn:'收藏商户',english:'Collection merchant'};
  			default :
  				return {cn:'我的搜索',english:'My search'};
  		};
  	}
});



export default new ShopList(); 



