requirejs.config({
	shim: {
		'jquery.lightbox': ['jquery']
	}
});
require(['jquery', 'jquery.lightbox'], function($){
	//导航栏
	var $nav = $('#nav'),
	$navIcon = $('.nav-icon', $nav),
	$navCloseIcon = $('.nav-close-icon', $nav),
	$navMenuBox = $('.nav-menu-box', $nav);
	var $navHome = $('.nav-home',$nav),
	$navAbout = $('.nav-about',$nav),
	$navService = $('.nav-service',$nav),
	$navPortfolio = $('.nav-portfolio',$nav),
	$navBlog = $('.nav-blog',$nav),
	$navContact = $('.nav-contact', $nav),
	
	$toTop = $('#totop'),
	$toSpan = $('.totop-span', $toTop);
	$toTop.on('click',function(){
		$('body').animate({scrollTop:0},700);
	});
	$navHome.on('click',function(){
		$('body').animate({scrollTop:0});
	});
	$navAbout.on('click',function(){
		$('body').animate({scrollTop: 900});
	});
	$navService.on('click',function(){
		$('body').animate({scrollTop: 1520});
	});
	$navPortfolio.on('click',function(){
		$('body').animate({scrollTop: 2300});
	});
	$navBlog.on('click',function(){
		$('body').animate({scrollTop: 2900});
	});
	$navContact.on('click',function(){
		$('body').animate({scrollTop: 4450});
	});
	$navIcon.on('click', function(){
		$navMenuBox.animate({top: 0});
	});
	$navCloseIcon.on('click', function(){
		$navMenuBox.animate({top: -192});
	});
	
	//PORTFOLIO
	// $('.mask').hover(function(){
	// 	$(this).animate({
	// 		opacity: 0.84
	// 	});
	// }, function(){
	// 	$(this).animate({
	// 		opacity: 0
	// 	});
	// });
	$('#portfolio li').hover(function(){
		// $img = $(this).children('img');
		$(this).children('img').stop().animate({
			width: 305,
			height: 193,
			marginLeft: -10,
			marginTop: -7

		});
		// $mask = $(this).children('.mask');
		$(this).children('.mask').stop().show().animate({
			opacity: 0.84
		});
	}, function(){
		$(this).children('img').stop().animate({
			width: 285,
			height: 180,
			marginLeft: 0,
			marginTop: 0
		});
		$(this).children('.mask').stop().animate({
			opacity: 0
		});
	});
	$('#portfolio li').lightbox();
	// function(){
	// 	$(this).find('.lightbox-overlay')animate({
	// 		opacity: 0.84
	// 	});
	// }
	
	
});