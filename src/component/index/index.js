import indexTemplate from './indexTemplate';
import fastclick from '../../plug-in/fastclick.js';
import weui from '../../plug-in/jquery-weui.min';
import swiper from '../../plug-in/swiper.min';

/*
*  Index页面
*  页面利用adminDatil内的scrollTop保存页面位置
*  作者     : hoverCow
*  日期     : 2017-03-03
*  GitHub   : https://github.com/hoverCow1990/outFood
*  ----------------------------------------------------------------------
*  state示例: {
*    scrollTop : 200           //储存主页滚动后离开时候的高度,再次路由匹配至首页时返回该高度
*  }
*/

//Index组件试图层
var Index = Backbone.View.extend({  
	tagName : 'div',  
	id : 'index',
	dom : {
		$app 		: $('#app'),
		$appWrapper : $('#app-Wrapper')
	},
	state : {
		scrollTop : 0,
	},
	//更新状态
  	setState : function(nextState){
  		this.state.scrollTop = nextState.scrollTop
  		this.render();
  	},
  	//渲染
	render : function(){
	    this.el.innerHTML = juicer(indexTemplate,this.state);
	    this.dom.$app.text('').append(this.el);  
	    this.initEvents();
	},
	//调用轮播插件以及修改滚动高度
	initEvents : function(){
		var scrollTop = this.state.scrollTop,
			height = scrollTop + $(window).height();
		$(".swiper-container").swiper({
		    loop: true,
		    autoplay: 3000,
		    paginationClickable: true
		});
		this.dom.$app.css('height',height);					//优先将app高度调整,不然无法设置scrollTop;
		this.dom.$appWrapper.scrollTop(scrollTop);
	}
});  

export default new Index(); 
