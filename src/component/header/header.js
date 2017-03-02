import HeaderTemplate from './headerTemplate';
import {headerConfig} from '../../defaultConfig/config';

var Header = Backbone.View.extend({  
	tagName : 'div',  
	className : 'weui-flex',
	events :{
 
	},
  	template: function(){
  		var data = { };  
		return juicer(HeaderTemplate, data);
  	},
	render : function($dom){  
		console.log(this.el);
	    this.el.innerHTML = this.template();
	    $dom.append(this.el);  
	    this.initEvents();
	},
	initEvents : function(){
		this.maxTop = headerConfig.maxTop;
		this.initHeight = parseInt(this.$el.css('height'));
	},
	handlerStyle : function(scrollTop){
		var pop = Number((scrollTop/this.maxTop).toFixed(2)),
			bgColor = (pop * 0.9),
			height  = (1-pop)*30 + this.initHeight;
		this.$el.parent().css({
			'backgroundColor' : 'rgba(0,0,0,'+bgColor+')',
			'height' : height
		})
	}
});  



export default new Header(); 
