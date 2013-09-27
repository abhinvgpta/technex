//var qwer= skrollr.init();
var guest_lec_show=false;
var events_show=false;
var workshop_show=false;
var hosp_show=false;
var show_ca_s=true;
$(document).ready(function(){
var appname= navigator.appName;
	var z=$('.view_port').eq(0).height();
	z=parseInt(z/2);
	var x=$('#side_bar').height();

	$('#side_bar').css({'top':''+(z - x/2)+'px'});

	$root = $('body');
		$(".side_menu").click(function(e){
			e.preventDefault();
			var href=$.attr(this,"href");
			var pos = $(href).offset().top;
		if(appname == 'Microsoft Internet Explorer'){
			$(window).scrollTop(pos);
				}
			$root.animate({
				scrollTop:$(href).offset().top},500,function(){
			//	window.location.hash = href;
				$('.view_port').removeClass('active');
				$(href).addClass('active');
				display_view_port();
				});			
			return false;
	});	
	
	$(window).scroll(function(){
	//	alert();
		active_position();
		display_view_port();
	});
	active_position();
	
		/*var $root=$("body");
		$(".sideBar a").click(function(){
			var href=$.attr(this,"href");
			$root.animate({
				scrollTop:$(href).offset().top-50},1000);
				//alert($(href).offset().top);				
			return false;
	});	*/
	
	
	$('#guest_pics img').click(function(e){
		e.preventDefault();
		var a=false;
		var link = $(this).attr('href');
	//	alert(link);
	//	var l ='.active .info:not('+link+')';
		$(link).siblings().fadeOut('fast',function(){
		$(this).animate({'left':'0px'},'fast',function(){
		$(link).fadeIn('fast');
		});});
	/*	$(link).siblings().fadeOut({duration:"fast",complete:function(){
			$(link).fadeIn("slow");
		}});*/

		return false;
	});
	
	$('#ca_list h2').click(function (){
		if(show_ca_s == true){
		$('#ca_list').animate({'height':'480px','bottom':'10px'},400);
		$('#ca_intro').fadeOut();
		$('#ca_lis').fadeIn();
		$('#ca_list h2 img').attr('src','more_no.png');
		show_ca_s = false;
		}else{
		$('#ca_list img');
		$('#ca_lis').fadeOut();
		$('#ca_list').animate({'height':'50px','bottom':'110px'},400,function(){
		$('#ca_intro').fadeIn();
		$('#ca_list h2 img').attr('src','more.png');
	});
	
	show_ca_s=true;
	}
	
});
	

});
function active_position(){
	var tot=$('.view_port').length;
	 for(var i = 0;i<=tot;i++){	
	f=$(window).scrollTop();
	g = $('.view_port').eq(i).offset().top;
			if(f < g+150 && f > g - 150){
						$('.side_menu').removeClass('active');
						$('.side_menu').eq(i).addClass('active');;
					/*	$('.side_menu').css({'background':'rgba(0,0,0,0)'});
						$('.side_menu').eq(i).css({'background':'rgba(0,0,0,.2)'});
						if($(this).scrollTop() == $('.view_port').eq(i).offset().top)
						window.location.hash = '#'+$('.view_port').eq(i).attr('id');
						*/
						if(i >0){
							$('#main_head').addClass('active');
						}else{
							$('#main_head').removeClass('active');
						}
						break;		
			}

		}
	};
	
function display_view_port(){var a=false;var b=false;var c=false;var d=false;
	/*-----------Events-----------*/
	$('.view_port.unactive .events_icons li').css({'-webkit-transform':'scale(0)','-webkit-transition':'0s'});
	$('.view_port.unactive .events_icons li').css({'-moz-transform':'scale(0)','-moz-transition':'0s'});

	/*-----------guest_lecture-----------*/
	$('.view_port.unactive #guest_pics #bubble').css({'height':'0px','width':'0px','top':'200px','left':'200px','opacity':'1'});
		$('.view_port.unactive #guest_pics img.pics').css({'-webkit-transform':'scale(0)','-moz-transform':'scale(0)','opacity':'0'});
		$('.view_port.unactive #guest_content').fadeOut();
		
	/*-----------workshops-----------*/
	$('.view_port.unactive #external').css({'left':'500px','opacity':'0','-webkit-transition':'0s','-moz-transition':'0s'});
	$('.view_port.unactive #internal').css({'left':'500px','opacity':'0','-webkit-transition':'0s','-moz-transition':'0s'});
	/*-------------hospitality--------*/
//	$('.view_port.unactive #hosp').css({'display':'none'});
	$('.view_port.unactive .txt').css({'height':'0px' ,'-webkit-transition':'0s ease-out','-moz-transition':'0s ease-out'});
	$('.view_port.unactive .txt').css({'height':'0px' ,'-moz-transition':'0s ease-out ','-moz-transition':'0s ease-out'});
		
	if($('.view_port.active').attr('id') == 'events'){
		b=true;
	}
	if($('.view_port.active').attr('id') == 'guest_lectures'){
		a=true;
	}
	if($('.view_port.active').attr('id') == 'hospitality'){
		d=true;
	}
	if($('.view_port.active').attr('id') == 'workshops'){
		c=true;
	}
	call();
	function call(){
		if(guest_lec_show != a){
				guest_lec_active();
				guest_lec_show = a;
		}
		if(events_show != b){
				events_active();
				events_show = b;
		}
		if(workshop_show != c){
				workshop_active();
				workshop_show = c;
		}
		if(hosp_show != d){
				hosp_active();
				hosp_show = d;
		}

		
	}
	
	
}
$(document).ready(function(){
	$(window).scroll(function(){
		k = $('.side_menu.active').attr('href');
		$('.view_port').removeClass('active');
		$(k).addClass('active');
		$('.view_port').addClass('unactive');
		$(k).removeClass('unactive');
		display_view_port();
	})
	guest_lecture_set();
//	pop();
	
})

