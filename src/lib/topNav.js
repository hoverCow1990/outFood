
function ScrollNav(name,maxTop){
	if(!this instanceof ScrollNav) return new ScrollNav(name);
	this.dom = $(name);
	this.maxTop = maxTop;
	this.initHight = parseInt(this.dom.css('height'));
}

ScrollNav.prototype = {
	constructor : 'ScrollNav',
	handlerStyle : function(scrollTop){
		var pop = Number((scrollTop/this.maxTop).toFixed(2)),
			bgColor = (pop * 0.9),
			height  = (1-pop)*30 + this.initHight;
		this.dom.css({
			'backgroundColor' : 'rgba(0,0,0,'+bgColor+')',
			'height' : height
		})
	}
}


export default ScrollNav;
