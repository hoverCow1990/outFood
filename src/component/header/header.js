import HeaderTemplate from './headerTemplate';
import {headerConfig} from '../../defaultConfig/config';
import {requestadminDetail} from '../../requestApi/requestApi';
import adminDetail from '../../store/adminDetail';


 /*
 *  头部导航部分
 *	渲染Header,页面滚动时测算高度前200px内进行变黑动画
 *  作者:hoverCow,日期:2017-03-01
 */

var Header = Backbone.View.extend({  
	tagName : 'div',  
	className : 'weui-flex',
	events :{
 
	},
	//发送用户信息请求,用于获取地址
	initialize : function(){
		requestadminDetail();
	},
	//模板需求信息为数据层adminDetail内的adress
  	template: function(){
  		var data = {adress : adminDetail.toJSON().adress};  
  		if(data.adress === void 0) return '';
		return juicer(HeaderTemplate, data);
  	},
  	//渲染头部
	render : function(){ 
		var $dom = $('#header');
	    this.el.innerHTML = this.template();
	    $dom.append(this.el);  
	    this.initEvents($dom);
	},
	//变黑动画函数,maxTop来自headerConfig为200
	initEvents : function($dom){
		var maxTop = headerConfig.maxTop,
			scrollTop,pop,bgColor;
		$('#app').off('touchmove.nav').on('touchmove.nav',function(){
			var scrollTop = -1*this.getBoundingClientRect().top;
			if(scrollTop < maxTop){ 
				pop = Number((scrollTop/maxTop).toFixed(2));
				bgColor = (pop * 0.9);
				$dom.css({
					'backgroundColor' : 'rgba(0,0,0,'+bgColor+')',
				})
			}
		});
	},
	//注销头部导航的动画
	cancelEvent : function(){
		$('#index').off('touchmove.nav');
	}
});  

export default new Header(); 
