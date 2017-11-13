$(document).ready(function() {

//======================== MAIN NAVIGATION CURRENT HIGHLIGHTING
var curPage = $('body').attr('id');
switch(curPage) {
	case 'home':
		$('.navbar-collapse .nav-item').removeClass('current-menu-item');
		$('.navbar-collapse .nav-item[id="menu-home"]').addClass('current-menu-item');
		//console.log('home');
	break;
	case 'program':
		$('.navbar-collapse .nav-item').removeClass('current-menu-item');
		$('.navbar-collapse .nav-item[id="menu-program"]').addClass('current-menu-item');
		//console.log('program');
	break;
	case 'portfolio':
		$('.navbar-collapse .nav-item').removeClass('current-menu-item');
		$('.navbar-collapse .nav-item[id="menu-portfolio"]').addClass('current-menu-item');
		//console.log('portfolio');
	break;
	case 'newsroom':
		$('.navbar-collapse .nav-item').removeClass('current-menu-item');
		$('.navbar-collapse .nav-item[id="menu-newsroom"]').addClass('current-menu-item');
		//console.log('newsroom');
	break;
	case 'blog':
		$('.navbar-collapse .nav-item').removeClass('current-menu-item');
		$('.navbar-collapse .nav-item[id="menu-blog"]').addClass('current-menu-item');
		//console.log('blog');
	break;
}

//============================ FOOTER LOGO HANDLING FOR SMALLER SIZE SCREENS
var footerLogo = $('footer .logo');

if($(window).width() > 576) {
	footerLogo.removeClass('text-center');
	footerLogo.addClass('text-right');
} else {
	footerLogo.removeClass('text-right');
	footerLogo.addClass('text-center');
}

//============================= GRID LAYOUT FOR HOMEPAGE GRID
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

//============================== PORTFOLIO DISPLAY BEHAVIORS
var partner = $('.partner');

partner.addClass('minimized');

partner.mouseenter(function() {
	//$(this).toggleClass('hover');
	partner.removeClass('maximized');
	partner.find('.partner-desc-2').addClass('hidden');
	partner.find('.partner-desc').removeClass('hidden');

	$(this).addClass('maximized');
	$(this).find('.partner-desc-2').removeClass('hidden');
	$(this).find('.partner-desc').addClass('hidden');
});
partner.mouseleave(function() {
	partner.removeClass('maximized');
	partner.find('.partner-desc-2').addClass('hidden');
	partner.find('.partner-desc').removeClass('hidden');
});

/*partner.click(function(e) {
	e.preventDefault();
	partner.removeClass('maximized');
	partner.find('.partner-desc-2').addClass('hidden');
	partner.find('.partner-desc').removeClass('hidden');

	$(this).addClass('maximized');
	$(this).find('.partner-desc-2').removeClass('hidden');
	$(this).find('.partner-desc').addClass('hidden');
})*/


})