function guest_lecture_set(){
	var elements=$('#guest_pics img.pics').length;
	var	centerX = $('#guest_pics').width()/2;
	var	centerY = $('#guest_pics').height()/2;
	var	img_Y = $('#guest_pics img').height()/2;
	var	mike_Y = $('#guest_pics img#mike').height()/2;
		$('#guest_pics img#mike').css({'left':''+centerX-mike_Y+'px','top':''+centerY-mike_Y+'px'});
		
	var	angle = 0;
	//	theta = 360/elements;
	var	theta = 120;
	var	radfac = 3.14/180;
	var	radius = 80;
	var x=0;
	var y=0;
		for(var i=0;i<elements;i++){
		x = centerX - radius*Math.cos(angle*radfac);
		y = centerY - radius*Math.sin(angle*radfac);
		$('#guest_pics img.pics').eq(i).css({'left':''+x-img_Y+'px'});
		$('#guest_pics img.pics').eq(i).css({'top':''+y-img_Y+'px'});
		angle += theta;
		if(i == 2){
			radius += 80;
			angle+=60;
			theta = 360/(elements - 3);
		}
		
		}
}
	
//	$(document).ready(function(){
	function guest_lec_active(){	
		$('#guest_pics #bubble').css({'height':'400px','width':'400px','top':'0px','left':'0px','opacity':'0','-webkit-transition':'1s linear'});
		$('#guest_pics #bubble').css({'height':'400px','width':'400px','top':'0px','left':'0px','opacity':'0','-moz-transition':'1s linear'});
		$('#guest_content').fadeIn();
		var update = setInterval(pop1,400);
		var qq=0
		function pop1(){
			if(qq==0){
			$('#guest_pics img.pics.layer1').css({'-webkit-transform':'scale(1)','opacity':'1','-webkit-transition':'.3s'});
			$('#guest_pics img.pics.layer1').css({'-moz-transform':'scale(1)','opacity':'1','transition':'.3s'});
			qq++;
			}else{
			$('#guest_pics img.pics').css({'-webkit-transform':'scale(1)','opacity':'1','-webkit-transition':'.3s'});
			$('#guest_pics img.pics').css({'-moz-transform':'scale(1)','opacity':'1','transition':'.3s'});
			clearInterval(update);
			}
		}
	}	
//	})
function events_active(){
	var q=$('.view_port .events_icons .icons_nav_stack li').length;
	var t=0;
	
	var update = setInterval(icons_pop,60);
//	$('.view_port.unactive .events_icons li').css({'-webkit-transform':'scale(0)'});
//	$('.view_port.unactive .events_icons li').css({'-moz-transform':'scale(0)'});

	function icons_pop(){

	$('.view_port.active .events_icons li').eq(t).css({'-webkit-transform':'scale(1)' ,'-webkit-transition':'.2s '});
	$('.view_port.active .events_icons li').eq(t).css({'-moz-transform':'scale(1)' ,'-moz-transition':'.2s '});
	t = t+1;
	if(t>=q+1){
	clearInterval(update);
	}
	
}
	
}


function workshop_active(){
//	$('.workshop_bubble').fadeIn();
//	$('#internal').animate({'left':'750px','opacity':'1'},1000);
	$('#external').css({'left':'250px','opacity':'1','-webkit-transition':'.5s','-moz-transition':'.5s'});
	$('#internal').css({'left':'750px','opacity':'1','-webkit-transition':'.5s','-moz-transition':'.5s'});
	
}
function hosp_active(){
	$('#hosp').fadeIn();
//	$('.text')eq().css({'width':'200px' ,'-webkit-transition':'2s '});
	var q=$('.view_port .txt').length;
	var t=0;
	
	var update = setInterval(text_pop,150);
//	$('.view_port.unactive .events_icons li').css({'-webkit-transform':'scale(0)'});
//	$('.view_port.unactive .events_icons li').css({'-moz-transform':'scale(0)'});

	function text_pop(){

	$('.view_port.active .txt').eq(t).css({'height':'25px' ,'-webkit-transition':'.3s ease-out'});
	$('.view_port.active .txt').eq(t).css({'height':'25px' ,'-moz-transition':'.3s ease-out '});
	t = t+1;
	if(t>=q+1){
	clearInterval(update);
	}
}
}



