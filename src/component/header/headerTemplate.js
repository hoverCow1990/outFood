import {baseHost} from '../../config/config';

/*
 *  HeaderTemplate
 *  头部部分Juicer模板 
 *  数据调用state内address
 *  作者     : hoverCow
 *  日期     : 2017-03-03
 *  GitHub   : https://github.com/hoverCow1990/outFood
 */

var headerTemplate = `
  <div class="header-info weui-flex__item">
    <a href=${baseHost}#/adminDetail >
      <input class='info' readonly="readonly" value="<%= address.replace(/.+区/,'') =>"/>
      <i class='icon-shouhuodizhi'></i>
    </a>
  </div>
  <div class="header-search weui-flex__item">
  	<div class='search-group'>
    	<input class='search'  placeholder='意面'/>
    	<i class='icon-sousuo'></i>
    	<div class="submit">Go</div>
     </div>
  </div>
`

export default headerTemplate; 
