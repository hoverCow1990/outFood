import {baseHost} from '../../defaultConfig/config';

var HeaderTemplate = `
  <div class="header-info weui-flex__item">
    <a href=${baseHost}#/adminDetail >
      <input class='info' readonly="readonly" value="<%= adress.replace(/.+区/,'') =>"/>
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



export default HeaderTemplate; 
