/***
init
***/
$("#splashId").hide();

$(document).click(function(){
	if(!$("#splashId").is(":visible")){
		$("#splashId").fadeIn(1000);
	}
});
