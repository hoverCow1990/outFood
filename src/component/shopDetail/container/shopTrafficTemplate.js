/*
 *  shopTrafficTemplate
 *  渲染商铺交通的juicer模板,地图最终会在traffic-map内渲染,线路指示会在traffic-bus内渲染
 *  作者     : hoverCow
 *  日期     : 2017-03-07
 *  GitHub   : https://github.com/hoverCow1990/outFood
 */

var shopTrafficTemplate = `
	<div class='shopDetail-title'>商家坐标</div>
	<div class='traffic-tab'>
		<div id="userPoint">
			<span></span>
			<p>您的坐标</p>
		</div>
		<div id="backPoint">
			<span></span>
			<p>商铺坐标</p>
		</div>
		<div id="route">
			<span></span>
			<p>交通线路</p>
		</div>
	</div>
	<div id ='traffic-map'></div>
	<div class='shopDetail-title'>商家交通</div>
	<div id ='traffic-bus'></div>
`

export default shopTrafficTemplate; 
