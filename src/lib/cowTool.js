//老牛工具包
var cowTool = {
	//判断字符串
	typeString : function(string){
		return 'string' === typeof(string);
	},
	//判断是否为dom节点
	typeNode : function(dom){
		return dom.nodeType == 1 || dom instanceof $;
	},
	//判断是否有key
	hasKey : function(op,key){
		return op.hasOwnProperty(key);
	},
	//判断图片链接
	testImgSrc : function(src){
		var regPattern = /\.(png|jpg|bmp|gif)$/,
			regHttps = /^\/\//;
		src = regHttps.test(src)?"https:" + src:src;
		return regPattern.test(src) || src === ""?src:null;
	},
	//获取元素
	getObj : function(name){
		return this.typeString(name)?$(name):this.typeNode(name)?name:this.printError('must be dom or string');
	},
	//报错日志
	printError : function(string){
		throw new Error(string);
		return false;
	},
	//判断是否为颜色
	testColor : function(color){
		var rgb = /^rgba?\((\d{1,3}\,?){1,4}\)/,
			color = /^\#\w{3,6}$/;
		return reg.test(rgb) || reg.test(color);
	},
	//截取字符串s1-s2之间的字符
	getStringCut : function(string,s1,s2){
		return string.substring(string.indexOf(s1)+1,string.lastIndexOf(s2));
	},
	//关闭提示
	closeTip : function(){
		window.onbeforeunload = function() {   
		   return '欢迎下次再来';
		}  
	}
}

export default cowTool;