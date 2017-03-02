var gulp = require('gulp'),
    clean = require('gulp-clean'),
    less = require('gulp-less'),
    cssmin = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    fileinclude = require('gulp-file-include'),
    htmlmin = require('gulp-htmlmin'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    os = require('os'),
    connect = require('gulp-connect'),
    gulpopen = require('gulp-open'),
    webpack = require('webpack'),
    webpackConfig = require('./webpack.config.js'),
    gulpwebpack = require('gulp-webpack'),
    browserSync = require('browser-sync').create();

//各各文件路径 
var {INC_URL,SRC_BASE,SRC_ALL,SRC_HTML,SRC_INC,SRC_LCSS,SRC_JS,SRC_IMG,DEV_BASE,DEV_HTML,DEV_LCSS,DEV_JS,DEV_IMG,BLD_BASE,BLD_HTML,BLD_LCSS,BLD_JS,BLD_IMG,MIX_CSSBOOL,MIX_CSSName,MIX_CSSPATH,MIX_JS,MIX_JSName,MIX_JSSPATH,WATCH_FILE} = require('./paths.js').path;
//服务器设置
var HOST = {
    path: './',
    port: 3000,
    view : "/" + DEV_BASE + "/views/",
    index: 'index.html'
}
//服务器浏览器配置
var BROWSER = os.platform() === 'linux' ? 'google-chrome' : (
    os.platform() === 'darwin' ? 'google chrome' : (
    os.platform() === 'win32' ? 'chrome' : 'chrome'));

/*
 * HTML处理部分
 *
 */
//开发模式
gulp.task('handlerDevHtml', function() {
    gulp.src(SRC_HTML)
        .pipe(fileinclude({
            prefix: '@@',
            basepath: INC_URL
        }))
        .pipe(gulp.dest(DEV_HTML))
        .on("end",function(){
           gulp.src(DEV_HTML).pipe(browserSync.reload({stream: true})); 
        })
})

//生产模式
gulp.task('handlerBldHtml', function() {
    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
    };
    gulp.src(SRC_HTML)
        .pipe(fileinclude({
            prefix: '@@',
            basepath: INC_URL
        }))
        .pipe(htmlmin(options))
        .pipe(gulp.dest(BLD_HTML))
        .on("end",function(){
           gulp.src(DEV_HTML); 
        })
})

/*
 * css处理部分
 *
 */

//concatCss函数
var concatCss = function(){
                gulp.src(MIX_CSSPATH)
                 .pipe(concat(MIX_CSSName))//合并后的文件名
                 .pipe(gulp.dest(BLD_LCSS))
            }
console.log(SRC_LCSS);
//开发模式
gulp.task('handlerDevCss', function () {
    gulp.src(SRC_LCSS)
        .pipe(less())
        .pipe(gulp.dest(DEV_LCSS))
        .on("end",function(){
            gulp.src(DEV_LCSS).pipe(browserSync.reload({stream: true})) 
        });
})

//生产模式
gulp.task('handlerBldCss', function () {
    gulp.src(SRC_LCSS) 
        .pipe(less())
        .pipe(cssmin())     //.pipe(cssmin({compatibility: 'ie7'}))兼容ie7
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'Android >= 4.0'],
            cascade: false, //是否美化属性值 默认：true 像这样：
            remove:true     //是否去掉不必要的前缀 默认：true 
        }))
        .pipe(gulp.dest(BLD_LCSS))
        .on("end",function(){
            MIX_CSSBOOL && concatCss();
            gulp.src(BLD_LCSS);
        });
})


/*
 * js处理部分
 *
 */
console.log(DEV_JS);
//开发模式
gulp.task('handlerDevJs', function() {
    gulp.src(SRC_JS)
        .pipe(gulpwebpack(webpackConfig,webpack))
        .pipe(gulp.dest(DEV_JS))
        .on("end",function(){
            gulp.src(DEV_JS).pipe(browserSync.reload({stream: true}));
        })
})

//生产模式
gulp.task('handlerBldJs', function() {
    gulp.src(SRC_JS)
        .pipe(gulpwebpack(webpackConfig,webpack))
        .pipe(uglify({
            mangle: true,               //类型：Boolean 默认：true 是否修改变量名
            compress: true,             //类型：Boolean 默认：true 是否完全压缩
            preserveComments: false     //'all'保留所有注释
        }))
        .pipe(gulp.dest(BLD_JS))
        .on("end",function(){
            gulp.src(DEV_JS);
        })
})

/*
 * 图片处理部分
 *
 */

//开发模式
gulp.task('copy:DevImages', function() {
    gulp.src(SRC_IMG)
        .pipe(gulp.dest(DEV_IMG))
})

//生产模式
gulp.task('copy:BldImages', function() {
    gulp.src(SRC_IMG)
        .pipe(gulp.dest(BLD_IMG))
})

//压缩js[未参与观察编译js内自带]
gulp.task('jsmin', function () {
    gulp.src(SRC_JS)
        .pipe(uglify({
            mangle: true,               //类型：Boolean 默认：true 是否修改变量名
            compress: true,             //类型：Boolean 默认：true 是否完全压缩
            preserveComments: false     //'all'保留所有注释
        }))
        .pipe(gulp.dest(DEV_JS));
})

//打开浏览器
gulp.task('open', function(done) {
    gulp.src('')
        .pipe(gulpopen({
            app: BROWSER,
            uri: "http://localhost:"+ HOST.port + HOST.view + HOST.index
        }))
})
// browserSync静态服务器
gulp.task("connect", function() {
    browserSync.init({
        server: {
            baseDir: "./",
        }
    });
})

/*
 * 特别处理事件
 * 
*/

//清除开发环境
gulp.task('cleanDev', function() {
    gulp.src([DEV_BASE])
        .pipe(clean());
})

//清除生产环境
gulp.task('cleanBld', function() {
    gulp.src([BLD_BASE])
        .pipe(clean());
})

gulp.task("cleanMixCss",function(){
    gulp.src(MIX_CSSPATH + MIX_CSSName)
        .pipe(clean());
})

//合并Css
gulp.task('concatCss', function (done) {
    gulp.src(["dist/css/**/*","!dist/css/style.min.css"])
        .pipe(concat("style.min.css"))//合并后的文件名
        .pipe(gulp.dest("dist/css"))
        .on("end",done);
})

//合并Js
gulp.task('concatJs',["connect"],function () {
    gulp.src(MIX_JS)
        .pipe(concat(MIX_JSNAME))       //合并后的文件名
        .pipe(gulp.dest(MIX_JSSPATH));
})

//观察HTML
gulp.task('watchHtml',["connect"],function () {
    gulp.watch(SRC_HTML,["handlerDevHtml"])
        .on('change',browserSync.reload);               
})

//观察CSS
gulp.task('watchCss',["connect"],function () {
    gulp.watch(SRC_LCSS,["handlerDevCss"])
    .on('change',browserSync.reload);
})

//观察JS
gulp.task('watchJs', function () {
    gulp.watch(SRC_JS,["handlerDevJs"])
    .on('change',browserSync.reload);      
})

//启动服务
gulp.task('start',["handlerDevHtml","handlerDevCss","copy:DevImages","handlerDevJs","connect"],function(){
    gulp.watch(SRC_HTML,["handlerDevHtml"]);
    gulp.watch(SRC_INC,["handlerDevHtml"]);
    gulp.watch(SRC_LCSS,["handlerDevCss"]);
    gulp.watch(SRC_JS,["handlerDevJs"]);
})

//最后编译
gulp.task('build',["handlerBldHtml","handlerBldCss","copy:BldImages","handlerBldJs"],function(){

})