var shopListTemplate = `
{@if id !== null}
  <div class='storeList-banner'>
    <img src=<%= id|getUrl, "banner/","" => alt=""/>
  </div>
{@/if}
<div class='outFood-ColumnTitle'>
    <h3><%= ColumnTitle.cn =></h3>
    <p><%= ColumnTitle.english =></p>
</div>
<div class='storeList-wrapper'>
  <div class= '<%= isFixed|getClass, "weui-flex storeList-sort" =>'>
    {@each sortTab as tab}
    <div class='<%= tab.active|getClass, "weui-flex__item sort-btn" =>' data-ev="<%= tab.ev =>">
      <span><%= tab.inner =></span>
    </div>
    {@/each}  
  </div>
  <div class='storeList-lattice'></div>
  <ul class='menu-list'>
    {@each list as item}  
    <li>
      <div class="store-container outFood-container">
          <div class="store-perview">
            <img src=<%= item.logo|getUrl, "","/logo" => alt=""/>
          </div>
          <div class="store-info">
            <div class='info-title'><p><%= item.name =></p><span>1.4km</span></div>
            <div class='info-tag'>
              <div class='tag-lt'>
                <div class='tag-star'>
                   <%= item.stars|getStar =>     
                </div>
                <div class='tag-sales'>月销:<span><%= item.sales =></span>单</div>
              </div>
              <div class='tag-gt tag-time'><span><%= item.time =></span>分钟</div>
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
      </div>
    </li>
    {@/each}  
  </ul>
  <div class="weui-loadmore loadding-box">
    <img src='../images/icon/loading.gif'>
    <span class="weui-loadmore__tips">加载完毕 ...</span>
  </div>
</div>
`

juicer.register('getStar',function(num){
  var str = '';
  for(var i=0;i<num;i++){
    str+="<i class='icon-huo active'></i>"
  }
  return str;
})

juicer.register('getUrl',function(logo){
  return "http://www.web-jackiee.com/templets/blog/demo/publicImage/outFood/"+ arguments[1] + logo + arguments[2]+".jpg"
})

juicer.register('getClass',function(bool){
  var str = bool?" active":"";
  return arguments[1] + str;
})

// juicer.register('getActive',function(bool){
//   var str = bool?" active":"";
//   return "weui-flex storeList-sort" + str;
// })


export default shopListTemplate; 
