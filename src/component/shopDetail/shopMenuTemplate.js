var ShopMenuTemplate = `
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
						{@if item.num>0}
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

// juicer.register('getLength',function(arr){
//  	return arr.length;
// })


export default ShopMenuTemplate; 
