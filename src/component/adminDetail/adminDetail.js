import AdminDetailTemplate from './adminDetailTemplate';
import adminDetail from '../../store/adminDetail';
import globalData from '../../store/globalData';
import {requestadminDetail} from '../../requestApi/requestApi';
// import {headerConfig} from '../../defaultConfig/config';

var AdminDetail = Backbone.View.extend({  
	tagName : 'div',  
	className : 'adminDetail',
	events :{
 
	},
  initialize : function(){
    console.log(1);
    // if(globalData.get('routerId')===null){
    //   globalData.set({routerId:adminDetail});
    //     this.handlerRequest();
    // };
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
	    this.el.innerHTML = this.template();
	    $('#app-Wrapper').text('');
	    $('#app-Wrapper').append(this.el);  
	    this.initEvents();
	},
	initEvents : function(){
		
	},
});  



export default new AdminDetail(); 
