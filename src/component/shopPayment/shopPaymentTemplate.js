// import {baseHost} from '../../config/config';

/*
 *  shopPaymentTemplate
 *  支付页Juicer模板 
 *  运用state logo:商户图标,time:订单日期,payment/blance/derate:用于是否可以支付的一依据以及金额渲染
 *  循环redPacket渲染=红包列表,并data-value记录金额
 *  作者     : hoverCow
 *  日期     : 2017-03-10
 *  GitHub   : https://github.com/hoverCow1990/outFood
 */

var shopPaymentTemplate = `
<div class='shopPayment-banner'></div>
<div class="outFood-ColumnTitle"><h3>支付环节</h3><p>Payment link</p></div>
{@if hasPay === false}
  <div class='shopPayment-hd'>
      <div class='hd-logo'><img src='http://www.web-jackiee.com/templets/blog/demo/publicImage/outFood/<%= logo =>/logo.jpg'/></div>
      <div class='hd-info'>
        <div class='info-title'>
          <h4><%= name =></h4><p>订单日期 : <%= time =></p>
        </div>
        <p>总计费用:<span><%= payment =></span>元</p>
      </div>
  </div>
  <div class='shopPayment-select'>
    <div class='select-balance'>
      <h4>我的余额</h4>
      <div class='balance-cal'>
        <p class='all'><%= balance =></p>
        <p class='minus'><%= payment - derate =></p>
        <p class='result'><%= (balance*10 - payment*10 + derate*10)/10 =></p>
      </div>
    </div>
    <div class='select-redpacket'>
      <h4>我的红包</h4>
      <ul class='redpacket-list'>
        {@each redPacket as item,index}
        <li data-value='<%= item.value =>'>
          <div>减免<%= item.value =>元<span><%= item.time.replace(new RegExp('/',g),'-') =></span></div><div class='select-input<%= index == redPacketTab?" active":""=>'></div>
        </li> 
        {@/each}
      </ul>
    </div>
  </div>
  {@if (balance*10 -payment*10 + derate*10)/10 >= 0}
    <div class='shopPayment-ensure active'>支付<%= Math.min((payment - derate),0) =>元</div>
  {@else}
    <p class='shopPayment-msg'>可至右下角信息页面进行充值...</p>
    <div class='shopPayment-ensure'>余额不足</div>
  {@/if}
{@else}
  <div class='shopPayment-hasPay'>
    <i class='icon-wancheng'></i>
    <p>订单支付成功!</p>
  </div>
{@/if}
`

export default shopPaymentTemplate; 
