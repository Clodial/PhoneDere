/***
init
***/
$("#splashId").hide();
$("#index-button").hide();
$(document).click(function(){
	if(!$("#splashId").is(":visible")){
		$("#splashId").fadeIn(500);
		$("#index-button").fadeIn(1500);
	}
});
