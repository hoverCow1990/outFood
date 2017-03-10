import shopInfoTemplate from './shopInfoTemplate';

/*
 *  ShopInfo
 *  渲染商铺详情页中的商铺详情,包括评分,简介,以及图片
 *  作者     : hoverCow
 *  日期     : 2017-03-07
 *  GitHub   : https://github.com/hoverCow1990/outFood
 *  ------------------------------------------------------------------------
 *  state示例: {
 *    sales         : 980,                  //月售
 *    stars         : 1897,                 //星级
 *    info          : '麦当劳是全球..',     //描述
 *    logo          : 'mc',                 //logo
 *    collection    : 3986,                 //被用户收藏数
 *    lastScale     : 1,                    //图片上次操作后scale的储存
 *    lastTranslate : [0,0]}                //图片上次操作后lastTranslate的储存
 */

//商铺详情视图层
var ShopInfo = Backbone.View.extend({  
  tagName   : 'div',  
  className : 'page-info',
  events :{
    'touchstart .show-img' : 'handlerImg'
  },
  state : {},
  //更新state
  setState : function(data){
    var data = data.attributes;
    this.state = {
      sales         : data.sales,
      stars         : data.stars,
      info          : data.info,
      logo          : data.logo,
      collection    : data.collection,
      lastScale     : 1,
      lastTranslate : [0,0]
    }
    this.render();
  },
  //渲染
  render : function(bool){ 
    var $dom = $('.shopDetail-pageConatiner');
    this.el.innerHTML = juicer(shopInfoTemplate,this.state);
    $dom.text('').append(this.el);
    this.delegateEvents();   //渲染后需要重新激活按键事件
  },
  //点击图片后对图片的处理
  handlerImg(e){
    var $mask = $('<div id="app-mask">'),
        $dele = $('<div id="delete"></div>'),
        $img  = $('<img src="'+e.target.src+'"/>'),
        self  = this;
    $mask.append($dele).append($img).appendTo($('body'));   //生成黑色遮罩并加入body
    this.handlerImgJud($img);                               //执行handlerImgJud
    $dele.on('touchstart',function(e){                      //关闭黑色遮罩按钮清除所有缓存
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
  //图片事件分流处理
  handlerImgJud : function($img){                           //对图片点击后是一根手指还是两根手指做出不同的处理
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
  //图片挪动
  imgMove : function($dom,touch){                           //一根手指时候的对图片进行移动处理
    var stX = touch.screenX,
        stY = touch.screenY,
        lastTranslate = this.state.lastTranslate,
        lastX = lastTranslate[0],
        lastY = lastTranslate[1],
        self = this,
        nowTouch,nowX,nowY,
        lastScale = self.state.lastScale;
    $dom.off('touchmove').on('touchmove',function(e){       //手指移动时候对移动距离计算并限制其上下左右的极限距离
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
  //图片扩大
  imgScale : function($dom,touchA,touchB){                //两根手指时候对图片进行扩大缩小处理
    var self = this,
        stScaleLength = this.getScaleLength(touchA.screenX,touchA.screenY,touchB.screenX,touchB.screenY),
        nowTouchA,nowTouchB,nowScaleLength,minusLength,scale,
        lastScale = this.state.lastScale,
        lastTranslateX = this.state.lastTranslate[0],
        lastTranslateY = this.state.lastTranslate[1];
    $dom.off('touchmove').on('touchmove',function(e){     //用两根手指的距离算出最终的scale值
      e.preventDefault();
      e.stopPropagation();
      nowTouchA = e.targetTouches[0];
      nowTouchB = e.targetTouches[1];
      nowScaleLength = self.getScaleLength(nowTouchA.screenX,nowTouchA.screenY,nowTouchB.screenX,nowTouchB.screenY);
      minusLength = nowScaleLength - stScaleLength;
      scale = lastScale + minusLength/500;
      $(this).css({transform:'translate3d(' + lastTranslateX + 'px,'+ lastTranslateY +'px,0) scale('+ scale +')'})
    }).off('touchend').on('touchend',function(){          //手指松开时如果最终scale小于0.8则反弹至1
      self.state.lastScale = Math.max(scale,1);
      if(scale > 0.8) return;
      var $dom = $(this);
      $dom.addClass('active').css({transform:'translate3d(' + lastTranslateX + 'px,'+ lastTranslateY +'px,0) scale(1)'},500);
      setTimeout(function(){
        $dom.removeClass('active')
      },200)
    });
  },
  //计算距离
  getScaleLength : function(x1,y1,x2,y2){                 //用勾股定理计算出两根手指的距离
    var length = Math.sqrt( Math.pow(x2-x1,2) + Math.pow(y2-y1,2));
        return Number(length.toFixed(2));
  },
});  

export default new ShopInfo(); 

