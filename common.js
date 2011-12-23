
/* Custom Relevant Functions */

$(function(){

	//Adding numbers to the list
	$('.pluginList > li').each(function(i){
		$(this).prepend('<span>'+(i+=1)+'</span>');
	});
	
	//Grabbing the link & displays beside it
/* 	var linkValue;
	$('.pluginList > li').hover(function(){
		$('.pluginList > li').each(function(){
			var linkValue = $(this).find('a').attr('href');
			alert(linkValue);
		});
	}); */

});//document ready