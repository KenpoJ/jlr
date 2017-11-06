$(document).ready(function() {

// MAIN NAVIGATION CURRENT HIGHLIGHTING
var curPage = $('body').attr('id');
switch(curPage) {
	case 'home':
		$('.navbar-collapse .nav-item').removeClass('active');
		$('.navbar-collapse .nav-item[id="menu-home"]').addClass('active');
		console.log('home');
	break;
	case 'program':
		$('.navbar-collapse .nav-item').removeClass('active');
		$('.navbar-collapse .nav-item[id="menu-program"]').addClass('active');
		console.log('program');
	break;
	case 'portfolio':
		$('.navbar-collapse .nav-item').removeClass('active');
		$('.navbar-collapse .nav-item[id="menu-portfolio"]').addClass('active');
		console.log('portfolio');
	break;
	case 'newsroom':
		$('.navbar-collapse .nav-item').removeClass('active');
		$('.navbar-collapse .nav-item[id="menu-newsroom"]').addClass('active');
		console.log('newsroom');
	break;
	case 'blog':
		$('.navbar-collapse .nav-item').removeClass('active');
		$('.navbar-collapse .nav-item[id="menu-blog"]').addClass('active');
		console.log('blog');
	break;
}

// GRID LAYOUT FOR HOMEPAGE GRID
var gridCont = $('.grid-container');
var time;

$(window).resize(function() {
	if($(window).width() < 769) {
		clearTimeout(time);
		time = setTimeout(setHeight, 10);
	}
})

function setHeight() {
	//console.log(gridCont.width());
	gridCont.height(gridCont.width());
}

setHeight();
// END GRID LAYOUT SCRIPT

var footerLogo = $('footer .logo');

if($(window).width() > 576) {
	footerLogo.removeClass('text-center');
	footerLogo.addClass('text-right');
} else {
	footerLogo.removeClass('text-right');
	footerLogo.addClass('text-center');
}

})