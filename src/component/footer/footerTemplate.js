import {baseHost} from '../../config/config';

/*
 *  footerTemplate
 *	底部Juicer模板
 *  作者     : hoverCow
 *  日期     : 2017-03-02
 *  GitHub   : https://github.com/hoverCow1990/outFood
 */

var footerTemplate = `
  	<div class="weui-flex">
	  <div class="header-info weui-flex__item">
	  	<div class='footer-select'>
	  		<a href=${baseHost}#>
			  	<i class='icon-shouye footer-icon'></i>
			  	<p>首页</p>
			</a>
		</div>
	  </div>
	  <div class="header-search weui-flex__item">
	  	<a href=${baseHost}#/orderList>
		  	<div class='footer-select'>
			  	<i class='icon-wodedingdan footer-icon'></i>
			  	<p>订单</p>
			</div>
		</a>
	  </div>
	  <div class="header-search weui-flex__item">
	  	<div class='footer-select'>
	  		<a href=${baseHost}#/adminDetail>
			  	<i class='icon-shezhi footer-icon'></i>
			  	<p>信息</p>
			</a>
		</div>
	  </div>
	</div>
`



export default footerTemplate; 
