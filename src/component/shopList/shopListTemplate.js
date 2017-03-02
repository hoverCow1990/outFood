var shopListTemplate = `
<div class="weui-flex storeList-sort">
    <div class="weui-flex__item active">
      <span>销量最高</span>
    </div>
    <div class="weui-flex__item">
      <span>评分最高</span>
    </div>
    <div class="weui-flex__item">
      <span>速度最快</span>
    </div>
    <div class="weui-flex__item">
      <span>起送最低</span>
    </div>
</div>
<ul class='menu-list'>
  {@each list as item}  
  <li>
    <div class="store-container outFood-container">
        <div class="store-perview">
          <img src=%{item.logo|getUrl}  alt=""/>
        </div>
        <div class="store-info">
          <div class='info-title'><p>%{item.name}</p><span>1.4km</span></div>
          <div class='info-tag'>
            <div class='tag-lt'>
              <div class='tag-star'>
                %{item.stars|getStar}     
              </div>
              <div class='tag-sales'>月销:<span>%{item.sales}</span>单</div>
            </div>
            <div class='tag-gt tag-time'><span>%{item.time}</span>分钟</div>
          </div>
          <div class='info-price clearfix'>
            <div class='info-start'>起送价:<span>%{item.start}</span></div>
            <div class='info-express'>快递费:<span>%{item.express}</span></div>
          </div>
          <div class='info-tele'>
            <div><i class='icon-zhaoxiangji'></i></div>
            <span>%{item.tele}</span>
          </div>
        </div>
    </div>
  </li>
  {@/each}  
</ul>
<div class="weui-loadmore loadding-box">
  <img src='../images/icon/loading.gif'>
  <span class="weui-loadmore__tips">玩命加载...</span>
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
  return "http://www.web-jackiee.com/templets/blog/demo/publicImage/outFood/"+logo+"/logo.jpg"
})



export default shopListTemplate; 
