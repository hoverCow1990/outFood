import {baseHost} from '../../config/config';

/*
 *  ShopDetail
 *  需要数据 stars:星级,start:最低消费,express:快递费,distacne:商家距离,time + trafficTime:为送餐时间
 *	isLove为是否收藏,以及tabInfo渲染tab选择
 *  作者     : hoverCow
 *  日期     : 2017-03-06
 *  GitHub   : https://github.com/hoverCow1990/outFood
 */

var ShopDetailTemplate = `
<div class='shopDetail-topLine'></div>
<div class='shopDetail-hd' style='background:url(http://www.web-jackiee.com/templets/blog/demo/publicImage/outFood/banner/<%= tag =>.jpg)'>
	<div class='back'><a href="${baseHost}#/<%= lastUrl =>"><i class='icon-xiangzuojiantou'></i></a></div>
	<div class='hd-bg'></div>
	<div class='hd-container'>
		<div class='hd-logo'>
			<img src='http://www.web-jackiee.com/templets/blog/demo/publicImage/outFood/<%= logo =>/logo.jpg'/>
		</div>
		<div class='hd-info'>
			<h4><%= name =></h4>
			<div class='info-star'><%= stars|getStars,"<img src='../images/shopDetail/star.png'/>" =></div>
			<ul>
				<li>最低消费:<span><%= start =></span></li>
				<li>快递费:<span><%= express =></span></li>
				<li>商家距离:<span><%= distance =></span>km</li>
				<li>送餐时间:<span><%= time + trafficTime =></span>分钟</li>
			</ul>
		</div>
		<div class='<%= isLove?"hd-heart active":"hd-heart" =>'><i class='icon-jushoucanggift'></i></div>
	</div>
</div>
<ul class="shopDetail-pageTab">
	{@each tabInfo as info,index}
		<li class=<%= index == pageTab?'active':'' =>><%= info =></li>
	{@/each}
</ul>
<div class="shopDetail-pageConatiner">
</div>
`

//根据num换算出星星的数量
juicer.register('getStars',function(num){
	var str = '',
	    num = Math.min(Math.floor(num/500),5);
	for(var i=0;i<num;i++){
	    str+="<img src='../images/shopDetail/star.png'/>"
	}
	return str;
})

export default ShopDetailTemplate; 
