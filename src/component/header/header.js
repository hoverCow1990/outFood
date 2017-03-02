import HeaderTemplate from './headerTemplate';
import {headerConfig} from '../../defaultConfig/config';
import {requestadminDetail} from '../../requestApi/requestApi';
import adminDetail from '../../store/adminDetail';

var Header = Backbone.View.extend({  
	tagName : 'div',  
	className : 'weui-flex',
	events :{
 
	},
	initialize : function(){
		var self = this;
		adminDetail.on('change:adress',function(){
			self.render();
		})
		this.handlerRequest();
	},
  	template: function(){
  		var data = {
  			adress : adminDetail.toJSON().adress
  		};  
  		if(data.adress === void 0) return '';
		return juicer(HeaderTemplate, data);
  	},
	render : function(){  
	    this.el.innerHTML = this.template();
	    $('#header').append(this.el);  
	    this.initEvents();
	},
	handlerRequest : function(){
		requestadminDetail();
	},
	initEvents : function(){
		this.maxTop = headerConfig.maxTop;
	},
	handlerStyle : function(scrollTop){
		var pop = Number((scrollTop/this.maxTop).toFixed(2)),
			bgColor = (pop * 0.9),
			height  = (1-pop)*30 + 40;
		this.$el.parent().css({
			'backgroundColor' : 'rgba(0,0,0,'+bgColor+')',
			'height' : height
		})
	}
});  



export default new Header(); 
