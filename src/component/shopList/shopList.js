import shopListTemplate from './shopListTemplate';
import {requestShopList} from '../../requestApi/requestApi';
import shopListData from '../../store/ShopListData';
import globalData from '../../store/globalData';
import adminDetailData from '../../store/adminDetailData';

 /*
 *  商铺列表页
 *	渲染ShopList,在首页index以及shopList下均有显示
 *  作者:hoverCow,日期:2017-03-02
 */

var ShopList = Backbone.View.extend({  
	tagName : 'div',  
	className : 'outFood-storeList',
	//ShopList内事件
	events :{
 		'touchstart  .sort-btn' : 'handlerSort', 	//处理销量或者热度排序的事件
	},
	//初始化
	initialize : function(){
		this.loading = false;
		this.hasData = true;
		this.requestSwitch = true;
		var tab = this.templateData.sortTab;
		tab = tab.map(function(item){
			item.active = false;
			return item;
		})
		this.count = 0;
	},
	//将loading以及count转初始状态
	initState(){
		this.loading = false;
		this.requestSwitch = true;
		this.hasData = true;
		this.count = 0;
		var tab = this.templateData.sortTab;
		tab = tab.map(function(item){
			item.active = false;
			return item;
		})
		shopListData.reset([],{silent : true});
		this.handlerRequest();
	},
	//模板数据信息
	templateData : {
		id : '',
		hasData : true,													//根据routerId匹配渲染不同的信息
		requestSwitch : this.requestSwitch,								//是否还有新的数据可以更新
		list : [],														//最后将请求后在数据层shopListData内获取
		ColumnTitle : {cn : '',english : ''},							//ColumnTitle的头部标题渲染信息,根据id匹配
		sortTab : [ {inner : '销量最高',ev : "sales",active : false},	//active控制红色高亮,ev控制点击后时间,inner则为渲染数据
					{inner : '评分最高',ev : "stars",active : false},
					{inner : '速度最快',ev : "time",active : false},
					{inner : '起送最低',ev : "start",active : false}],
		orderList : []
	},
	//模板
  	template: function(){
  		var id = globalData.get('routerId');
  		this.templateData.id = id;
  		this.templateData.list = shopListData.toJSON();					//在stroe内的shopListData
  		this.templateData.ColumnTitle = this.handerColumnTitle(id);		//利用函数handerColumnTitle返回不同的头部信息
  		this.templateData.orderList = adminDetailData.get('orderList');
		return juicer(shopListTemplate,this.templateData);
  	},
  	//模板渲染$('#app-Wrapper')为shopList路由内渲染,
  	//首页页面则装在一个$('#shopList-container')内
	render : function(){
		if(!shopListData.length) return;				//避免没有数据的时候渲染
		var $dom = globalData.get('routerId')?$('#app'):$('#shopList-container');
		this.el.innerHTML = this.template();
	    $dom.text('');
	    $dom.append(this.el);
	    this.initEvents($dom);
	    this.delegateEvents();  	//渲染后需要重新激活按键事件
	},
	initEvents($box){
		var $listDom = globalData.get('routerId')?$('.outFood-storeList'):$('#index'),
			loadingHeight = this.getLoadingHeight($listDom),
			loadingSwitch = true,
			self = this,
			scrollTop;
		$listDom.off('touchmove.shopList').on('touchmove.shopList',function(){
			scrollTop = -1*this.getBoundingClientRect().top;
			if(scrollTop > loadingHeight && loadingSwitch){
				loadingSwitch = false;
				self.handlerRequest($box,function(){
					loadingHeight = self.getLoadingHeight($listDom);
					loadingSwitch = true;
				});
			}
		});
	},
	getLoadingHeight : function($dom){
		return $dom.height() - $(window).height() - 50;
	},
	//进行请求数据,shopList初始申请5条数据,之后到达一定高度后继续往后申请
	handlerRequest : function($dom){
		if(!this.requestSwitch) return;
		var start = (this.count++)*5,
			id = globalData.get('routerId'),
			tag = id === null?'all':id,
			self = this;
		requestShopList(start,tag,function(){
			self.requestSwitch = false;
		});
	},
	//排序函数,点击排序tab按键后根据data-ev事件对store内的数据从新排序
	handlerSort : function(e){	
		var dom = e.target,
			$dom = dom.tagName === 'SPAN'?$(dom).parent():$(dom),
			tag = $dom.data('ev'),
			index = $dom.index(),
			sortTab = this.templateData.sortTab;
		var array = shopListData.sortBy(function(item){
			return item.get(tag);
		})
		if(tag === 'sales' || tag === 'stars') array.reverse();
		sortTab = sortTab.map(function(item,i){
			if(index == i){
				item.active = true;
			}else{
				item.active = false;
			}
			return item;
		})
		shopListData.reset(array);
	},
	handerColumnTitle : function(id){
  		switch (id){
  			case null :
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
  		}
  	}
});  

export default new ShopList(); 



