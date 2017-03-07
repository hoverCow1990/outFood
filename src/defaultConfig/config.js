//var baseHost = 'http://www.web-jackiee.com/templets/blog/demo/outFood/views/app.html';
//var baseHost = 'http://localhost:3000/dist/views/app.html'; //仅pc端
var baseHost = 'http://192.168.1.3:3000/dist/views/app.html'; //手机同步测试

//头部设置
var headerConfig = {
	maxTop : 400			//动画截止高度
}

var trafficConfig = {
      area : '上海市',
      id : 'traffic-map',              		//显示百度地图的盒子 可传id名或者有id名的dom对象
      shopPoints : '',           					//商户坐标可传地址或直接坐标(http://api.map.baidu.com/lbsapi/getpoint/) 不传则不显示
      userPoints : '',        						//用户坐标
      zoom : 15,                  				//地图起始缩放比例(1-20) 1最大 20最小
      module : '',              					//地图模式样式  默认''|| normal 夜间midnight 清新light 黑夜dark 红警redalert 精简googlelite 绿风grassgreen 粉色pink 青春darkgreen 蓝绿bluish 灰风grayscale 强边界hardedge
      backPoints : 'backPoint',       		//返回起商铺坐标Id 不要的话就''
      backUserPoints : 'userPoint',     	//返回起人物坐标Id 不要的话就''
      control : {               					//各类控件
        Switch : true,            				//是否打开控件 false则一律不开 true则进入下边详细列表
        list : {              						//控件列表单独设置 仅Switch为true时设置有效
          NavigationControl : [true],   	//+ -控件 第一参数boolean为是否开启,第二参数[x,y]内可调整位置
          ScaleControl : [true,[10,10]],  //比例标尺 
          OverviewMapControl : [true],  	//小地图
          MapTypeControl : [false]     		//卫星模式
        }
      },
      overlay : {                             		//覆盖物指针
        Switch : true,            					//是否开启
        img : 'https://img.alicdn.com/imgextra/i3/700459267/TB2iTlrcp5N.eBjSZFKXXX_QVXa_!!700459267.png', //指针雪碧图地址 不传则用默认图片
        size : [32,32],           					//图片尺寸
        offset : [17,40],         					//位置偏移量
        styleIndex : [1,2],        				 	//第一个为商铺样式,第二个为用户样式 参数有1-10种不同样式一一对应
        drug : false,           					//指针是否能拖拽
        drugFn : function(e){       				//拖拽执行的事件
          console.log("x:" + e.point.lng + ",y:" + e.point.lat);
        },
        click : false,            					//指针是否点击事件
        clickFn : function(){       				//点击执行的事件
          console.log('welcome');
        }
      },
      msg : {                   					//信息窗口
        Switch : false,           					//信息窗口开关
        opts : {              						//信息窗口样式
          width : 100,          					//宽度
          height : 50,          					//高度
          title : '',         						//标题
        },
        config : {              					//具体设置
          info : '', //内容
          titleSize : 16,       					//标题字体大小
          infoSize : 12,        					//内容字体大小
        },
      },
      traffic : {              					 	//交通状况
        Switch : false,          					//交通状况开关
      },
      route : {               						//交通线路
        Switch : true,          					//线路开关
        img : {               						//终点起点覆盖物
          Switch : false,       					//覆盖物开关
          src : "http://developer.baidu.com/map/jsdemo/img/location.gif",      //覆盖物图片不填则用默认的
          size : [32,32],         					//图片尺寸
        }, 
        list : {              						//坐车列表
          Switch : true,         					//是否打开
          id : 'traffic-bus',       			//交通详情显示的盒子 可传id或者dom对象
        },
      },
    }


export {baseHost,headerConfig,trafficConfig};