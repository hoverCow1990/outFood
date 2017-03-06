var OrderTemplate = `
<div class='order-package'>
	<div class='package-cil active'>
		<i class='icon-gouwuchetianjia'></i>
		<span><%= allLength =></span>
	</div>
	<div class='package-info'>
		<div class='info-value'>¥<span><%= payment =></span>+ 快递费¥<span><%= express =></span></div>
		<div class='info-btn'>结算</div>
	</div>
</div>
`


export default OrderTemplate; 
