(function (doc, win) {
	var docEle = doc.documentElement,
	resizeEvent = 'orientationchange' in window ? 'orientationchange' : 'resize';
	var recalCulate = function () {
		var width = docEle.clientWidth;
		docEle.style.fontSize = 100 * (width / 640) + 'px';
	};
	recalCulate();
	if (!doc.addEventListener) return;
		win.addEventListener(resizeEvent, recalCulate, false);
})(document, window); 
var mySwiper = new Swiper ('.swiper-container', {
		direction: 'horizontal',
		loop: true,
		autoplay:1000,
		pagination: '.swiper-pagination',
	})

	var more_select=document.getElementById("more-select");
	var login=document.getElementById("login");
	var inps=document.getElementById("inps");
	login.style.left=(more_select.offsetWidth-login.offsetWidth)/2+"px";
	login.style.top=(more_select.offsetHeight-login.offsetHeight)/2+"px";
	inps.onfocus=function () {
		inps.value="";
	}