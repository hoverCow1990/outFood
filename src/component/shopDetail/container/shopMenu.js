import shopMenuTemplate from './shopMenuTemplate';
import orderTemplate from './orderTemplate';
import store from '../../../store/store';

/*
 *  ShopMenu
 *  渲染商铺详情页内的菜单视图
 *  作者     : hoverCow
 *  日期     : 2017-03-06
 *  GitHub   : https://github.com/hoverCow1990/outFood
 *  ------------------------------------------------------------------------
 *  state示例: {
 *    id          : 0,            //商户id
 *    express     : 10,           //快递费
 *    logo        : 'mc',         //logo
 *    start       : 20,           //起送价
 *    menu        : [],           //菜单..
 *    packageList : [],           //储存已选择的菜品
 *    payment     : 36,           //总支付费用
 *    allLength   : 3,            //用户在该商户选择菜品的总个数
 *    playBall    : [380,300]}    //记录点击 + - 表示的坐标用于小球渲染 
*/


//ShopMenu视图层
var ShopMenu = Backbone.View.extend({  
  tagName   : 'div',  
  className : 'page-order',
  events : {
    'touchstart .add'  : 'handlerItemNum',
    'touchstart .plus' : 'handlerItemNum',
  },
  state : {
     shopDetailData : null,
  },
  setState : function(shopDetailData,isShowBall){
    var shopDetailAttrs = shopDetailData.attributes,
        orderList = store.adminDetail.get('orderList'),
        id      = shopDetailAttrs.id,
        logo    = shopDetailAttrs.logo,
        menu    = shopDetailAttrs.menu,
        start   = shopDetailAttrs.start,
        express = shopDetailAttrs.express,
        start   = shopDetailAttrs.start,
        payment = 0,allLength = 0,
        packageList = new Array(),value;
    menu.forEach(function(item,index){                            //计算需要的总费用以及产品数量
      if(item.num){
        value = item.num * item.value;
        packageList.push({
          name :item.name,
          value:value,
          num  :item.num
        })
        payment += value;
        allLength += item.num;
      }
    })
    this.state = {                                                //重设state
      id          : id, 
      express     : express,
      logo        : logo,
      start       : start,
      menu        : menu,
      packageList : packageList,
      payment     : payment,
      allLength   : allLength,
      playBall    : this.state.playBall
    }
    this.render(isShowBall);                                      //渲染
    this.state.shopDetailData = shopDetailData;                   //设置orderList供shopList渲染的时候是否显示有订单的商铺以及产品数量
    if(allLength === 0) return delete orderList[shopDetailAttrs.id];          //如果没有值了就删除
    orderList[id] = {id:id,logo:logo,allLength:allLength,list:packageList,time:new Date(),name:shopDetailAttrs.name,payment:payment,express:express,couldPay:start - payment};   //有数量就赋值以供订单页面操作
  },
  //渲染
  render : function(isShowBall){ 
    var footer = document.getElementById('footer'),
        $container = $('.shopDetail-pageConatiner');
    this.el.innerHTML = juicer(shopMenuTemplate,this.state);      //渲染menu主体
    $container.text('').append(this.el);
    footer.innerHTML = juicer(orderTemplate,this.state);          //渲染footer
    this.delegateEvents();   
    this.initEvents(isShowBall);
  },
  //渲染时执行初始红色小球动画
  initEvents(isShowBall){
    var self = this;
    setTimeout(function(){
      if(isShowBall){                                                  //点击增加减少导致的渲染
        var point = self.state.playBall,                               //上次点击时候记录的点击坐标轴
            $cil = $('.package-cil','#footer').find('span'),           //获取到购物车图标
            x = point[0] - 30,y = point[1] - 10,                       //计算小球起始点的坐标
            t = $cil.offset(),ty = t.top,tx = t.left + 20,             //计算小球目的地的坐标
            attrA,attrB;        
        if($(window).width() - x < 80){                                //点击加号的情况
          attrA = {left:x,top:y};                              
          attrB = {width:0,height:0,left:tx,top:ty};
        }else{                                                         //点击减号的情况
          attrA = {left:tx,top:ty};
          attrB = {width:0,height:0,left:-30,top:ty - 80};
        }
        $('<div class="playBall"></div>').appendTo($('body')).css(attrA).animate(attrB,600,function(){    //执行小球动画
          $(this).remove();                                            //动画结束结束后销毁小球
          $('.package-cil','#footer').removeClass('active');           //移出购物车active
        });
       }else{                                                          //进入商户详情页导致的渲染
        $('.package-cil','#footer').removeClass('active');             //移出购物车active
       }
    },200)
  },
  //选择增加这个产品
  handlerItemNum : function(e){
    var $dom = $(e.target),
        id = $dom.parent().data('id'),                                 //获取当前菜品的id
        module = this.state.shopDetailData,                            //获取当前商铺数据
        menu = Array.prototype.slice.call(module.get('menu')),         //取出其中menu从新创建一个新数组
        index,data,num;
    index = _.findIndex(menu,function(item){                           //利用underscore寻找第一次匹配到的产品id与点击储存的id的index
       return item.id === id;
    });
    data = menu[index];                                                //获取当前菜单内的菜品的json对象
    num = data.num;                                                    //获取菜品原先的个数
    num = $dom.hasClass('add')? ++num: --num;                          //根据点击的dom是+还是-更新num
    data = $.extend({},data,{num:num});                                //重组当前菜品的json对象
    menu[index] = data;                                                //将menu的第index数据重新赋值为菜品json对象
    this.state.playBall = [e.touches[0].clientX,e.touches[0].clientY]; //记录小球的点击坐标
    module.set({menu:menu});                                           //更新当前商铺的数据触发change:menu 导致渲染
  }
});  

export default new ShopMenu(); 

