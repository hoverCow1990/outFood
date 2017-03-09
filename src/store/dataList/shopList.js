/*
 *  用户数据信息 :
 *  需求组件 : shopList [index页情况下]
 *  数据格式为Collection,常驻缓存内...通过用户向下滚动时再次请求
 *	每次进入数据会被更新
 *  作者     : hoverCow
 *  日期     : 2017-03-05
 *	GitHub   : https://github.com/hoverCow1990/outFood
 */

/* 
 *	数据示例 :[{
 *		id 			: 0,					 	//商户id
 *		name 		: '麦当劳',					//商户名称
 *		address     : '徐汇区老沪闵路809号',	//商户地址
 *		tele 		: '(021)54391019',			//商户联系方式
 *		logo 		: 'mc',					 	//商户logo名
 *		sales 		: 1266,					 	//商户月售
 *		start    	: 20,						//商户起送价
 *		express 	: 10,						//商户快递费
 *		stars		: 2800,						//商户综合评分
 *      time 		: 20,						//商户准备餐食时间			
 *		tag			: 'fast',					//商户分类
 *		collection	: 3252,						//商户被收藏率
 *		info		: '麦当劳遍布..',			//商户介绍	
 *		search		: '快餐,炸鸡,mc,肉,夜宵'	//所有的关键词
 *	}]
 *		
 *
 *		
 */

var shopListData = new Backbone.Collection();

export default shopListData;