import shopListTemplate from './shopListTemplate';
import shopListData from '../../store/shopList';
import requestUrl from '../../requestUrl/requestUrl';

var ShopList = Backbone.View.extend({  
	tagName : 'div',  
	className : 'outFood-storeList',
	events :{
 
	},
	initialize : function(){
		this.loading = false;
		this.count = 0;
	},
  	template: function(){
  		var data = {
  			list : shopListData.toJSON()
  		};  
		return juicer(shopListTemplate, data);
  	},
	render : function($dom){
		this.el.innerHTML = this.template();
		$dom = $dom || $('#storeList-wrapper');  
	    $dom.text();
	    $dom.append(this.el);  
	    this.initEvents();
	},
	handlerRequest : function(fn){
		var start = (++this.count)*5,
			end = start + 5,
			self = this;
		$.ajax({
			url : requestUrl.shopList,
			type : 'post',
			data : {
				start : start,
				end : end
			},
			dataType : 'json',
			success: function(data){
				data.forEach(function(item){
					shopListData.add(JSON.parse(item));
				})
				self.render($('#storeList-wrapper'));
				fn && fn();
			},
			error:function(err){
				console.log(err)
			}
		})
	},
	initEvents : function(){
		// var loading = false;  //状态标记
		// $(document.body).infinite().on("infinite", function() {
		//   if(loading) return;
		//   loading = true;
		//   setTimeout(function() {
		//     $("#list").append("<p> 我是新加载的内容 </p>");
		//     loading = false;
		//   }, 1500);   //模拟延迟
		// });
	}
});  

export default new ShopList(); 
