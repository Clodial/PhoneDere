//base stuff
$("#app-nav").css("top",$(window).height() -50+ "px");
$("#whole-app").css("height",$(window).height()+"px");
$(window).resize(function(){
    $("#app-nav").css("top",$(window).height() -50+ "px");
    $("#whole-app").css("height",$(window).height()+"px");
});
$(window).scroll(function(){
    if($(window).scrollTop() != 0){
        $("#top-header").hide();
        $("#app-nav").hide();
    }
    else{
        $("#top-header").show();
        $("#app-nav").show();
    }
});
//Click stuff for dere modes
$("#dandere").click(function(){
    $(".desu-section").removeClass("desu-active");
    $("#dandere").addClass("desu-active");
    $("#whole-app").css("background-color","#cc3399");
    document.getElementById("senpaiLovesYou").innerHTML="Uhm, Senpai? Uhm... what do you...find... About... Me?";
});
$("#deredere").click(function(){
    $(".desu-section").removeClass("desu-active");
    $("#deredere").addClass("desu-active");
    $("#whole-app").css("background-color","#ff33ff");
    document.getElementById("senpaiLovesYou").innerHTML="Senpai, how do you feel around me?";
});
$("#kuudere").click(function(){
    $(".desu-section").removeClass("desu-active");
    $("#kuudere").addClass("desu-active");
    $("#whole-app").css("background-color","#3366cc");
    document.getElementById("senpaiLovesYou").innerHTML="Senpai. Your thoughts? Emotions, please.";
});
$("#tsundere").click(function(){
    $(".desu-section").removeClass("desu-active");
    $("#tsundere").addClass("desu-active");
    $("#whole-app").css("background-color","#ffff33");
    document.getElementById("senpaiLovesYou").innerHTML="Uhm, Senpai? How do you feel? About me? Not that I care.";
});
$("#yandere").click(function(){
    $(".desu-section").removeClass("desu-active");
    $("#yandere").addClass("desu-active");
    $("#whole-app").css("background-color","#ff3366");
    document.getElementById("senpaiLovesYou").innerHTML="Senpai! How is my love?";
});

//Crazy happy funtimes
$("#submit-button").click(function(){

    switch(document.getElementById("submit-text").innerHTML){
        case "happy":
        case "angry":
        case "sad":
        case "weird":
        case "lust":
        case "":
        default:
            document.getElementById("")
    }

})