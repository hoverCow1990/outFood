import store               from '../../store/store';
import ShopMenu            from './container/shopMenu';
import ShopInfo            from './container/shopInfo';
import ShopTraffic         from './container/ShopTraffic';
import Footer              from '../footer/footer';
import shopDetailTemplate  from './shopDetailTemplate';
import {
        requestshopDetail,
        requestshopColumn} from '../../requestApi/requestApi';


/*
 *  ShopDetail
 *  渲染商铺详情页,其中包含menu菜单模块,info详情模块,traffic交通模块
 *  作者     : hoverCow
 *  日期     : 2017-03-06
 *  GitHub   : https://github.com/hoverCow1990/outFood
 *  ----------------------------------------------------------------------
 *  state示例: {
 *    id              : 0,                            //商户id
 *    stars           : 2800,                         //星级
 *    start           : 20,                           //起送价
 *    sales           : 3200,                         //月售
 *    time            : 10,                           //准备餐食的事件
 *    express         : 10,                           //快递费
 *    pageTab         : 0,                            //选择显示的container部分
 *    payment         : 30,                           //需支付的总价格
 *    collection      : 3500,                         //被用户收藏数
 *    trafficTime     : 8,                            //交通时间 [根据百度地图Api动态获取]
 *    tag             : 'fast',                       //商户类别
 *    tele            : '(021)54391019',              //联系电话
 *    logo            : 'mc',                         //logo
 *    info            : '麦当劳遍布全球六大洲11...',  //描述
 *    search          : '快餐,炸鸡,mc,肉,夜宵',       //搜索关键词
 *    address         : '徐汇区老沪闵路809',          //地址
 *    distance        : '1.2',                        //与用户距离 [根据百度地图Api动态获取]
 *    menu            : [{...}],                      //菜单
 *    tabInfo         : ['点餐',...,..],              //显示container的Tab列表
 *    packageList     : [],                           //储存已选择的菜品
 *    isLove          : true,                         //是否收藏
 *    points          : null,                         //坐标经纬度 [根据百度地图Api动态获取]
 *    shopDetailData  : null}                         //该数据的数据源 [Backbone Module] 用作对store的操作
 */


//商铺详情页视图模块
var ShopDetail = Backbone.View.extend({  
  tagName : 'div',  
  className : 'shopDetail',
  events :{
    'touchstart .shopDetail-pageTab' : 'handlerPageTab'
  },
  dom : {
    $app : $('#app')
  },
  state : {},
  //更新数据
  setState : function(nextState){
    var id             = nextState.id,
        lastRouterId   = nextState.lastRouterId,
        shopDetailData = store.shopDetail,
        baseShopData;
    this.state.lastUrl = nextState.lastUrl;
    if(shopDetailData.has(id)){
      this.getCacheShopData(shopDetailData.get(id));
      return;
    }
    if(lastRouterId === 'index'){
      baseShopData = store.shopList.get(id);
      !!baseShopData?this.requestshopDetail({id:id,baseShopData:baseShopData.attributes}):this.requestshopColumn({id:id});
    }else{
      baseShopData = store.shopListAssistant.get(id).attributes;
      this.requestshopDetail({id:id,baseShopData:baseShopData});
    }
  },
  //请求用户数据,回调渲染view层
  requestshopDetail : function(data){
    requestshopDetail(data,this.getNewShopData.bind(this))
  },
  requestshopColumn : function(data){
    requestshopColumn(data,this.getNewShopData.bind(this))
  },
  //渲染
  render : function(){ 
    this.el.innerHTML = juicer(shopDetailTemplate,this.state);
    this.dom.$app.text('').append(this.el);
    this.initEvents(); 
    this.delegateEvents();                                        //渲染后需要重新激活按键事件
  },
  initEvents : function(){
    this.renderContainer(this.state.pageTab);
    $('.shopDetail-pageConatiner',this.$el).css('height',$(window).height() - 240);
  },
  //当shopDetailData内没有搜索到已存在的数据时,请求新的数据回调
  getNewShopData : function(data){
    var self = this;
    this.state = $.extend({},this.state,data.attributes);
    this.state.shopDetailData = data;
    data.on('change:menu',function(){
      ShopMenu.setState(self.state.shopDetailData,true)
    })
    this.render();
  },
  //当shopDetailData内搜索到已存在的数据时,对menu数组进行按菜品数量顺序排列
  getCacheShopData : function(data){
      var state = data.attributes,
          menu = state.menu,
          //newMenu = Array.prototype.slice.call(menu),
          newState;
      menu = menu.sort(function(a,b){
        return b.num - a.num;
      })
      newState = $.extend(this.state,state);
      //data.set({menu:newMenu},{silent:true});
      this.state = newState;
      this.state.shopDetailData = data;
      this.render();
  },
  //处理点击tabLi后的事件
  handlerPageTab : function(e){
    var data  = this.state.shopDetailData,
        index = $(e.target).index(),
        lastIndex = data.get('pageTab');
    if(index === lastIndex) return;
    data.set({'pageTab':index});
    this.state.pageTab = index;
    this.render();
  },
  //根据pageTab的选项 渲染不同的page-container
  renderContainer : function(pageTab){                    
    var shopDetailData = this.state.shopDetailData;
    switch(pageTab){
      case 0:
        ShopMenu.setState(shopDetailData,false);        //渲染菜单组件 将backbone数据传入,boolean用与子组件判断是否渲染红点动画,此处不渲染
        break;
      case 1:
        ShopInfo.setState(shopDetailData);              //渲染商铺详情
        Footer.render();
        break;
      case 2:
        ShopTraffic.setState(shopDetailData);           //渲染商铺交通
        Footer.render();
        break;
    }
  }
});  

export default new ShopDetail(); 