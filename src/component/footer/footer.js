import footerTemplate from './footerTemplate';

var Footer = Backbone.View.extend({  
  	template: function(){
  		var data = { };  
		return juicer(footerTemplate, data);
  	},
	render : function($dom){  
	    this.el.innerHTML = this.template();
	    $dom.append(this.el);  
	},
});  



export default new Footer(); 
