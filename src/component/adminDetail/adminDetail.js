import adminDetailTemplate from './adminDetailTemplate';
import adminDetailData from '../../store/adminDetailData';
import globalData from '../../store/globalData';
import {requestadminDetailData} from '../../requestApi/requestApi';
import {baseHost} from '../../defaultConfig/config';

 /*
 *  商铺列表页
 *  渲染ShopList,在首页index以及shopList下均有显示
 *  作者:hoverCow,日期:2017-03-04
 */

var adminDetail = Backbone.View.extend({  
	tagName : 'div',  
	className : 'adminDetail',
	events :{
    'click  .admin-list' : 'handlerEvents',
	},
  //模板引擎
  template: function(){
      var json = adminDetailData.attributes,  //用户信息
  		    data = {
      			name : json.name,                 //姓名
      			tele : json.tele,                 //手机号
      			adress : json.adress,             //地址
      			balance : json.balance,           //余额
      			friend : json.friend,             //好友
      			redPacket : json.redPacket,       //红包
      			order : json.order                //订单
    		}; 
		return juicer(adminDetailTemplate, data);
  },
  //请求用户数据,回调渲染view层
  handlerRequest : function(){
    var self = this;
    requestadminDetailData(function(){
      self.render();
    });
  },
  //渲染
	render : function(){ 
    if(adminDetailData.toJSON().name === void 0) return; //避免无效渲染
	  this.el.innerHTML = this.template();
	  $('#app').text('');
	  $('#app').append(this.el);  
    this.delegateEvents();   //渲染后需要重新激活按键事件
	},
  //处理点击Li后的事件
  handlerEvents : function(e){
    switch(this.getEv($(e.target))){
      case 'info':
        this.handlerInfo();
        break;
      case 'adress':
        this.handlerAdress();
        break;
      case 'store' :
        this.handlerStore();
        break;
      case 'recharge':
        this.handerRecharge();
        break;
    }
  },
  //从传入的节点来获取附带的data-ev
  //由于点击的当前目标可能是li内部的元素,所以递归逐层查询
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
    $.confirm({
      title: '<p>用户信息修改</p>',
      text: '<div class="dialog-wrapper"><div class="info-input"><input name="user" maxlength="6" type="text" placeholder="姓名"/><input type="tel" name="tele" placeholder="手机号"/></div></div>',
      onOK: function () {
        var $name = $('input[name^="user"]'),
            $tele = $('input[name^="tele"]'),
            name = $name.val(),
            tele = $tele.val();
        if(!checkTele(tele)) return $tele.addClass('err'); //验证手机号是否正确
        //完成后处理数据层,带动头部以及admin界面渲染
        adminDetailData.set({
          name : name,
          tele : tele,
        })
        $.closeModal(); //关闭弹窗
      },
      onCancel: function () {
        $.closeModal();
      },
    });
    function checkTele(val){
      return /^1[34578]\d{9}$/.test(val);
    }
  },
  //修改地址
  handlerAdress : function(){
    var allAdress = adminDetailData.get('allAdress'),
        addressList = allAdress.map(function(item){return '<li><p>' + item + '</p><div class="radio"></div></li>'}).join(''),
        text = '<div class="dialog-wrapper"><ul class="adressList">' + addressList + '</ul></div>',
        self = this;
    $.confirm({
      title: '<p>用户地址</p><span class="addAdress">+ 新增</span>',
      text: text,
      onOK: function () {
        var $lastLi = $adressList.find('li:last'),
            val;
        if($lastLi.hasClass('citySelect')){
          var $input = $lastLi.find('input'),
              myGeo = new BMap.Geocoder(),
              address = $input.val();
          val = $input.prev().val() +'区'+ $input.val();
          if(!/^[^\d]+\d{1,4}[号弄]/.test(address)){
            alert('请填写准确的几弄或者几号');
            return $input.addClass('err');
          }          
          myGeo.getPoint(address, function(point){                      //谷歌地图查询地址如果返回null代表没有查询到目的地址
            if(null === point){
              alert('上海查询不到此地址')
              return $input.addClass('err');
            }else{
              self.handlerAddAdress(val,allAdress.concat([val]));
            }
          },'上海市');
        }else{
          val = $adressList.find('.active').find('p').text();            //最后个li不是新增的则调用选中的li内的内容作为地址
          if(!val) return $input.addClass('err');                        //避免没有选择且没有新增地址的情况
          adminDetailData.set({                                            //修改数据层
            adress:val,
            allAdress : allAdress
          });
          $.closeModal(); //关闭弹窗
        }
      },
      onCancel: function(){
        $.closeModal();
      },
    });
    var $adressList = $('.adressList'),
        $startLi = $adressList.find('li');
    //初始Li点击后 触发圆点选择并设置为active
    $startLi.on('touchstart',function(){
      var $lastLi = $adressList.find('li:last');
      if($lastLi.hasClass('citySelect')) $lastLi.remove();        //如果此时新增地址的input存在则清除该input
      $(this).addClass('active').siblings().removeClass('active') 
    })
    $('.addAdress').on('touchstart',function(){
      var $lastLi = $adressList.find('li:last');
      if($lastLi.hasClass('citySelect')) return;                  //如果最后一个li已经是新增的input,则不再继续添加
      $adressList.append('<li class="citySelect"><select name=""><option value="卢湾">卢湾区</option><option value="徐汇">徐汇区</option><option value="静安">静安区</option><option value="虹口">虹口区</option><option value="长宁">长宁区</option><option value="普陀">普陀区</option><option value="闸北">闸北区</option><option value="黄浦">黄浦区</option><option value="浦东">浦东新区</option></select><input type="text"/></li>')
      $lastLi.next().find('input').off().on('focus',function(){
          $startLi.removeClass('active');
      })
    })
  },
  handlerAddAdress : function(val,allAdress){
    adminDetailData.set({                                            //修改数据层
      adress:val,
      allAdress : allAdress
    });
    $.closeModal();
  },
  handlerStore : function(){
    window.location = baseHost + '#/shopList/love';
  },
  handerRecharge : function(){
     $.confirm({
      title: '<p>我要充值</p>',
      text: '<div class="dialog-wrapper"><div class="msg"><h2>充值提示</h2><p>1.单笔订单充值不得超过500.</p><p>2.如果你长得够帅,充值将无需费用!</p></div><div class="info-input"><input name="value" type="tel" placeholder="充值金额"/></div></div>',
      onOK: function () {
        var $input = $('input[name^="value"]'),
            val = Number($input.val());     
        if(val > 500)  return $input.addClass('err');   //如果充值费用高于500,则return
        adminDetailData.set({
          balance : val + Number(adminDetailData.get('balance'))    //设置余额数据,对当前界面再次render
        })
        $.closeModal(); //关闭弹窗
      },
      onCancel: function(){
        $.closeModal();
      },
    });
  },
});  

export default new adminDetail(); 
