import shopDetailTemplate from './shopDetailTemplate';
import shopDetailData from '../../store/shopDetailData';
import globalData from '../../store/globalData';
import ShopMenu from './shopMenu';
import ShopInfo from './shopInfo';
import ShopTraffic from './ShopTraffic';
import Footer from '../footer/footer';
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
    id : null,
  },
  initState : function(id){
    this.state.id = id;
    if(shopDetailData.has(id)){
      var data = shopDetailData.get(id),
          state = data.attributes,
          menu = state.menu,
          newMenu = Array.prototype.slice.call(menu),
          newState;
      newMenu = newMenu.sort(function(a,b){
        return b.num - a.num;
      })
      newState = $.extend({},state,{menu : newMenu});
      data.set({menu : newMenu},{silent:true});
      this.state = state;
      this.render();
      this.renderPage(this.state.pageTab);
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
    var data = shopDetailData.get(this.state.id),
        index = $(e.target).index(),
        lastIndex = data.get('pageTab');
    if(index === lastIndex) return;
    data.set({'pageTab' : index});
  },
  renderPage : function(pageTab){
    switch(pageTab){
      case 0:
        ShopMenu.initState(this.state.id,false);
        break;
      case 1:
        ShopInfo.initState(this.state.id);
        Footer.render();
        break;
      case 2:
        ShopTraffic.initState(this.state.id);
        Footer.render();
        break;
    }
  }
});  

export default new shopDetail(); 