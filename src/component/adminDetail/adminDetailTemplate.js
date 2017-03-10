/*
 *  adminDetailTemplate
 *  用户信息页面Juicer模板 
 *  作者     : hoverCow
 *  日期     : 2017-03-07
 *  GitHub   : https://github.com/hoverCow1990/outFood
 */

var adminDetailTemplate = `
	<div class='admin-logo'>
		<img src='../images/adminDetail/adminLogo.jpg'/>
		<p><%= name =></p>
	</div>
	<div class='admin-coupon'>
	  	<div class="weui-flex coupon-container">
		  <div class="weui-flex__item">
		  	<div class='info'><span><%= balance =></span>元</div>
		  	<div class='logo'>余额</div>
		  </div>
		  <div class="weui-flex__item">
		  	<div class='info'><span><%= redPacket.length =></span>张</div>
		  	<div class='logo'>红包</div>
		  </div>
		  <div class="weui-flex__item">
		  	<div class='info'><span><%= orderList.length =></span>个</div>
		  	<div class='logo'>我的订单</div>
		  </div>
		</div>
	</div>
	<div class="weui-cells admin-list">
		  <div class="weui-cell" data-ev="info">
		    <div class="weui-cell__bd">
		      <p><i class='icon-shezhi'></i>基础信息</p>
		    </div>
		    <div class="weui-cell__ft"><i class='icon-xiangyoujiantou'></i></div>
		  </div>
		  <div class="weui-cell" data-ev="address">
		    <div class="weui-cell__bd">
		      <p><i class='icon-shouhuodizhi'></i>送餐坐标</p>
		    </div>
		    <div class="weui-cell__ft"><i class='icon-xiangyoujiantou'></i></div>
		  </div>
		  <div class="weui-cell" data-ev="store">
		    <div class="weui-cell__bd">
		      <p><i class='icon-jushoucanggift'></i>收藏商户</p>
		    </div>
		    <div class="weui-cell__ft"><i class='icon-xiangyoujiantou'></i></div>
		  </div>
		  <div class="weui-cell" data-ev="recharge">
		    <div class="weui-cell__bd">
		      <p><i class='icon-wodeyouhuiquan'></i>充值现金</p>
		    </div>
		    <div class="weui-cell__ft"><i class='icon-xiangyoujiantou'></i></div>
		  </div>
	</div>
`
export default adminDetailTemplate; 