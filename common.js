
//Adding numbers to the list


$(function(){
	$('.pluginList > li').each(function(i){
		$(this).prepend('<span>'+(i+=1)+'</span>');
	});
});