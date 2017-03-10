import store from '../../../store/store';
import CowMap from '../../../lib/CowMap';
import shopTrafficTemplate from './shopTrafficTemplate';
import {trafficConfig} from '../../../config/config';

/*
 *  ShopTraffic
 *  商家详情内交通组件的渲染,
 *  作者     : hoverCow
 *  日期     : 2017-03-07
 *  GitHub   : https://github.com/hoverCow1990/outFood
 *  ------------------------------------------------------------------------
 *  state示例: {        
 *    adminPoints : null,     //请求或者更改地址时候的用户坐标
 *    shopPoints  : null      //商铺请求时候的坐标
 *  }
 */

var ShopTraffic = Backbone.View.extend({  
	tagName : 'div',  
	className : 'page-traffic',
  state : {
    adminPoints : null,
    shopPoints : null,
  },
  //更新state
  setState : function(shopDetailData){
    this.state.shopPoints  = shopDetailData.get('points');
    this.state.adminPoints = store.adminDetail.get('adminPoints');
    this.render();
  },
  //渲染
	render : function(){ 
    var $dom = $('.shopDetail-pageConatiner');
	  this.el.innerHTML = juicer(shopTrafficTemplate,this.state);
    $dom.text('').append(this.el);
    this.delegateEvents();   //渲染后需要重新激活按键事件
    this.initEvents();
	},
  initEvents : function(){
    this.handlerMap();       //执行地图
  },
  //渲染地图
  handlerMap : function(){
    var config = $.extend({},trafficConfig,{
      shopPoints : this.state.shopPoints,
      userPoints : this.state.adminPoints,  
    });
    CowMap.init(config);    //调用老牛插件地图进行地图部署
  }, 
});  

export default new ShopTraffic(); 

