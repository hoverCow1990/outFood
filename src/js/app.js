import Index from '../component/index/index';
import Header from '../component/header/header';
import ShopList from '../component/shopList/shopList';

//修改据juicer的内置变量符号(encode类型)
//原本为${}由于使用``避免与原语法冲突修改为%{}
juicer.set({    
    'tag::noneencodeOpen': '%{',  
    'tag::noneencodeClose': '}',   
});  



var routerShow = {
	windowHeight : $(document).height(),
	loadingSwitch : true,
	index : function(){
		var self = this,
			loadingHeight = this.windowHeight - 50;
		this.loadingSwitch = true;
		Index.render($('#app-Wrapper'));
		Header.render($('#header'));
		$(window).on('scroll',function(){
			var scrollTop = $(this).scrollTop();
			if(scrollTop < 200){
				Header.handlerStyle(scrollTop);
			}else if(scrollTop > loadingHeight && self.loadingSwitch){
				self.loadingSwitch = false;
				ShopList.handlerRequest(function(){
					self.loadingSwitch = true;
				}.bind(self));
			}
		})
	},
}


routerShow.index.call(routerShow);








// var L1 = Backbone.View.extend({  
// 	tagName : 'div',  
// 	className : 'listview',  
// 	id : 'app',  
// 	attributes : {  
// 	    title : '列表',  
// 	    style : 'color:#333'  
// 	},  
// 	render : function() {  
// 	    this.el.innerHTML = '<div>11111<button class="a">2</button></div>';
// 	    document.body.innerHTML='';
// 	    document.body.appendChild(this.el);  
// 	}  
// });  
// var l1 = new L1(); 


// var L2 = Backbone.View.extend({  
// 	tagName : 'div',  
// 	className : 'listview',  
// 	id : 'app',  
// 	attributes : {  
// 	    title : '列表',  
// 	    style : 'color:red'  
// 	},
// 	events: {
// 	    "click .b": "open",
// 	    "mouseenter .gogo" : 'momo',
// 	},
// 	open:function(){
// 		console.log(222);
// 	},
// 	momo:function(){
// 		console.log(5555);
// 	}, 
// 	render : function() {  
// 	    this.el.innerHTML = '<div>2222<button class="b">1</button><span class="gogo">hoevr</span></div>';  
// 	    document.body.innerHTML='';
// 	    document.body.appendChild(this.el);  
// 	}  
// });  
// var l2 = new L2();  
// l1.render();

// $('.a').on('click',function(){
// 	l2.render();
// })

// function open(){
// 	alert(2);
// }




// var json = {  
//     links: [  
//         {href: 'http://juicer.name', alt: 'Juicer'},  
//         {href: 'http://benben.cc', alt: 'Benben'},  
//         {href: 'http://ued.taobao.com', alt: 'Taobao UED'}  
//     ]  
// };  
  
// var tpl = [  
//     '{@each links as item}',  
//         '$${item|links_build} <br />', 
//         '$${item|links_div}', 
//     '{@/each}'  
// ].join('');  
  
// var links = function(data) {  
//     return '<a href="' + data.href + '" alt="' + data.alt + '" />';  
// };  
  
// function divs(data){
// 	return '<div>'+data.href+'</div>';
// }

// juicer.register('links_build', links); //注册自定义函数  
// juicer.register('links_div', divs); //注册自定义函数   
// $('body').append(juicer(tpl, json));

// console.log(juicer(tpl, json))





// var json = {  
//     value: '<strong>juicer</strong>'  
// };  
  
// var escape_tpl='${value}';  
// var unescape_tpl='<div>$${value}<button >3333</button></div>';  
  
// console.log(juicer(escape_tpl, json)); //输出 '<strong>juicer</strong>'  
// $('body').append(juicer(unescape_tpl, json)); //输出 '<strong>juicer</strong>'  


// var tpl = 'Hi, {@include "#subTpl", subData}, End.';  
  
// var a = juicer(tpl, {  
//     subData: {  
//         name: 'juicer'  
//     }  
// });  
  
// console.log(a);

//输出 Hi, I'm sub content, juicer, End.  
//或者通过数据引入子模板，下述代码也将会有相同的渲染结果：  
  
// var tpl = 'Hi, {@include subTpl, subData}, End.';  
  
// var n = juicer(tpl, {  
//     subTpl: "I'm sub content, ${name}",  
//     subData: {  
//         name: 'juicer'  
//     }  
// });  

// console.log(n);