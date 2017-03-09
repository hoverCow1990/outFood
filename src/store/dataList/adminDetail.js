/*
 *  商户详情数据 :
 *  需求组件 : shopDetail
 *  作者     : hoverCow
 *  日期     : 2017-03-03
 *	GitHub   : https://github.com/hoverCow1990/outFood
 */

/* 
 *	数据示例 :{
 *		name 		: '老牛',				   //用户名
 *		tele 		: '13636556375',		   //用户手机号
 *		address     : '徐汇区长桥八村27号',	   //当前选择地址
 *		allAddress 	: [''],					   //所有地址
 *		balance 	: 52.2,					   //用户余额		
 *		redPacket   : [{					   //用户红包列表
 *		  'value' : 2,						   //红包金额
 *		  'time'  : '2017-3-25'}] 			   //红包截止日期
 *		order : [],							   //订单列表
 *		adminPoints : new BMap.Point(x,y),	   //在调用百度地址接口后储存进度纬度坐标[请求时没有],
 *		tabActive   : 2                        //记录用户在首页是后点击排序按钮后的index
 *		scrollTop 	:                          //记录用户每次在首页滚屏高度,再重新渲染首页时调用
 *	}
 *
 *	数据监听 :
 *	address.change 渲染header,重置商户与用户的距离,送餐时间数据
 *	[redPacket,balance].change 重新渲染adminDetail
 *		
 */

var adminDetailData = new Backbone.Model();

export default adminDetailData;