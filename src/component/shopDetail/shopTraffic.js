import shopTrafficTemplate from './shopTrafficTemplate';
// import orderTemplate from './orderTemplate';
import shopDetailData from '../../store/shopDetailData';
import adminDetailData from '../../store/adminDetailData';
import CowMap from '../../lib/CowMap';
import {trafficConfig} from '../../defaultConfig/config';

 /*
 *  商铺详情页交通页组件
 *  作者:hoverCow,日期:2017-03-06
 */

var ShopTraffic = Backbone.View.extend({  
	tagName : 'div',  
	className : 'page-traffic',
	events :{
	},
  state : {
    map : null,
    adminAdress : '',
    shopAdress : '',
  },
  initState : function(id,bool){
    var shopDetail  = shopDetailData.get(id).attributes;
    this.state.shopAdress = shopDetail.address;
    this.state.adminAdress = adminDetailData.get('adress');
    this.render();
  },
  //渲染
	render : function(bool){ 
    var $dom = $('.shopDetail-pageConatiner');
	  this.el.innerHTML = juicer(shopTrafficTemplate,this.state);
    $dom.text('').append(this.el);
    this.delegateEvents();   //渲染后需要重新激活按键事件
    this.initEvents();
	},
  initEvents : function(){
    this.handlerMap();
  },
  handlerMap : function(){
    var config = $.extend({},trafficConfig,{
      shopPoints : this.state.shopAdress,
      userPoints : this.state.adminAdress,  
    });
    CowMap.init(config);
  }, 
});  

export default new ShopTraffic(); 

