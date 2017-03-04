import {baseHost} from '../../defaultConfig/config';

var HeaderTemplate = `
  	<div class="weui-flex">
	  <div class="header-info weui-flex__item">
	  	<div class='footer-select'>
	  		<a href=${baseHost}#>
			  	<i class='icon-shouye'></i>
			  	<p>首页</p>
			</a>
		</div>
	  </div>
	  <div class="header-search weui-flex__item">
	  	<div class='footer-select'>
		  	<i class='icon-wodedingdan'></i>
		  	<p>订单</p>
		</div>
	  </div>
	  <div class="header-search weui-flex__item">
	  	<div class='footer-select'>
	  		<a href=${baseHost}#/adminDetail>
			  	<i class='icon-shezhi'></i>
			  	<p>信息</p>
			</a>
		</div>
	  </div>
	</div>
`



export default HeaderTemplate; 
