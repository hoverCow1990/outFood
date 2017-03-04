import AdminDetailTemplate from './adminDetailTemplate';
import adminDetail from '../../store/adminDetail';
import globalData from '../../store/globalData';
import {requestadminDetail} from '../../requestApi/requestApi';
// import {headerConfig} from '../../defaultConfig/config';

var AdminDetail = Backbone.View.extend({  
	tagName : 'div',  
	className : 'adminDetail',
	events :{
    'click  .admin-list' : 'handlerEvents',
	},
  initialize : function(){
  },
  template: function(){
      var json = adminDetail.attributes,
  		    data = {
      			name : json.name,
      			tele : json.tele,
      			adress : json.adress,
      			balance : json.balance,
      			friend : json.friend,
      			love : json.love,
      			redPacket : json.redPacket,
      			order : json.order
    		}; 
		return juicer(AdminDetailTemplate, data);
  },
  handlerRequest : function(){
    var self = this;
    requestadminDetail(function(){
      self.render();
    });
  },
	render : function(){ 
    if(adminDetail.toJSON().name === void 0) return; //避免无效渲染
	  this.el.innerHTML = this.template();
	  $('#app').text('');
	  $('#app').append(this.el);  
	  this.initEvents();
    this.delegateEvents();   //渲染后需要重新激活按键事件
	},
	initEvents : function(){
		
	},
  handlerEvents : function(e){
    switch(this.getEv($(e.target))){
      case 'info':
        this.handlerInfo();
        break;
      case 'adress':
        this.handlerAdress();
        break;
      default :
        console.log(2); 
    }
  },
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
  handlerInfo : function(){
    $.confirm({
      title: '<p>用户信息修改</p>',
      text: '<div class="dialog-wrapper"><div class="info-input"><input name="user" maxlength="6" type="text" placeholder="姓名"/><input type="tel" name="tele" placeholder="手机号"/></div></div>',
      onOK: function () {
        var $name = $('input[name^="user"]'),
            $tele = $('input[name^="tele"]'),
            name = $name.val(),
            tele = $tele.val();
        if(!checkTele(tele)) return $tele.addClass('err');
        adminDetail.set({
          name : name,
          tele : tele,
        })
        //$tele.removeClass('err');
        $.closeModal();
      },
      onCancel: function () {
        $.closeModal();
      },
    });
    function checkTele(val){
      return /^1[34578]\d{9}$/.test(val);
    }
  },
  handlerAdress : function(){
    $.confirm({
      title: '<p>用户地址</p><span class="addAdress">+ 新增</span>',
      text: '<div class="dialog-wrapper"><ul class="adressList"><li><p>长桥八村27号</p><div class="radio"></div></li><li><p>金沙江路823号</p><div class="radio"></div></li></ul></div>',
      onOK: function () {
        var $lastLi = $adressList.find('li:last'),
            val;
        if($lastLi.hasClass('citySelect')){
          var $input = $lastLi.find('input');
              val = $input.val();
          if(val < 4 || /^\d+/.test(val)) return $input.addClass('err');
        }else{
          val = $adressList.find('.active').find('p').text();
        }
        if(!val) return;
        adminDetail.set({adress:val});
        $.closeModal();
      },
      onCancel: function(){
        $.closeModal();
      },
    });
    var $adressList = $('.adressList'),
        $startLi = $adressList.find('li');
    $startLi.on('touchstart',function(){
      var $lastLi = $adressList.find('li:last');
      if($lastLi.hasClass('citySelect')) $lastLi.remove();
      $(this).addClass('active').siblings().removeClass('active')
    })
    $('.addAdress').on('touchstart',function(){
      var $lastLi = $adressList.find('li:last');
      if($lastLi.hasClass('citySelect')) return;
      $adressList.append('<li class="citySelect"><select name=""><option value="卢湾">卢湾区</option><option value="徐汇">徐汇区</option><option value="静安">静安区</option><option value="虹口">虹口区</option><option value="长宁">长宁区</option><option value="普陀">普陀区</option><option value="闸北">闸北区</option><option value="黄浦">黄浦区</option><option value="浦东">浦东新区</option></select><input type="text"/></li>')
      $lastLi.next().find('input').off().on('focus',function(){
          $startLi.removeClass('active');
      })
    })
  }
});  

export default new AdminDetail(); 
