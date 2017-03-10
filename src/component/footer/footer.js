import footerTemplate from './footerTemplate';

/*
 *  底部导航部分
 *	渲染Footer,左中右解构
 *	不受数据影响,制作简单的渲染以及连接
 *  作者     : hoverCow
 *  日期     : 2017-03-02
 *  GitHub   : https://github.com/hoverCow1990/outFood
 */

var Footer = Backbone.View.extend({  
	render : function(){  
	    this.el.innerHTML = juicer(footerTemplate,{});
	    $('#footer').text('').append(this.el);  
	},
});  



export default new Footer(); 
