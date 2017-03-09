import {baseHost} from '../../config/config';

/*
*  indexTemplate
*  Index部分Juicer模板 
*  作者     : hoverCow
*  日期     : 2017-03-03
*  GitHub   : https://github.com/hoverCow1990/outFood
*/

var indexTemplate = `
<section id='outFood-carousel' class="swiper-container" data-space-between='10' data-pagination='.swiper-pagination' data-autoplay="1000">
  <div class="swiper-wrapper">
    <div class="swiper-slide"><a href=${baseHost}#/shopList/肉><img src="../images/carousel/1.jpg" alt=""></a></div>
    <div class="swiper-slide"><img src="../images/carousel/2.jpg" alt=""></div>
    <div class="swiper-slide"><img src="../images/carousel/3.jpg" alt=""></div>
    <div class="swiper-slide"><img src="../images/carousel/4.jpg" alt=""></div>
    <div class="swiper-slide"><a href=${baseHost}#/shopList/夜宵><img src="../images/carousel/5.jpg" alt=""></a></div>
  </div>
  <div class="swiper-pagination"></div>
</section>
<nav class='outFood-nav'>
    <div class="weui-flex">
    		<div class="weui-flex__item">
          <a href=${baseHost}#/shopList/delicious>
      			<img src="../images/indexNav/1.png" alt="">
      			<p>美食</p>
          </a>
    		</div>
  		<div class="weui-flex__item">
        <a href=${baseHost}#/shopList/seafood>
    			<img src="../images/indexNav/2.png" alt="">
    			<p>海鲜</p>
        </a>
  		</div>
  		<div class="weui-flex__item">
        <a href=${baseHost}#/shopList/fruit>
    			<img src="../images/indexNav/3.png" alt="">
    			<p>水果</p>
        </a>
  		</div>
  		<div class="weui-flex__item">
        <a href=${baseHost}#/shopList/sweet>
    			<img src="../images/indexNav/4.png" alt="">
    			<p>甜点</p>
        </a>
  		</div>
	</div>
	<div class="weui-flex">
  		<div class="weui-flex__item">
        <a href=${baseHost}#/shopList/fast>
    			<img src="../images/indexNav/5.png" alt="">
    			<p>快餐</p>
        </a>
  		</div>
  		<div class="weui-flex__item">
        <a href=${baseHost}#/shopList/drink>
    			<img src="../images/indexNav/6.png" alt="">
    			<p>饮料</p>
        </a>
  		</div>
  		<div class="weui-flex__item">
        <a href=${baseHost}#/shopList/chinese>
    			<img src="../images/indexNav/7.png" alt="">
    			<p>中餐</p>
        </a>
  		</div>
  		<div class="weui-flex__item">
        <a href=${baseHost}#/shopList/discount>
    			<img src="../images/indexNav/8.png" alt="">
    			<p>优惠</p>
        </a>
  		</div>
	</div>
</nav>
<section class='outFood-recommend'>
	<div class='outFood-ColumnTitle'>
		<h3>今日推荐</h3>
		<p>Recommend today</p>
	</div>
	<div class='recommend-platform'>
		<div class="weui-flex outFood-container">
	  		<div class="weui-flex__item">
	  			<div class='recommend-perview'>
	  				<img src="../images/recommend/kfc.jpg" alt=""/>
	  			</div>
	  		</div>
	  		<div class="weui-flex__item">
	  			<div class='recommend-perview'>
	  				<img src="../images/recommend/coco.jpg" alt=""/>
	  			</div>
	  			<div class='recommend-perview'>
	  				<img src="../images/recommend/axxl.jpg" alt=""/>
	  			</div>
	  		</div>
		</div>
	</div>
</section>
<section id='shopList-container' class='outFood-nearby'></section>
`

export default indexTemplate; 
