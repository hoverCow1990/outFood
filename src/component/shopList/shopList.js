import shopListTemplate from './shopListTemplate';
import {requestShopList} from '../../requestApi/requestApi';
import shopListData from '../../store/shopList';
import globalData from '../../store/globalData';

var ShopList = Backbone.View.extend({  
	tagName : 'div',  
	className : 'outFood-storeList',
	events :{
 		'click  .sort-btn' : 'handlerSort',
	},
	initialize : function(){
		this.initState();
	},
	templateData : {
		id : '',
		list : [],
		isFixed : false,
		ColumnTitle : {
			cn : '',
			english : '',
		},
		sortTab : [
			{
				inner : '销量最高',
				ev : "sales",
				active : false,
			},
			{
				inner : '评分最高',
				ev : "stars",
				active : false,
			},
			{
				inner : '速度最快',
				ev : "time",
				active : false,
			},
			{
				inner : '起送最低',
				ev : "express",
				active : false,
			},
		],
	},
  	template: function(){
  		var id = globalData.get('routerId');
  		this.templateData.id = id;
  		this.templateData.list = shopListData.toJSON();
  		this.templateData.ColumnTitle = this.handerColumnTitle(id);
		return juicer(shopListTemplate,this.templateData);
  	},
  	handerColumnTitle : function(id){
  		switch (id){
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
  			default :
  				return {cn:'附近美食',english:'Nearby diet'};
  		}
  	},
	render : function(){
		var $dom = globalData.get('routerId')?$('#app-Wrapper'):$('#shopList-container');
		this.el.innerHTML = this.template();
	    $dom.text('');
	    $dom.append(this.el);
	    this.delegateEvents()  
	},
	initState(){
		this.loading = false;
		this.count = 0;
	},
	getTop : function(){
		return this.$el.find('.storeList-wrapper').offset().top;
	},
	handlerRequest : function($dom,cb){
		if (!$dom.length){
			$dom = $('<div id= "shopList-container"></div>')
			$('#app-Wrapper').append($dom);
		}	
		if(this.count >= 3) return;
		var start = (this.count++)*5,
			end = start + 5,
			self = this;
		requestShopList(start,end,cb);
	},
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
	}
});  

export default new ShopList(); 
