import store               from '../../store/store';
import {baseHost}          from '../../config/config';
import DistanceQuery       from '../../lib/DistanceQuery';
import adminDetailTemplate from './adminDetailTemplate';

/*
 *  AdminDetail
 *  渲染用户详情页,提供用户基础信息的修改包括用户名,手机号,地址,充值
 *  作者     : hoverCow
 *  日期     : 2017-03-07
 *  GitHub   : https://github.com/hoverCow1990/outFood
 *  ------------------------------------------------------------------------
 *  state示例: {
 *    address:"徐汇区长桥八村27号",
 *    adminDetailData:Backbone.Model,
 *    adminPoints:H,
 *    allAddress:Array[2],
 *    balance:52.2,
 *    name:"胖胖的牛牛哦",
 *    orderList:Array[0],
 *    redPacket:Array[2],
 *    tele:"13636556375"}
 */

var AdminDetail = Backbone.View.extend({  
  tagName : 'div',  
  className : 'adminDetail',
  events  : {
    'touchstart .admin-list'     : 'handlerEvents',
    'touchstart .item-blance'    : 'handlerRecharge',
    'touchstart .item-redPacket' : 'handlerRedPacket'
  },
  dom : {
    $app : $('#app')
  },
  state  : {},
  //更新state
  setState : function(nextState){
    this.state = $.extend(this.state,nextState.attributes);
    this.state.adminDetailData = nextState;
    this.render();
  },
  //渲染
  render : function(){ 
    this.el.innerHTML = juicer(adminDetailTemplate,this.state);
    this.dom.$app.text('').append(this.el);  
    this.delegateEvents();   //渲染后需要重新激活按键事件
  },
  //处理点击Li后的事件
  handlerEvents : function(e){
    switch(this.getEv($(e.target))){
      case 'info':
        this.handlerInfo();             //用户基础信息模态框
        break;
      case 'address':
        this.handlerAddress();          //修改地址模态框
        break;
      case 'recharge':
        this.handlerRecharge();          //充值模态框
        break;
      default :
        break;
    }
  },
  //从传入的节点来获取附带的data-ev,由于点击的当前目标可能是li内部的元素,所以递归逐层查询
  getEv : function($dom){
    var ev = $dom.data('ev'),
        count = 0;  
    while(void 0 === ev && count<4){
      $dom = $dom.parent();
      ev = $dom.data('ev');
      count++;
    }
    return ev;
  },
  //处理用户修改信息的界面
  handlerInfo : function(){
    var self = this;
    $.confirm({
      title: '<p>用户信息修改</p>',
      text : '<div class="dialog-wrapper"><div class="msg"><h2>友情提示</h2><p>1.请给自己取一个帅气的名字.</p><p>2.然后你就会发现自己真的变得很帅哦!</p></div><div class="info-input"><input name="user" maxlength="6" type="text" placeholder="姓名"/><input type="tel" name="tele" placeholder="手机号"/></div></div>',
      onOK : function(){
        var $name       = $('input[name^="user"]'),
            $tele       = $('input[name^="tele"]'),
            name        = $name.val(),
            tele        = $tele.val(),
            couldUpdate = self.validator.checkInfo.call(self,name,tele,$name,$tele);
        if(couldUpdate === true){               //完成后处理数据层,触发adminDetailData监听,admin界面重新渲染
          self.state.adminDetailData.set({
            name : name,
            tele : tele
          })
        }
        $.closeModal();   //关闭弹窗
      },
      onCancel:function(){
        $.closeModal();   //关闭弹窗
      }
    });
  },
  //修改地址
  handlerAddress : function(){
    var self        = this,
        allAddress  = this.state.allAddress,
        addressList = allAddress.map(function(item){return '<li><p>' + item + '</p><div class="radio"></div></li>'}).join(''),
        title       = '<p>用户地址</p><span class="addAddress">+ 新增</span>',
        text        = '<div class="dialog-wrapper"><ul class="addressList">' + addressList + '</ul></div>';
    $.confirm({
      title: title,
      text : text,
      onOK : function(){
        var $lastLi  = $addressList.find('li:last');
        if ($lastLi.hasClass('citySelect')){
          self.validator.checkNewAddress.call(self,$lastLi,allAddress);
        }else{
          self.validator.checkOldAddress.call(self,$addressList,allAddress);
        }
      },
      onCancel: function(){
        $.closeModal();
      },
    });
    var $addressList = $('.addressList'),
        $startLi = $addressList.find('li');
    $startLi.on('touchstart',function(){                          //初始Li点击后 触发圆点选择并设置为active
      var $lastLi = $addressList.find('li:last');
      if($lastLi.hasClass('citySelect')) $lastLi.remove();        //如果此时新增地址的input存在则清除该input
      $(this).addClass('active').siblings().removeClass('active') 
    })
    $('.addAddress').on('touchstart',function(){
      var $lastLi = $addressList.find('li:last');
      if($lastLi.hasClass('citySelect')) return;                  //如果最后一个li已经是新增的input,则不再继续添加
      $addressList.append('<li class="citySelect"><select name=""><option value="卢湾">卢湾区</option><option value="徐汇">徐汇区</option><option value="静安">静安区</option><option value="虹口">虹口区</option><option value="长宁">长宁区</option><option value="普陀">普陀区</option><option value="闸北">闸北区</option><option value="黄浦">黄浦区</option><option value="浦东">浦东新区</option></select><input type="text"/></li>')
      $lastLi.next().find('input').off().on('focus',function(){
          $startLi.removeClass('active');
      })
    })
  },
  //用于验证各类input值
  validator : {
    //验证用户基础信息
    checkInfo : function(nameVal,teleVal,$name,$tele){
      if(nameVal.trim() === '') return $name.addClass('err');                                      //回避空信息,不关闭模态框
      $name.removeClass('err');
      if(teleVal.trim() === '' || !/^1[34578]\d{9}$/.test(teleVal)) return $tele.addClass('err');  //回避无效手机号,不关闭模态框
      $tele.removeClass('err');
      if(nameVal === this.state.name && teleVal === this.state.tele) return false;                 //信息与原数据一致,关闭模态框,但不进行重新渲染
      return true;                                                                                 //有效信息并进行页面的重绘
    },
    //验证地址信息
    checkNewAddress : function($lastLi,allAddress){
        var $input   = $lastLi.find('input'),
            address  = $input.val(),
            val      = $input.prev().val() +'区'+ address,
            myGeo    = new BMap.Geocoder(),
            self     = this;
          if(address.trim() === '') return alert('地址不能为空'),$input.addClass('err');                      //避开空信息,弹窗提示并高亮input
          if(!/[号弄]/g.test(address)) return alert('请填写准确的几弄或者几号'),$input.addClass('err');       //验证是否有填写准确的弄或者号
          if(val === this.state.address) return alert('已经存在该地址'),$input.addClass('err');               //验证是否与之前的地址有重复
          DistanceQuery.getPoints(address,function(point){                      //谷歌地图Api如果返回null代表没有查询到目的地址,是无效地址
            self.handlerUpdateAddress(val,point,allAddress.concat([val]));      //地址存在调用handlerSelectAddress修改数据层
          },function(err){
            return alert('无法定位到' + address),$input.addClass('err');        //无效地址的回调
          })
    },
    checkOldAddress : function($addressList,allAddress){
      var val     = $addressList.find('.active').find('p').text(),              //最后个li不是新增的则调用选中的li内的内容作为地址
          address = val.slice(val.indexOf('区')+1),
          self    = this;   
          if(val === '') return alert('您还没有选择地址');                      //避免没有选择的情况
          DistanceQuery.getPoints(address,function(point){                      //谷歌地图查询地址如果返回null代表没有查询到目的地址
            self.handlerUpdateAddress(val,point,allAddress);                    //地址存在调用handlerSelectAddress修改数据层
          });
    }
  },
  //通过所有地址验证后执行的内容
  handlerUpdateAddress : function(val,point,allAddress){
    var shopListData = store.shopList,
        array        = shopListData.toJSON();
    this.state.adminDetailData.set({                                            //修改数据层
      address     : val,
      adminPoints : point,
      allAddress  : allAddress
    });
    DistanceQuery.getDistance(array,point,function(res){                        //更新index页所有距离以及送餐时间的数据
      shopListData.reset(res,{silent:true})
    })
    $.closeModal();
  },
  handlerRecharge : function(){
    var self = this;
    $.confirm({
      title: '<p>我要充值</p>',
      text : '<div class="dialog-wrapper"><div class="msg"><h2>充值提示</h2><p>1.单笔订单充值不得超过500.</p><p>2.如果你长得够帅,充值将无需费用!</p></div><div class="info-input"><input name="value" type="tel" placeholder="充值金额"/></div></div>',
      onOK : function () {
        var $input = $('input[name^="value"]'),
            val = Number($input.val()),
            adminDetailData = self.state.adminDetailData;
        if(val > 500)  return $input.addClass('err');               //如果充值费用高于500,则return
        adminDetailData.set({
          balance : val + Number(adminDetailData.get('balance'))    //设置余额数据,对当前界面再次render
        })
        $.closeModal();
      },
      onCancel: function(){
        $.closeModal();
      },
    });
  },
  handlerRedPacket : function(){
    var text = this.state.redPacket.map(function(item){
        return '<div class="redPacket-show"><div class="show-value">劵面价值:<span>'+ item.value +'</span></div><div class="show-time"><p>有效期至 :<span>'+ item.time +'</span></p></div></div>'
    }).join('')
    $.confirm({
      title: '<p>我的红包</p>',
      text : '<div class="dialog-wrapper">'+ text +'</div>',
      onOK : function () {
        var $input = $('input[name^="value"]'),
            val = Number($input.val()),
            adminDetailData = self.state.adminDetailData;
        if(val > 500)  return $input.addClass('err');               //如果充值费用高于500,则return
        adminDetailData.set({
          balance : val + Number(adminDetailData.get('balance'))    //设置余额数据,对当前界面再次render
        })
        $.closeModal();
      },
      onCancel: function(){
        $.closeModal();
      },
    });
  }
});  

//关闭模态框点击确定即关闭
$.modal.prototype.defaults.autoClose = false;

export default new AdminDetail(); 
