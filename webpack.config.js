var webpack  =  require("webpack");
var fs 		 =  require('fs');
var path  	 =  require("path");
var srcDir   =  path.join(__dirname, './src');    
var SRC_JS   =  path.join(srcDir + "/js");
var distDir  =  path.join(__dirname, './dist');	 
var CommonsChunkPlugin  =  webpack.optimize.CommonsChunkPlugin;

//入口文件
var entryDir =  {}; //entry入口

//对入口进行注入值
fs.readdirSync(SRC_JS, 'utf8').forEach((name) => {  		//name为所有文件夹或者文件的名字文件的话带有后缀
    var name = name.match(/^[^\.]+/)[0];					//匹配文件的名字如index.html,则为index	
    //js文件入口
    entryDir[name] = path.join(SRC_JS,name + ".js");		//逐条生成entry入口,如entry.index = index.js
});

module.exports = {
  	entry : entryDir,
	output : {
		path: distDir, 					//输出路径,需传入绝对路径
	    filename: "[name].js",		//输出文件名,需要输出到JS文件夹下路径加在了filename中//publicPath: '/', //指定引用路径,在服务器模式下使用才会表现正常								
	},
	plugins:[
        new webpack.optimize.CommonsChunkPlugin({
			names: "common.js",   //['index','login']
		    filename: 'common.js',    
		    chunks: ['index','login','regist'],
		    minChunks: Infinity //3-5
		}),
		new webpack.ProvidePlugin({    //全局变量
		    $: "jquery",
		    jQuery: "jquery",
		    "window.jQuery": "jquery",
		    "Backbone" : "Backbone",
		    '_':'underscore'
	    })
    ]
}
