/*
 *  shopMenuTemplate
 *  渲染商铺详情页内的菜单视图
 *  需求数据state.list内 item.name:品名,item.score:评分,sell:月售,value:价格,num判断是否显示减号和产品数额
 *  作者     : hoverCow
 *  日期     : 2017-03-06
 *  GitHub   : https://github.com/hoverCow1990/outFood
 */

var shopMenuTemplate = `
<ul class='order-menu'>
	{@each menu as item,index}
	<li>
		<div class='list-perviewer'>
			<img src='http://www.web-jackiee.com/templets/blog/demo/publicImage/outFood/<%= logo =>/c-<%= item.id =>.jpg' />
		</div>
		<div class='list-plane'>
			<h4><%= item.name =></h4>
			<div class='plane-info'>
				<div>评分:<span><%= item.score =></span></div><div>月售:<span><%= item.sell =></span></div>
			</div>
			<div class='plane-consume'>
				<div class='consume-price'>
					<p><span><%= item.value =></span>元/份</p>
				</div>
				<div class='consume-select'>
					<div class='select-box' data-id='<%= item.id =>'>
						{@if item.num > 0}
							<div class='select plus'>-</div>
							<span class='active'><%= item.num =></span>
						{@/if}
						<div class='select add'>+</div>
					</div>
				</div>
			</div>
		</div>
	</li>
	{@/each}
</ul>
`
export default shopMenuTemplate; 
