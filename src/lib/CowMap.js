var CowMap = (function(a,fn){
	return fn();
})(window,function(){
	//大地图构造函数
	function Map(){
		this.markArr = new Array();
	};
	//大地图原型函数
	Map.prototype = {
		//初始化大地图
		init : function(option){
			this.option = option;
			this.counter = 0;
			this.handlerSwitch = true; 
			this.map = new BMap.Map(this.fn.getId(this.option.id));
			this.getPoint(this.option.shopPoints,this.map,'shopPoints',function(){
				this.getPoint(this.option.userPoints,this.map,'userPoints',function(){this.handler(this.option)}.bind(this));
			}.bind(this))
		},
		//获取对应经度纬度
		getPoint : function(points,map,attr,cb){
			var This = this;
			if(typeof(points) === 'string'){
				this.requestPoints(points,map,attr,cb);
			}else{
				this[attr] = points;
				cb && cb();
			};
		},
		requestPoints : function(adress,map,attr,cb){
			var	area = this.option.area,
				This = this,
				myGeo = new BMap.Geocoder();      
				myGeo.getPoint(adress, function(point){     
					This[attr] = new BMap.Point(point.lng,point.lat);
				    cb&&cb();
				},area);
		},
		//根据option开关判断是否执行对应函数
		handler : function(op){
			this.create(this.shopPoints,this.userPoints,op);
			if(this.fn.Switch(op,'control')) this.control(op.control.list,op.zoom);
			if(this.fn.Switch(op,'route')) this.route(op.route);
			this.fn.btn.call(this,op.backPoints,op.backUserPoints);
			if(this.fn.Switch(op,'traffic')) this.traffic();
		},
		//创建地图并判断是否需要加坐标指针
		create : function(s,u,op){
			this.map.centerAndZoom(this.shopPoints,op.zoom);
			if(op.hasOwnProperty('module') && op.module) this.changeStyle(this.map,op.module);
			if(this.fn.Switch(op,'overlay')){
				var op = op.overlay;
				this.markArr.push(new Overlay().init(this.map,this.shopPoints,op,op.styleIndex[0]));
				if(this.userPoints) this.markArr.push(new Overlay().init(this.map,this.userPoints,op,op.styleIndex[1]));
			};
		},
		//控件执行
		control : function(op,zoom){	
			if(op){
				for (var key in op){
					var pos = op[key][1],
						opts = pos instanceof Array?{offset: new BMap.Size(pos[0],pos[1])}:void 0;
					op[key][0] && this.fn.control.call(this,key,opts);
				}
			}
			if(this.fn.Switch(this.option,'msg')) new Msg().init(this.map,this.option.msg); 
		},
		//改变模式
		changeStyle : function(map,module){
			map.setMapStyle({style:module});
		},
		//线路执行
		route : function(op,fn){
			new Route(op,this.map,this.shopPoints,this.userPoints);
		},
		//返回坐标执行
		backPoint : function(dom,bool){
			if(!dom) return;
			var point = bool?this.userPoints:this.shopPoints,
				This = this;
			dom.addEventListener('click',function(){
				This.map.panTo(point);
			});
		},
		//交通状况执行
		traffic : function(){
			var traffic = new BMap.TrafficLayer();        
			this.map.addTileLayer(traffic);         
		},
		//公用函数
		fn : {
			//获取id
			getId : function(id){
				return id?typeof(id) === 'string'?id:id.id:null;
			},
			//判断option开关
			Switch : function(op,key){
				return op.hasOwnProperty(key) && op[key].hasOwnProperty('Switch') && op[key].Switch === true;
			},
			//执行控件子类
			control : function(key,opts){
				this.map.addControl(new BMap[key](opts));
			},
			//返回坐标按钮dom搜索
			btn : function(){
				var name,dom;
				for(var i=0;i<2;i++){
					name = arguments[i];
					if(!name || typeof(name) != 'string') continue;
					dom = document.getElementById(name);
					this.backPoint(dom,i);
				}
			},
		}
	};

	//覆盖物构造函数
	function Overlay(){}

	//覆盖物原型
	Overlay.prototype = {
		//初始化
		init : function(map,point,op,index){
			return op.img?this.custom(map,point,op,index):this._default(map,point);
		},
		//默认样式
		_default : function(map,point){
			var marker = new BMap.Marker(point);        
			map.addOverlay(marker);
			return marker;                  
		},
		//自定义样式
		custom : function(map,point,op,index){
			var myIcon = new BMap.Icon(op.img,new BMap.Size(op.size[0],op.size[1]),{    
			    anchor: new BMap.Size(op.offset[0],op.offset[1]),   
			    imageOffset: new BMap.Size((1- index)*32,0)    
			}),    
				marker = new BMap.Marker(point, {icon: myIcon});    
			map.addOverlay(marker); 
			if(op.drug === true){ 
				marker.enableDragging();    
				op.drugFn.constructor === Function && marker.addEventListener("dragend",op.drugFn);
			}
			if(op.drug === false && op.clickFn.constructor === Function && op.click === true) marker.addEventListener('click',op.clickFn);
			return marker;
		}
	}

	//信息窗口构造函数
	function Msg(){}

	//信息窗口原型
	Msg.prototype = {
		//初始化
		init : function(map,op){
			var infoWindow = new BMap.InfoWindow(op.config.info||'',op.opts);  
			map.openInfoWindow(infoWindow, map.getCenter());
			if(!op.config || $.isEmptyObject(op.config)) return;
			$('head').append('<style>.BMap_bubble_title{font-size:'+ op.config.titleSize +'px}.BMap_bubble_content{font-size:'+ op.config.infoSize +'px;color:#666;padding-top:10px;}</style>');   
		},
	};

	//线路构造函数
	function Route(op,map,shop,user){
		this.handler(op,map,shop,user);
	};

	Route.prototype = {
		handler : function(op,map,shop,user){
			var bool = this.fn.Switch(op,'img'),
				size = bool?op.img.size:[0,0],
				length = op.img.src.length,
				data = this.fn.Switch(op,'list')?{map: map,panel:this.fn.getId(op.list.id)}:{map: map},
				transit = new BMap.TransitRoute(map, {renderOptions: data});
			transit.search(user,shop);
			if(bool && !length) return; 
			var myIcon = new BMap.Icon(op.img.src, new BMap.Size(size[0],size[1]));
			transit.setMarkersSetCallback(function(result){
					result[0].marker.setIcon(myIcon);
					result[1].marker.setIcon(myIcon);
			});	
		},
		fn : {
		
		}
	};

	Route.prototype.fn.Switch = Map.prototype.fn.Switch;
	Route.prototype.fn.getId = Map.prototype.fn.getId;
	return new Map();
});
export default CowMap;