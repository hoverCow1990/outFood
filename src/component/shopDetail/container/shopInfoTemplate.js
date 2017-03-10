/*
 *  ShopMenuTemplate
 *  渲染商铺详情页内的菜单视图
 *  需求数据state内 sales:月售,collection:收藏,stars:综合评定
 *  作者     : hoverCow
 *  日期     : 2017-03-07
 *  GitHub   : https://github.com/hoverCow1990/outFood
 */

var shopInfoTemplate = `
	<div class='shopDetail-title'>商家得分</div>
	<ul class='info-score'>
		<li><p>月销评定 :</p><div class='score-line'><span style="width:<%= sales|getLineWidth ,1500=>"></span></div><div class='score-num'><%= sales =></div></li>
		<li><p>商户收藏 :</p><div class='score-line'><span style="width:<%= collection|getLineWidth ,5000=>"></span></div><div class='score-num'><%= collection =></div></li>
		<li><p>综合得分 :</p><div class='score-line'><span style="width:<%= stars + collection + sales|getLineWidth ,8000=>"></span></div><div class='score-num'><%= stars + collection + sales =></div></li>
	</ul>
	<div class='shopDetail-title'>商家介绍</div>
	<p class='info-des'><%= info =></p>
	<div class='shopDetail-title'>商家展示</div>
	<ul class='info-show'>
		<li><img class='show-img' src='http://www.web-jackiee.com/templets/blog/demo/publicImage/outFood/<%= logo =>/1.jpg'/></li>
		<li><img class='show-img' src='http://www.web-jackiee.com/templets/blog/demo/publicImage/outFood/<%= logo =>/2.jpg'/></li>
		<li><img class='show-img' src='http://www.web-jackiee.com/templets/blog/demo/publicImage/outFood/<%= logo =>/3.jpg'/></li>
	</ul>
`

juicer.register('getLineWidth',function(num){
 	return (num/arguments[1]+'').substr(2,2)+'%';
})


export default shopInfoTemplate; 
