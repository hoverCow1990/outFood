/*
 *  用户数据信息 :
 *  需求组件 : shopDetail/* 所有组件
 *  数据为Collection集合,被请求过的数据会缓存在本地,不进行重复请求
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
 *		info		: '麦当劳遍布..'			//商户介绍	
 *		menu		: [{						//商户菜单列表
 *			id    : 0,							//菜品id
 *			name  : '麦趣鸡盒',					//菜品名称
 *			score : 78,							//菜品分数
 *			sell  : 576,						//菜品月售
 *			value :	89,							//菜品售价
 *			num   : 2							//菜品被点餐后的数量 [请求时候没有]
 *		}]	 
 *	}]
 *
 *	数据监听 :
 *	menu.change 渲染shopDetail/shopMenu
 *		
 */

var shopDetailData = new Backbone.Collection();

export default shopDetailData;