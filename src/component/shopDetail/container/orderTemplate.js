/*
 *  OrderTemplate
 *  渲染在menu内的footer下
 *  需求数据 payment:总支付金额,express:快递费,start:与总金额判断大小显示差额还是结算
 *  作者     : hoverCow
 *  日期     : 2017-03-06
 *  GitHub   : https://github.com/hoverCow1990/outFood
 */

var OrderTemplate = `
<div class='order-package'>
	<div class='package-cil active'>
		<i class='icon-gouwuchetianjia'></i>
		<span><%= allLength =></span>
	</div>
	<div class='package-info'>
		<div class='info-value'><p>¥</p><span class='payment'><%= payment =></span><p>+ 快递费¥</p><span><%= express =></span></div>
		{@if payment - start >= 0}
			<div class='info-btn active'>结算</div>
		{@else}
			<div class='info-btn'>差<%= start - payment =></div>
		{@/if}
	</div>
</div>
`
export default OrderTemplate; 
