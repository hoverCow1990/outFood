import orderListTemplate from './orderListTemplate';

/*
 *  OrderList
 *  渲染用户订单页面,在尾部,menu页,用户信息页均有入口
 *  作者     : hoverCow
 *  日期     : 2017-03-10
 *  GitHub   : https://github.com/hoverCow1990/outFood
 *  ------------------------------------------------------------------------
 *  state示例: {
 *   orderList : [{...},...]				
 *  {...}示例 :
 *	 allLength : 2 							//总共单品数量
 *	 couldPay:-12							//快递费-总价作为是否可以支付的依据
 *	 express:10								//快递费
 *	 id:0									//商户id
 *	 list:[{name:'套餐',num:2,value:52},..]	//选择的菜品信息
 *	 logo:"mc"								//商户logo
 *	 name:"麦当劳"							//商户名
 *	 payment:52								//总价
 */


//商户列表页的试图层
var OrderList = Backbone.View.extend({  
	tagName : 'div',  
	className : 'orderList',
	dom : {
    	$app : $('#app')
  	},
	//state
	state : {},
	//将loading以及count转初始状态
	setState : function(nextState){
		this.state.orderList = Array.prototype.slice.call(nextState.get('orderList'));
		this.state.orderList.sort(function(a,b){
			return b.time - a.time;
		})
		this.render();		
	},
  	//模板渲染$('#app-Wrapper')为shopList路由内渲染,
	render : function(){
 	  	this.el.innerHTML = juicer(orderListTemplate,this.state)
	    this.dom.$app.text('').append(this.el);
	    this.initEvents();
	    this.delegateEvents(); 	
	},
	//初始化事件,滚屏事件,如果页面滚到shopList底部部分,开始新的请求,并且初始化二级页的滚动高度
	initEvents(){
		$('.toBeBay').css('height',$(window).height() - 262)
	},
});



export default new OrderList(); 



