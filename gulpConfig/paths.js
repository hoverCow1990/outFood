var path = require('path');
var fs = require('fs');

var appDirectory = fs.realpathSync(process.cwd());

function resolveApp(relativePath) {
  return path.resolve(appDirectory, relativePath);
}

var BASE_URL    =  "./";
var SRC_BASE    =  "src";
var DEV_BASE    =  "dist";
var BLD_BASE  	=  "build";

var INC_URL     =  "@file",                								//INC文件入口                                              
	SRC_ALL     =  SRC_BASE + "/**/*",                                  //开发环境-所有文件
	SRC_HTML    =  [SRC_BASE + "/views/**/*.html"],                     //开发环境-所有html文件
	SRC_INC		=  [SRC_BASE + "/templates/**/*.inc"],					//开发环境-所有inc文件
	SRC_LCSS    =  [SRC_BASE + "/css/**/*.{less,css}"],                 //开发环境-所有css或者less文件
	SRC_JS      =  [SRC_BASE + "/js/**/*"],                             //开发环境-所有js文件
	SRC_IMG     =  [SRC_BASE + "/images/**/*"],                         //开发环境-所有图片
	DEV_HTML    =  DEV_BASE + "/views",                                 //本地站点-存放html目录
	DEV_LCSS    =  DEV_BASE + "/css",                                   //本地站点-存放css文件目录
	DEV_JS      =  DEV_BASE + "/js",                                    //本地站点-存放js文件目录
	DEV_IMG     =  DEV_BASE + "/images",                               
	BLD_HTML  	=  BLD_BASE + "/views",
	BLD_LCSS    =  BLD_BASE + "/css",                                   
	BLD_JS      =  BLD_BASE + "/js",                                    
	BLD_IMG     =  BLD_BASE + "/images",                              
	MIX_CSSBOOL =  true,                                                //是否混合所有css文件
	MIX_CSSName =  "style.min.css",                                     //本地站点-混合css的文件名       (只有MIX_Bool = true 后有效)
	MIX_CSSPATH =  [SRC_LCSS+"/**/*","!"+SRC_LCSS+"/"+MIX_CSSName],     //需要混合css的路径匹配
	MIX_JS      =  SRC_JS + "/**/*",                                   	//本地站点-需要合并的js文件匹配  (只有手动gulp concatJs后有效)
	MIX_JSName  =  "index.js",                                          //本地站点-混合js的文件名        (只有手动gulp concatJs后有效)
	MIX_JSSPATH =  BLD_JS,                                            	//本地站点-混合css的存放路径     (只有手动gulp concatJs后有效)
	WATCH_FILE  =  [SRC_ALL];                                          	//需要热更新的检测的文件匹配
		

var Path = {INC_URL,SRC_BASE,SRC_ALL,SRC_HTML,SRC_LCSS,SRC_JS,SRC_IMG,SRC_INC,DEV_BASE,DEV_HTML,DEV_LCSS,DEV_JS,DEV_IMG,BLD_BASE,BLD_HTML,BLD_LCSS,BLD_JS,BLD_IMG,MIX_CSSBOOL,MIX_CSSName,MIX_CSSPATH,MIX_JS,MIX_JSName,MIX_JSSPATH,WATCH_FILE};

module.exports = {
  appPackageJson: resolveApp('package.json'),
  path : Path,
};
