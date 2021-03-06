import {baseHost} from '../../../config/config';

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
		<a href=${baseHost}#/orderList>
			<i class='icon-gouwuchetianjia'></i>
			<span><%= allLength =></span>
		</a>
	</div>
	<div class='package-info'>
		<div class='info-value'><p>¥</p><span class='payment'><%= payment.toFixed(1) =></span><p>+ 快递费¥</p><span><%= express =></span></div>
		{@if payment - start >= 0}
			<div class='info-btn active'><a href=${baseHost}#/shopPayment/<%= id =>>结算</a></div>
		{@else}
			<div class='info-btn'>差<%= (start*10 - payment*10)/10 =></div>
		{@/if}
	</div>
</div>
`
export default OrderTemplate; 
