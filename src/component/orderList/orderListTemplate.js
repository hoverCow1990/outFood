import {baseHost} from '../../config/config';

/*
 *  orderListTemplate
 *  商铺订单页Juicer模板 
 *  循环orderList获取每一个订单信息
 *  在订单信息下再次循环list渲染每个菜品的信息,用户超过最低消费渲染支付按键不然渲染差...元信息
 *  作者     : hoverCow
 *  日期     : 2017-03-010
 *  GitHub   : https://github.com/hoverCow1990/outFood
 */

var orderListTemplate = `
 <div class='orderList-banner'></div>
 <div class="outFood-ColumnTitle"><h3>我的订单</h3><p>My orderList</p></div>
 <div class='orderList-container toBeBay'>
    {@if orderList.length}
    <ul class='orderList-list'>
      {@each orderList as order}
      <li class='list-box'>
          <div class='list-title'>
            <h4><%= order.name =></h4>
            <span><%= order.time.toLocaleDateString().replace(new RegExp('/','g'),'-') =></span>
          </div>
          <ul class='list-detail'>
            {@each order.list as item}
            <li>
                <p><%= item.name=> *<%= item.num =></p><span><%= item.value =></span>
            </li>
            {@/each}
            <li>
                <p>快递费 *1</p><span><%= order.express =></span>
            </li>
          </ul>
          <div class='list-ft'>
            <div class='list-value'>
              总计 : ¥<span><%= order.payment + order.express =></span>
            </div>
            <div class='list-entrance'>
              <div class='change'><a href=${baseHost}#/shopDetail/<%= order.id =>>修改</a></div>
              {@if order.couldPay > 0}
                <div class='payMore'>差<%= order.couldPay =>元</div>
              {@else}
                <div class='active'><a>支付</a></div>
              {@/if}
            </div>
          </div>
      </li>
      {@/each}
    </ul>
    {@else}
    <div  class='noOrderList'>
      <i class='icon-tishi'></i>
      <p>您暂时没有订单...</p>
    </div>
    {@/if}
 </div>
`

export default orderListTemplate; 
