

$(document).ready(function(){
	
/*	var $root=$("body");
		$(".sideBar a").click(function(){
			var href=$.attr(this,"href");
			$root.animate({
				scrollTop:$(href).offset().top-50},1000);
				//alert($(href).offset().top);				
			return false;
	});	*/
	$('.secNav a').click(function(e){
		e.preventDefault();
		var a=false;
		var link = $(this).attr('href');
	//	alert(link);
		var l ='.active .info:not('+link+')';
	/*	$(l).animate({fadeOut:400},1000,function(){
		$(link).fadeIn(2000);
		})*/
		$(l).fadeOut({duration:"fast",complete:function(){
			$(link).fadeIn("slow");
		}});
		return false;
	});
});


$(document).ready(function(){
	var a= false; 
		$(".sideInfo").mouseover(function(e) {
		a=true;
		show_secnav();
		
	});
	$(".secNav ul").mouseover(function(e) {
		a=true;
		show_secnav();
		
	});
		
		$(".info").mouseover(function(e) {
		a=false;
		show_secnav();
	});
	function show_secnav(){
	if(a==true){
	$(".secNav ul").animate({"left":"10px"},100);
	}
	else{
	$(".secNav ul").animate({"left":"-100px"},300);
	}
}
	
	
});

