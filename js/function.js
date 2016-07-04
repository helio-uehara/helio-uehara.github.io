/*
        .---.
       /o   o\
    __(=  "  =)__
     //\'-=-'/\\
        )   (_
       /      `"=-._
      /       \     ``"=.
     /  /   \  \         `=..--.
 ___/  /     \  \___      _,  , `\
`-----' `""""`'-----``"""`  \  \_/
                             `-`
*/

// Escopo
(function($){

	$.initFunctions = function(){
		
		setTimeout(function(){ setSizeLayout() }, 100);


		
		$('nav').hover(function(){ openMenu() },function(){	closeMenu() });
		
		$('nav .menu li').bind('click', function(){	
			closeMenu(); 
		});

	}


	$(window).resize(function(){ setSizeLayout() });

	function setSizeLayout(){
		$('section').width($('body').width() - 20);
		$('section .content').width($('body').width() - 40);
	}

	function openMenu(){
		if(!$('nav').hasClass('open')){ 
			$('nav').stop().animate({ 
				left: '0px' 
			}, 500, 'easeOutQuart', function(){
				$('.logo').stop().animate({ 
					top: '0px' 
				}, 100 );
			}).addClass('open') 
		};
	}

	function closeMenu(){
		if($('nav').hasClass('open')){ 
			$('.logo').stop().animate({ 
				top: '-90px' 
			}, 100, 'easeOutQuart', function(){
				$('nav').stop().animate({ 
					left: '-180px'
				}, 500).removeClass('open');
			})
		};
	}

})($);







$(document).ready(function(){

	$.initFunctions();

		
	//$('.logo').hover(function(){ openMenu() });



	/*$('ul.menu > li > a').bind('click', function(){
		if($('nav').hasClass('open')){
			$('ul.menu li').removeClass('ativo');
			$(this).parent().addClass('ativo');

			if(navigator.userAgent.match(/Android/i)
			|| navigator.userAgent.match(/webOS/i)
			|| navigator.userAgent.match(/iPhone/i)
			|| navigator.userAgent.match(/iPad/i)
			|| navigator.userAgent.match(/iPod/i)
			|| navigator.userAgent.match(/BlackBerry/i)
			|| navigator.userAgent.match(/Windows Phone/i)){
				setTimeout(function(){ closeMenu() }, 500);
			}else{
				closeMenu();
			}
		}
	})*/

	//$('nav, .logo').bind('touchstart', function(){ if(!$('nav').hasClass('open')){ openMenu() }});

	//$('section, .content').bind('touchstart', function(){ closeMenu() });

	
});



