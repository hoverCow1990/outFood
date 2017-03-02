import fastclick from '../../plug-in/fastclick.js';
import weui from '../../plug-in/jquery-weui.min';
import swiper from '../../plug-in/swiper.min';
import ScrollNav from '../lib/topNav';

$(".swiper-container").swiper({
    loop: true,
    autoplay: 3000,
    paginationClickable: true
});

var scrollScreen = {
	init : function(){
		this.viewPort = $(window);
		this.topNav = new ScrollNav('#header',200);
		this.handler(this.topNav);
	},
	handler : function(nav){
		this.viewPort.on('scroll',function(){
			var scrollTop = $(this).scrollTop();
			if(scrollTop < 200){
				nav.handlerStyle(scrollTop);
			}
		})
	}
}

// var ItemView = Backbone.View.extend({
//   tagName: 'li'
// });

// var BodyView = Backbone.View.extend({
//   el: 'body'
// });

// var gogoView = Backbone.View.extend({
//   oo: $('.outFood-nav')
// });

// var item = new ItemView();
// var body = new BodyView();
// var gogo = new gogoView();

// console.log(item.el)
// console.log(body.el)
// console.log(gogo.oo)
// alert(item.el + ' ' + body.el);



// var AppRouter = Backbone.Router.extend({
// 		routes: {
// 			"search/:id": "getPost",
// 			"download/*path": "downloadFile",
// 			"*actions": "defaultRoute" //Backbone 会根据顺序匹配路由
// 		}
// 	});

// // 实例化 Router
// var app_router = new AppRouter;
// app_router.on('route:getPost', function (id) {
// 	console.log(2);
// 	history.replaceState(id,' ','http://localhost:3000/dist/views/regist.html')
// 	// history.pushState(id,' ','http://localhost:3000/dist/views/regist.html')
// 	//alert( "Get post number " + id );   
// });
// app_router.on('route:downloadFile', function (path) {
// 	// 注意，参数通过这里进行传递
// 	alert(path);   
// });
// app_router.on('route:defaultRoute', function (actions) {
// 	alert( actions ); 
// });
// // 打开 Backbone 的历史记录
// Backbone.history.start();


//history.pushState(2,' ','http://localhost:3000/dist/views/regist.html')
// setTimeout(function(){
// 	man1.set('name',"hello");
// },3000)

// $.ajax({
// 	url:'http://www.web-jackiee.com/templets/blog/demo/map/requestData/get.php',
// 	type:'post',
// 	dataType:'json',
// 	success : function(res){
// 		console.log(1);
// 		console.log(res);
// 	},
// 	error : function(err){
// 		console.log(2);
// 		console.log(err)
// 	}
// })

scrollScreen.init();