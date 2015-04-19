//base stuff
$("#app-nav").css("top",$(window).height() -50+ "px");
$("#whole-app").css("height",$(window).height()+"px");
$(window).resize(function(){
    $("#app-nav").css("top",$(window).height() -50+ "px");
    $("#whole-app").css("height",$(window).height()+"px");
})