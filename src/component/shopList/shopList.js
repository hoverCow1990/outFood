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
 *  ------------------------------------------------------------------------
 *  state示例: {
 *    count           : 0,			//每次请求数组的起始位置	
 *    routerId        : 0,			//当前路由匹配的id
 *    hasSearchData   : true,		//作为搜索页时是否有搜索结果的渲染判断
 *    requestSwitch   : true,		//是否还有新的数据可以更新
 *    loadingSwitch   : true,		//超过加载高度时,在两次加载间避免重复请求
 *    list         	  : [],			//最后将请求后在数据层shopListData内获取用作列表渲染的主要数据
 *    columnTitle     : {},			//ColumnTitle的头部标题渲染信息,根据routerId匹配
 *    tabActive       : -1,			//sortTab按键红色高亮的index渲染
 *    orderList       : [],			//用于用户在添加购物车后对有订单的商户进行红色标示
 *    shopListData    : null,		//store.shopListData
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
		count 	 	  : 0,								
		routerId 	  : 0,
		tabActive 	  : -1,	
		list 		  : [],
		orderList 	  : [],										
		hasSearchData : true,
		requestSwitch : true,			
		loadingSwitch : true,
		columnTitle   : {cn:'',english:''},									
		shopListData  : null,				
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
			columnTitle  = this.getColumnTitle(routerId),
			orderList    = store.adminDetail.get('orderList');
		state = $.extend(state,{
			routerId 	 : routerId,
			shopListData : shopListData,
			list         : shopListData.toJSON(),
			columnTitle  : columnTitle,
			orderList    : orderList
		})
		this.render();		
	},
  	//模板渲染$('#app-Wrapper')为shopList路由内渲染,
	render : function(){
 		var $dom = this.state.routerId === 'index'?$('#shopList-container'):$('#app');		//作为首页时装在$('#shopList-container')内,作为二级页时装在#app内
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
		!isIndex && this.state.count === 1 &&this.dom.$appWrapper.scrollTop(0);				//非首页时页面scroll滚回0
		this.dom.$appWrapper.off('scroll.shopList').on('scroll.shopList',function(){
			scrollTop = this.scrollTop;
			if(scrollTop > loadingHeight && self.state.loadingSwitch){
				self.state.loadingSwitch = false;
				self.requestShopList(routerId,function(){									//高于极限距离时候进行请求
					loadingHeight = self.getLoadingHeight($app);							//更新其极限距离
					self.state.loadingSwitch = true;										//重新允许进行新的请求
				});
			}
		}).off('touchend.shopList').on('touchend.shopList',function(){
			isIndex && store.adminDetail.set({scrollTop:this.scrollTop},{silent:true})  	//在首页松手时记录在首页的滚动高度
		})
	},
	cancelEvents : function(){
		this.dom.$appWrapper.off('scroll.shopList touchend.shopList');						//在除了有shopList页面的情况下注销这些事件
	},
	getLoadingHeight : function($app){
		return $app.height() - $(window).height() - shopListConfig.requestDistance;
	},
	//进行请求数据,shopList初始申请5条数据,之后到达一定高度后继续往后申请
	requestShopList : function(tag){
		if(!this.state.requestSwitch) return;
		var start = (this.state.count++) * 5,
			self  = this;
		requestShopList(start,tag);
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
		if(this.state.routerId) store.adminDetail.set({tabActive:index},{silent:true})
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



