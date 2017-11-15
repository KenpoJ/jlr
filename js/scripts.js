$(document).ready(function() {

//======================== NES CARDS SLIDER FUNCTIONALITY 
var margin = 40;
var slideWindow = $('.slide-window');
var slideContainer = $('.slide-container');
var featuredSlideContainer = $('.featured .slide-container');
var pressSlideContainer = $('.press .slide-container');
var featuredSlideNum = $('.featured .slide-container .card').length;
var pressSlideNum = $('.press .slide-container .card').length;
var prev = $('.news-slide-nav .prev');
var next = $('.news-slide-nav .next');
var overflowWidth;
var currentPagination = 1;


// SET UP PRESENTATION
featuredSlideContainer.css({
	'width': $('.featured .slide-container .card').width() * featuredSlideNum + featuredSlideNum * margin
});
pressSlideContainer.css({
	'width': $('.press .slide-container .card').width() * pressSlideNum + pressSlideNum * margin
});
prev.addClass('disabled');
$('.pagination .page-link.prev').addClass('disabled');

if(featuredSlideContainer.width() <= slideWindow.width() + margin * 2) {
	$('.featured .news-slide-nav .next').addClass('disabled');
}
if(pressSlideContainer.width() <= slideWindow.width() + margin * 2) {
	$('.press .news-slide-nav .next').addClass('disabled');
}

// SET UP AND HANDLE PAGINATION PRESENTATION
$('.slide-window').each(function() {
	var section;
	var currentPagination = 1;
	var totPages = Math.ceil( $(this).children('.slide-container').width() / $(this).width() );

	if ($(this).hasClass('featured')) {
		section = 'featured';
		$('.pagination-container.pagination-featured').find('.page-total').html(totPages);
		$('.pagination-container.pagination-featured').find('.current-page').html(currentPagination);
	} else {
		section = 'press';
		$('.pagination-container.pagination-press').find('.page-total').html(totPages);
		$('.pagination-container.pagination-press').find('.current-page').html(currentPagination);
	}
})

// Top navigation for sliders
next.click(function(e) {
	e.preventDefault();
	if ($(this).parent().parent().is('.featured')) {
		var section = 'featured';
		animateSlidesForward($(this), section);
	} else {
		var section = 'press';
		animateSlidesForward($(this), section);
	}
})
prev.click(function(e) {
	e.preventDefault();
	if ($(this).parent().parent().is('.featured')) {
		var section = 'featured';
		animateSlidesBack($(this), section);
	} else {
		var section = 'press';
		animateSlidesBack($(this), section);
	}
})
// Bottom navigation for sliders
$('.pagination .page-link.next').click(function(e) {
	e.preventDefault();
	if ($(this).parent().parent().parent().prev().is('.featured')) {
		var section = 'featured';
		animateSlidesForward($(this), section);
	} else {
		var section = 'press';
		animateSlidesForward($(this), section);
	}
})
$('.pagination .page-link.prev').click(function(e) {
	e.preventDefault();
	//console.log($(this).parent().parent().parent().prev())
	if ($(this).parent().parent().parent().prev().is('.featured')) {
		var section = 'featured';
		animateSlidesBack($(this), section);
	} else {
		var section = 'press';
		animateSlidesBack($(this), section);
	}
})

// Animate slides NEXT
function animateSlidesForward(t, section) {
	console.log(currentPagination)
	var container = $('.slide-window.' + section).children('.slide-container');
	var left = container.position().left;
	var slideDist;

	t.siblings().removeClass('disabled');
	slideDist = container.width() - slideWindow.width();
	if (!overflowWidth && container.width() > slideWindow.width() * 2) {
		slideDist = slideWindow.width();
	} else if (!overflowWidth) {
		slideDist = container.width() - slideWindow.width();
	} else if (overflowWidth < slideWindow.width()) {
		slideDist = overflowWidth;
	} else if (overflowWidth - slideWindow.width() > slideWindow.width() || container.width() - slideWindow.width() > slideWindow.width()) {
		slideDist = slideWindow.width();
	}
	container.animate({
		'left': left - slideDist
	}, 500, function() {
		left = container.position().left;
		overflowWidth = container.width() - (Math.abs(left) + slideWindow.width());
		if (overflowWidth == 0) {
			t.addClass('disabled');
		}
		currentPagination += 1;
		$('.pagination-container.pagination-' + section).find('.current-page').html(currentPagination);
	})
}
// Animate slides PREVIOUS
function animateSlidesBack(t, section) {
	var container = $('.slide-window.' + section).children('.slide-container');
	var left = container.position().left;
	var slideDist;

	t.siblings().removeClass('disabled');
	if (Math.abs(left) < slideWindow.width()) {
		slideDist = Math.abs(left);
	} else if (container.width() - slideWindow.width() > left) {
		slideDist = slideWindow.width();
	}
	container.animate({
		'left': left + slideDist
	}, 500, function() {
		left = container.position().left;
		if(Math.abs(left) === 0) {
			t.addClass('disabled');
		}
		currentPagination -= 1;
		$('.pagination-container.pagination-' + section).find('.current-page').html(currentPagination);
	})
}


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







