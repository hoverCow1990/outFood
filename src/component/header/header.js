import {headerConfig} from '../../config/config';
import {requestadminDetail} from '../../requestApi/requestApi';
import headerTemplate from './headerTemplate';
import {baseHost} from '../../config/config';

/*
 *  头部导航部分
 *	渲染Header,左侧用户地址栏以及右侧搜索框
 *  作者     : hoverCow
 *  日期     : 2017-03-02
 *  GitHub   : https://github.com/hoverCow1990/outFood
 *  ------------------------------------------------------------------------
 *  state示例: {
 *    address : '徐汇区长桥八村27号'	//用户地址,在渲染时会截取区后面的内容
 *  }	
 */

//头部组件试图层
var Header = Backbone.View.extend({  
	tagName : 'div',  
	className : 'weui-flex',
	//注册相关事件
	events :{
 		'keyup .search' : 'handlerInputStyle',			//搜索栏事件
 		'touchstart .submit' : 'handerSubmit'			//提交按钮时间			
	},
	dom : {
		$header 	: $('#header'),
		$appWrapper : $('#app-Wrapper')
	},
	//头部模块数据
	state : {
		address : ''
	},
	//初始化state并且根据传入的boolean选择是否需要渲染
	setState : function(nextState){
		if(nextState.address === void 0) return;
		this.state.address = nextState.address;
		this.render();
	},
  	//渲染头部
	render : function(){ 
	    this.el.innerHTML = juicer(headerTemplate,this.state);
	    this.dom.$header.append(this.el);  
	    this.initEvents(this.dom.$header);
	    this.delegateEvents();  	//渲染后需要重新激活按键事件
	},
	requestadminDetail : function(success){
		requestadminDetail(success);
	},
	//变黑动画函数,当页面往下滚动时,头部导航栏变黑,maxTop来自headerConfig为200px!
	initEvents : function($header){
		var maxTop = headerConfig.maxTop,
			scrollTop,pop,bgColor;
		this.dom.$appWrapper.off('scroll.nav').on('scroll.nav',function(){
			scrollTop = this.scrollTop;
			if(scrollTop < maxTop){ 
				pop = scrollTop/maxTop;
				bgColor = (pop * 0.9).toFixed(2);
				$header.css({
					'backgroundColor' : 'rgba(0,0,0,'+ bgColor +')',
				})
			}
		})
	},
	resetBgColor : function(){
		var scrollTop = this.dom.$appWrapper.scrollTop(),
			maxTop = headerConfig.maxTop,
			pop = scrollTop/maxTop,
			bgColor = pop * 0.9;
		this.dom.$header.css({'backgroundColor' : 'rgba(0,0,0,'+ bgColor +')'});
	},
	//处理input按钮键入时submit按键的出现与小时
	handlerInputStyle : function(e){
		var $input = $(e.target),
			$sub = $input.next().next(),
			val = $input.val();
		if(val !== ''){						//有值时active
			$sub.addClass('active');		
		}else{
			$sub.removeClass('active');	
		}
	},
	//当进行提交时跳转页面到对应的路径
	handerSubmit : function(e){
		e.preventDefault();
       	e.stopPropagation();
		window.location = baseHost + '#/shopList/' + $('.search',this.$el).val();
	}
});  

export default new Header(); 