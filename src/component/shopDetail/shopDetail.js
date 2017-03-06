import shopDetailTemplate from './shopDetailTemplate';
import shopDetailData from '../../store/shopDetailData';
import globalData from '../../store/globalData';
import ShopMenu from './ShopMenu';
import {requestshopDetail} from '../../requestApi/requestApi';
import {baseHost} from '../../defaultConfig/config';

 /*
 *  商铺详情页
 *  渲染ShopList,在首页index以及shopList下均有显示
 *  作者:hoverCow,日期:2017-03-04
 */

var shopDetail = Backbone.View.extend({  
  tagName : 'div',  
  className : 'shopDetail',
  events :{
    'touchstart .shopDetail-pageTab' : 'handlerPageTab'
  },
  state : {
    
  },
  initState : function(id){
    if(shopDetailData.has(id)){
      this.state = shopDetailData.get(id).attributes;
      this.render();
      this.renderPage(this.state.pageTab,id);
      return;
    }
    this.handlerRequest(id);
  },
  //模板引擎
  template: function(){
    return juicer(shopDetailTemplate,this.state);
  },
  //请求用户数据,回调渲染view层
  handlerRequest : function(id,bool){
    requestshopDetail(id,function(){
      ShopMenu.initState(id,false);
      shopDetailData.last().on('change:menu',function(){
        ShopMenu.initState(id,true);
      });
    });
  },
  //渲染
  render : function(){ 
    this.el.innerHTML = this.template();
    $('#app').text('');
    $('#app').append(this.el); 
    this.initEvents(); 
    this.delegateEvents();   //渲染后需要重新激活按键事件
  },
  initEvents : function(){
    var height = $(window).height() - 240;
    $('.shopDetail-pageConatiner',this.$el).css('height',height);
  },
  //处理点击tabLi后的事件
  handlerPageTab : function(e){
   shopDetailData.set({'pageTab':$(e.target).index()});
   //this.render();
  },
  renderPage : function(num,id){
    switch(num){
      case 0:
        ShopMenu.initState(id,false);
        break;
    }
  }
});  

export default new shopDetail(); 