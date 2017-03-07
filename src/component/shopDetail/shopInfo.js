import shopInfoTemplate from './shopInfoTemplate';
import shopDetailData from '../../store/shopDetailData';
// import adminDetailData from '../../store/adminDetailData';
// import globalData from '../../store/globalData';
// import {baseHost} from '../../defaultConfig/config';

 /*
 *  商铺列表页
 *  渲染ShopList,在首页index以及shopList下均有显示
 *  作者:hoverCow,日期:2017-03-04
 */

var ShopInfo = Backbone.View.extend({  
	tagName : 'div',  
	className : 'page-info',
	events :{
    'touchstart .show-img' : 'handlerImg'
	},
  state : {
   
  },
  initState : function(id){
    var data = shopDetailData.get(id).attributes;
    this.state = {
      sales : data.sales,
      collection : data.collection,
      stars : data.stars,
      info : data.info,
      logo : data.logo,
      lastTranslate : [0,0],
      lastScale : 1,
    }
    this.render();
  },
  //渲染
	render : function(bool){ 
    var $dom = $('.shopDetail-pageConatiner');
	  this.el.innerHTML = juicer(shopInfoTemplate,this.state);
	  $dom.text('').append(this.el);
    this.delegateEvents();   //渲染后需要重新激活按键事件
    this.initEvents();
	},
  initEvents(bool){
  },
  handlerImg(e){
    var $mask = $('<div id="app-mask">'),
        $dele = $('<div id="delete"></div>'),
        $img  = $('<img src="'+e.target.src+'"/>'),
        self  = this;
    $mask.append($dele).append($img).appendTo($('body'));
    this.handlerImgMove($img);
    $dele.on('touchstart',function(e){
      e.preventDefault();
      e.stopPropagation();
      $img.off();
      $mask.remove();
      $mask = null;
      $dele = null;
      $img = null;
      self.state.lastTranslate = [0,0];
      self.state.lastScale = 1;
    })
  },
  handlerImgMove : function($img){
    var self = this;
    $img.on('touchstart',function(e){
      var touch = e.targetTouches;
      if(touch.length == 1){
          self.imgMove($(this),touch[0]);
      }else{
          self.imgScale($(this),touch[0],touch[1]);
      }
    });
  },
  imgMove : function($dom,touch){
    var stX = touch.screenX,
        stY = touch.screenY,
        lastTranslate = this.state.lastTranslate,
        lastX = lastTranslate[0],
        lastY = lastTranslate[1],
        self = this,
        nowTouch,nowX,nowY,
        lastScale = self.state.lastScale;
    $dom.off('touchmove').on('touchmove',function(e){
      e.preventDefault();
      e.stopPropagation();
      nowTouch = e.targetTouches[0];
      nowX = Math.max(Math.min(nowTouch.screenX - stX + lastX,50),-50);
      nowY = Math.max(Math.min(nowTouch.screenY - stY + lastY,150),-150);
      $(this).css({transform:'translate3d(' + nowX + 'px,'+ nowY +'px,0) scale('+ lastScale +')'})
    }).off('touchend').on('touchend',function(){
      self.state.lastTranslate = [nowX,nowY];
    })
  },
  imgScale : function($dom,touchA,touchB){
    var self = this,
        stScaleLength = this.getScaleLength(touchA.screenX,touchA.screenY,touchB.screenX,touchB.screenY),
        nowTouchA,nowTouchB,nowScaleLength,minusLength,scale,
        lastScale = this.state.lastScale,
        lastTranslateX = this.state.lastTranslate[0],
        lastTranslateY = this.state.lastTranslate[1];
    $dom.off('touchmove').on('touchmove',function(e){
      e.preventDefault();
      e.stopPropagation();
      nowTouchA = e.targetTouches[0];
      nowTouchB = e.targetTouches[1];
      nowScaleLength = self.getScaleLength(nowTouchA.screenX,nowTouchA.screenY,nowTouchB.screenX,nowTouchB.screenY);
      minusLength = nowScaleLength - stScaleLength;
      scale = lastScale + minusLength/500;
      $(this).css({transform:'translate3d(' + lastTranslateX + 'px,'+ lastTranslateY +'px,0) scale('+ scale +')'})
    }).off('touchend').on('touchend',function(){
      self.state.lastScale = Math.max(scale,1);
      if(scale < 0.8){
          var $dom = $(this);
          $dom.addClass('active').css({transform:'translate3d(' + lastTranslateX + 'px,'+ lastTranslateY +'px,0) scale(1)'},500);
          setTimeout(function(){
            $dom.removeClass('active')
          },200)
      }
    });
  },
  getScaleLength : function(x1,y1,x2,y2){
    var length = Math.sqrt( Math.pow(x2-x1,2) + Math.pow(y2-y1,2));
        return Number(length.toFixed(2));
  },
});  

export default new ShopInfo(); 

