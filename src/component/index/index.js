import indexTemplate from './indexTemplate';
import fastclick from '../../plug-in/fastclick.js';
import weui from '../../plug-in/jquery-weui.min';
import swiper from '../../plug-in/swiper.min';
import ShopList from '../shopList/shopList';
import requestUrl from '../../requestUrl/requestUrl';
import shopListData from '../../store/shopList';


var Index = Backbone.View.extend({  
	tagName : 'div',  
	id : 'index',
	events :{
 
	},
	serialize : function() {

  	},
  	template: function(){
  		var data = { };  
		return juicer(indexTemplate, data);
  	},
	render : function($dom){  
	    this.el.innerHTML = this.template();
	    $dom.text()
	    $dom.append(this.el);  
	    this.initEvents();
	},
	initEvents : function(){
		$(".swiper-container").swiper({
		    loop: true,
		    autoplay: 3000,
		    paginationClickable: true
		});
		$.ajax({
			url : requestUrl.shopList,
			type : 'post',
			data : {
				start : 0,
				end : 5
			},
			dataType : 'json',
			success: function(data){
				data.forEach(function(item){
					shopListData.add(JSON.parse(item));
				})
				ShopList.render($('#storeList-wrapper'));
			},
			error:function(err){
				console.log(err)
			}
		})
	}
});  

export default new Index(); 
