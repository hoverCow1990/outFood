var indexTemplate = `
<section id='outFood-carousel' class="swiper-container" data-space-between='10' data-pagination='.swiper-pagination' data-autoplay="1000">
  <div class="swiper-wrapper">
    <div class="swiper-slide"><img src="../images/carousel/1.jpg" alt=""></div>
    <div class="swiper-slide"><img src="../images/carousel/2.jpg" alt=""></div>
    <div class="swiper-slide"><img src="../images/carousel/3.jpg" alt=""></div>
    <div class="swiper-slide"><img src="../images/carousel/4.jpg" alt=""></div>
    <div class="swiper-slide"><img src="../images/carousel/5.jpg" alt=""></div>
  </div>
  <div class="swiper-pagination"></div>
</section>
<nav class='outFood-nav'>
    <div class="weui-flex">
  		<div class="weui-flex__item">
  			<img src="../images/indexNav/1.png" alt="">
  			<p>美食</p>
  		</div>
  		<div class="weui-flex__item">
  			<img src="../images/indexNav/2.png" alt="">
  			<p>海鲜</p>
  		</div>
  		<div class="weui-flex__item">
  			<img src="../images/indexNav/3.png" alt="">
  			<p>水果</p>
  		</div>
  		<div class="weui-flex__item">
  			<img src="../images/indexNav/4.png" alt="">
  			<p>甜点</p>
  		</div>
	</div>
	<div class="weui-flex">
  		<div class="weui-flex__item">
  			<img src="../images/indexNav/5.png" alt="">
  			<p>快餐</p>
  		</div>
  		<div class="weui-flex__item">
  			<img src="../images/indexNav/6.png" alt="">
  			<p>饮料</p>
  		</div>
  		<div class="weui-flex__item">
  			<img src="../images/indexNav/7.png" alt="">
  			<p>中餐</p>
  		</div>
  		<div class="weui-flex__item">
  			<img src="../images/indexNav/8.png" alt="">
  			<p>优惠</p>
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
<section class='outFood-nearby'>
	<div class='outFood-ColumnTitle'>
		<h3>附近饮食</h3>
		<p>Nearby diet</p>
	</div>
  <div id='storeList-wrapper'>
  </div>
</section>
`



export default indexTemplate; 
