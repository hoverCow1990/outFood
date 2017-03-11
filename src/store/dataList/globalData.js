/*
 *  用户数据信息 :
 *  需求组件 : 路由机制
 *	用于当且页面数据判断渲染不同试图
 *  作者     : hoverCow
 *  日期     : 2017-03-02
 *	GitHub   : https://github.com/hoverCow1990/outFood
 */

/*
 *	数据示例 : {
 *		routerId : 'adminDetail',  	//当前路由匹配路径
 *	}
 *
 *		
 */

var globalData = new Backbone.Model({
	lastRouterId : [],
	routerId : ''
});

export default globalData;