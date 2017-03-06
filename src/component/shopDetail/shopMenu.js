import shopMenuTemplate from './shopMenuTemplate';
import orderTemplate from './orderTemplate';
import shopDetailData from '../../store/shopDetailData';
import adminDetailData from '../../store/adminDetailData';
// import globalData from '../../store/globalData';
// import {baseHost} from '../../defaultConfig/config';

 /*
 *  商铺列表页
 *  渲染ShopList,在首页index以及shopList下均有显示
 *  作者:hoverCow,日期:2017-03-04
 */

var ShopMenu = Backbone.View.extend({  
	tagName : 'div',  
	className : 'page-order',
	events :{
    'touchstart .add' : 'handlerNum',
    'touchstart .plus' : 'handlerNum',
	},
  state : {
     express : null,
     menu : [],
     packageList : [],
     payment : 0,
     playBall : [],
  },
  initState : function(id,bool){
    var shopDetail  = shopDetailData.get(id).attributes,
        menu = shopDetail.menu,
        payment = 0,allLength = 0,
        packageList = new Array();
    menu.forEach(function(item,index){
      if(item.num){
        var value = item.num * item.value;
        packageList.push({name:item.name,value : value,num : item.num})
        payment += value;
        allLength += item.num;
      }
    })
    //adminDetailData.()
    this.state = {
      id : id,
      express : shopDetail.express,
      menu :  menu,
      packageList : packageList,
      payment :  payment,
      allLength : allLength,
      playBall : this.state.playBall
    }
    this.render(bool);
    var orderList = Array.prototype.slice.call(adminDetailData.get('orderList'));
    orderList[id] = allLength;
    adminDetailData.set({'orderList':orderList},{silent : true})
  },
  //渲染
	render : function(bool){ 
    var $dom = $('.shopDetail-pageConatiner');
	  this.el.innerHTML = juicer(shopMenuTemplate,this.state);
	  $dom.text('').append(this.el);
    document.getElementById('footer').innerHTML = juicer(orderTemplate,this.state);
    this.delegateEvents();   //渲染后需要重新激活按键事件
    this.initEvents(bool);
	},
  initEvents(bool){
    var self = this;
    setTimeout(function(){
      if(bool){
        var point = self.state.playBall,
            $cil = $('.package-cil','#footer').find('span'),
            x = point[0] - 30,y = point[1] - 10,
            t = $cil.offset(),ty = t.top,tx = t.left + 20,
            attrA,attrB;
        if($(window).width() - x < 80){
          attrA = {left : x,top:y};
          attrB = {width: 0,height:0,left:tx,top:ty};
        }else{
          attrA = {left : tx,top:ty};
          attrB = {width: 0,height:0,left:-30,top:ty-50};
        }
        $('<div class="playBall"></div>').appendTo($('body')).css(attrA).animate(attrB,600,function(){
          $(this).remove();
          $('.package-cil','#footer').removeClass('active');
        });
       }else{
        $('.package-cil','#footer').removeClass('active');
       }
    },200)
  },
  //选择增加这个产品
  handlerNum : function(e){
    var $dom = $(e.target),
        index = $dom.parent().data('index'),
        module = shopDetailData.get(this.state.id),
        menu = module.get('menu'),
        lastNum = menu[index].num,
        lastPackageList = module.get('packageList'),
        newMenu =  Array.prototype.slice.call(menu),
        obj = newMenu[index],
        newNum;
    if($dom.hasClass('add')){
      newNum = void 0 === lastNum?1:++lastNum;
    }else{
      newNum = 1 === lastNum?null:--lastNum;
    }
    obj = $.extend({},obj,{num:newNum});
    newMenu[index] = obj;
    this.state.playBall = [e.touches[0].clientX,e.touches[0].clientY]
    module.set({
      menu:newMenu,
    });
  }
});  

export default new ShopMenu(); 

