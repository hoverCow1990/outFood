import footerTemplate from './footerTemplate';

var Footer = Backbone.View.extend({  
  	template: function(){
  		var data = { };  
		return juicer(footerTemplate, data);
  	},
	render : function(){  
	    this.el.innerHTML = this.template();
	    $('#footer').text('').append(this.el);  
	},
});  



export default new Footer(); 
