// import {baseHost} from '../../config/config';

/*
 *  shopPaymentTemplate
 *  商铺订单页Juicer模板 
 *  循环orderList获取每一个订单信息
 *  在订单信息下再次循环list渲染每个菜品的信息,用户超过最低消费渲染支付按键不然渲染差...元信息
 *  作者     : hoverCow
 *  日期     : 2017-03-010
 *  GitHub   : https://github.com/hoverCow1990/outFood
 */

var shopPaymentTemplate = `
<div class='shopPayment-banner'></div>
<div class="outFood-ColumnTitle"><h3>支付环节</h3><p>Payment link</p></div>
<div class='shopPayment-hd'>
    <div class='hd-logo'><img src='http://www.web-jackiee.com/templets/blog/demo/publicImage/outFood/mc/logo.jpg'/></div>
    <div class='hd-info'>
      <div class='info-title'>
        <h4>麦当劳</h4><p>订单日期 : 2017-3-11</p>
      </div>
      <p>总计费用:<span>25</span>元</p>
    </div>
</div>
<div class='shopPayment-select'>
  <div class='select-balance'>
    <h4>我的余额</h4>
    <div class='balance-cal'>
      <p class='all'>520</p>
      <p class='minus'>25</p>
      <p class='result'>495</p>
    </div>
  </div>
  <div class='select-redpacket'>
    <h4>我的红包</h4>
    <ul>
      <li>
        <div>减免5元<span>2017-03-20</span></div><div class='select-input'></div>
      </li>
      <li>
        <div>减免2元<span>2017-03-30</span></div><div class='select-input active'></div>
      </li>
      <li>
         <div>减免1元<span>2017-03-51</span></div><div class='select-input'></div>
      </li>
    </ul>
  </div>
</div>
<div class='shopPayment-ensure'>支付25元</div>
`

export default shopPaymentTemplate; 
