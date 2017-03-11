import shopPaymentTemplate from './shopPaymentTemplate';

/*
 *  ShopPayment
 *  渲染用户订单页面,在尾部,menu页,用户信息页均有入口
 *  作者     : hoverCow
 *  日期     : 2017-03-11
 *  GitHub   : https://github.com/hoverCow1990/outFood
 *  ------------------------------------------------------------------------
 *  state示例: {
 *	 id 		 : 2,						//商户id
 *	 logo	     : 'mc',					//logo
 *	 name 	     : '麦当劳',				//商户名
 *	 payment     : 136,						//支付总额
 *	 time 	     : new Date(),				//订单日期
 *	 balance     : 53.5,					//余额
 *	 redPacket   : [{value:...,time:...}],	//红包
 *	 adminDetail : Backbone.Model,			//bakbone模型
 *	 derate      : 0,						//减免额
 *	 redPacketTab: -1,						//红包选择index
 */


//商户列表页的试图层
var ShopPayment = Backbone.View.extend({  
	tagName : 'div',  
	className : 'shopPayment',
	events : {
		'touchstart .redpacket-list' : "handlerDerate",
		'touchstart .shopPayment-ensure.active' : 'handlerEnsure'
	},
	dom : {
    	$app : $('#app')
  	},
	//state
	state : {
		derate : 0,
	},
	//将loading以及count转初始状态
	setState : function(nextState){
		var id			= nextState.id,
			adminDetail = nextState.data,
			balance	 	= adminDetail.get('balance'),
			redPacket   = adminDetail.get('redPacket'),
			orderList   = adminDetail.get('orderList')[id];
		if(orderList === void 0){
			this.state = {hasPay : true};
			this.render();
			return;
		}
		this.state = $.extend(this.state,{
			hasPay  	: false,
			id 		    : orderList.id,
			logo	    : orderList.logo,
			name 	    : orderList.name,
			payment     : orderList.payment,
			time 	    : orderList.time.toLocaleDateString().replace(/\//g,'-'),
			balance     : balance,
			redPacket   : redPacket,
			adminDetail : adminDetail,
			derate      : 0,
			redPacketTab: -1,
		});
		this.render();
	},
  	//模板渲染
	render : function(){
 	  	this.el.innerHTML = juicer(shopPaymentTemplate,this.state)
	    this.dom.$app.text('').append(this.el);
	    this.delegateEvents(); 	
	},
	//处理红包列表选择事件
	handlerDerate : function(e){
		var nextState 	 = this.getDerateValue($(e.target)),
			value     	 = nextState.value,
			redPacketTab = nextState.index;
		if(isNaN(value) || value === void 0) return;			//小几率点到ul时会返回NaN或void 0
		this.state.derate		= value;						//调整减免额
		this.state.redPacketTab = redPacketTab;					//更替红包选择index
		this.render();
	},
	//获取节点上保存的data-value以及该li的index
	getDerateValue : function($dom){
		var count = 0;
		while($dom.data('value') === void 0 && count<5){		//获取点击节点信息
			$dom = $dom.parent();
			count++;
		}
		return {
			value : Number($dom.data('value')),
			index : $dom.index()
		}
	},
	handlerEnsure : function(){
		var balance = (this.state.balance*10 + this.state.derate*10 - this.state.payment*10)/10;
		this.state.derate && this.state.redPacket.splice(this.state.redPacketTab,1);
		this.state.adminDetail.get('orderList').splice(this.state.id,1)
		this.state.adminDetail.set({
			balance : balance
		})
		this.state.hasPay  = true;
		this.render();
	}
});



export default new ShopPayment(); 



