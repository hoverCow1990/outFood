import {baseHost} from '../../config/config';

/*
 *  shopListTemplate
 *  商铺列表部分Juicer模板 
 *  数据调用state内所有数据
 *  routerId不为index时渲染banner页
 *  columnTitle用于渲染商铺列表的标题,根据不同路由渲染不同标题
 *  
 *  作者     : hoverCow
 *  日期     : 2017-03-04
 *  GitHub   : https://github.com/hoverCow1990/outFood
 */

var shopListTemplate = `
  {@if routerId !== 'index'}
    <div class='storeList-banner'>
      <img src=<%= routerId|getUrl, "banner/","" => alt=""/>
    </div>
  {@/if}
  <div class='outFood-ColumnTitle'>
      <h3><%= columnTitle.cn =></h3>
      <p><%= columnTitle.english =></p>
  </div>
  <div class='storeList-wrapper'>
    <div class="weui-flex storeList-sort">
      <div class="weui-flex__item sort-btn <%= tabActive === 0?' active':'' =>" data-ev="sales">
        <span>销量最高</span>
      </div>
      <div class="weui-flex__item sort-btn <%= tabActive === 1?' active':'' =>" data-ev="stars">
        <span>评分最高</span>
      </div>
      <div class="weui-flex__item sort-btn <%= tabActive === 2?' active':'' =>" data-ev="time">
        <span>速度最快</span>
      </div>
      <div class="weui-flex__item sort-btn <%= tabActive === 3?' active':'' =>" data-ev="start">
        <span>起送最低</span>
      </div>
    </div>
    {@if hasSearchData}
    <ul class='menu-list'>
      {@each list as item}  
      <li>
          <div class="store-container outFood-container">
            <a href=${baseHost}#/shopDetail/<%= item.id =>>
              <div class="store-perview">
                <img src=<%= item.logo|getUrl, "","/logo" => alt=""/>
              </div>
              <div class="store-info">
                <div class='info-title'><p><%= item.name =></p><span><%= item.distance =>km</span></div>
                <div class='info-tag'>
                  <div class='tag-lt'>
                    <div class='tag-star'>
                       <%= item.stars|getStar =>     
                    </div>
                    <div class='tag-sales'>月销:<span><%= item.sales =></span>单</div>
                  </div>
                  <div class='tag-gt tag-time'><span><%= item.time*2 + item.trafficTime =></span>分钟</div>
                </div>
                <div class='info-price clearfix'>
                  <div class='info-start'>起送价:<span><%= item.start =></span></div>
                  <div class='info-express'>快递费:<span><%= item.express =></span></div>
                </div>
                <div class='info-tele'>
                  <div><i class='icon-zhaoxiangji'></i></div>
                  <span><%= item.tele =></span>
                </div>
              </div>
            </a>
          </div>
          {@if orderList[item.id] >0}
            <span class="orderList-tip"><%= orderList[item.id] =></span>
          {@/if}
      </li>
      {@/each}  
    </ul>
    {@else}
      <p>没有您搜索的数据...</p> 
    {@/if}  
    <div class="weui-loadmore loadding-box">
      <img src='../images/icon/loading.gif'>
      <span class="weui-loadmore__tips"><%= requestSwitch?'玩命加载 ...':'已全部加载!' =></span>
    </div>
  </div>
`

//根据用户的stars获取不同个数的星星最高显示为5个,如传入3600则匹配为5星商户
juicer.register('getStar',function(num){
  var str = '',
      num = Math.min(Math.floor(num/500),5);
  for(var i=0;i<num;i++){
    str+="<i class='icon-huo active'></i>"
  }
  return str;
})

//用于获取url,用于获取banner的地址
juicer.register('getUrl',function(logo){
  if(arguments[1] === 'banner/'){
    if('delicious,seafood,fruit,sweet,fast,drink,chinese,discount,love'.match(logo) === null) logo = 'search';
  }
  return "http://www.web-jackiee.com/templets/blog/demo/publicImage/outFood/"+ arguments[1] + logo + arguments[2]+".jpg"
})

export default shopListTemplate; 
