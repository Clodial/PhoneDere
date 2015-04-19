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
$(".submit-button").click(function(){

    if($(".submit-text").val() == "happy"){
        if($("#deredere").hasClass("desu-active")){
            document.getElementById("top-header-reaction").innerHTML ="Well, I'm happy with Senpai, too!";
        }else if($("#dandere").hasClass("desu-active")){
            document.getElementById("top-header-reaction").innerHTML ="Oh... Uhm... I feel happy, too, Senpai.";
        }else if($("#kuudere").hasClass("desu-active")){
            document.getElementById("top-header-reaction").innerHTML ="Cool";
        }else if($("#tsundere").hasClass("desu-active")){
            document.getElementById("top-header-reaction").innerHTML ="Wipe that grin off your face, Baka!";
        }else if($("#yandere").hasClass("desu-active")){
            document.getElementById("top-header-reaction").innerHTML ="Heh, heh heh. As you should be.";
        }
        $(".submit-text").val("");
    }else if($(".submit-text").val() == "sad"){
        if($("#deredere").hasClass("desu-active")){
            document.getElementById("top-header-reaction").innerHTML ="...";
        }else if($("#dandere").hasClass("desu-active")){    
            document.getElementById("top-header-reaction").innerHTML ="...";
        }else if($("#kuudere").hasClass("desu-active")){
            document.getElementById("top-header-reaction").innerHTML ="...";
        }else if($("#tsundere").hasClass("desu-active")){
            document.getElementById("top-header-reaction").innerHTML ="...";
        }else if($("#yandere").hasClass("desu-active")){
            document.getElementById("top-header-reaction").innerHTML ="...";
        }
        $(".submit-text").val("");
    }else if($(".submit-text").val() == "angry"){
        if($("#deredere").hasClass("desu-active")){
            document.getElementById("top-header-reaction").innerHTML ="...";
        }else if($("#dandere").hasClass("desu-active")){
            document.getElementById("top-header-reaction").innerHTML ="...";
        }else if($("#kuudere").hasClass("desu-active")){
            document.getElementById("top-header-reaction").innerHTML ="...";
        }else if($("#tsundere").hasClass("desu-active")){
            document.getElementById("top-header-reaction").innerHTML ="...";
        }else if($("#yandere").hasClass("desu-active")){    
            document.getElementById("top-header-reaction").innerHTML ="Oooh, Senpai! That only makes you more attractive!";
        }
        $(".submit-text").val("");
    }else if($(".submit-text").val() == "weird"){
        if($("#deredere").hasClass("desu-active")){
            document.getElementById("top-header-reaction").innerHTML ="Senpai? Stop that! That's weird.";
        }else if($("#dandere").hasClass("desu-active")){
            document.getElementById("top-header-reaction").innerHTML ="Huh?";
        }else if($("#kuudere").hasClass("desu-active")){    
            document.getElementById("top-header-reaction").innerHTML ="Can please make some sense?";
        }else if($("#tsundere").hasClass("desu-active")){   
            document.getElementById("top-header-reaction").innerHTML ="Baka! Make some sense!";
        }else if($("#yandere").hasClass("desu-active")){
            document.getElementById("top-header-reaction").innerHTML ="Oh, Senpai. Only you would feel that!";
        }
        $(".submit-text").val("");
    }else if($(".submit-text").val() == "love"){
        if($("#deredere").hasClass("desu-active")){
            document.getElementById("top-header-reaction").innerHTML ="Oh, Senpai! You noticed me!";
        }else if($("#dandere").hasClass("desu-active")){
            document.getElementById("top-header-reaction").innerHTML ="...!";
        }else if($("#kuudere").hasClass("desu-active")){
            document.getElementById("top-header-reaction").innerHTML ="Of course I would make you feel that way.";
        }else if($("#tsundere").hasClass("desu-active")){
            document.getElementById("top-header-reaction").innerHTML ="B-Baka! Don't say such things! And... Thank you.";
        }else if($("#yandere").hasClass("desu-active")){
            document.getElementById("top-header-reaction").innerHTML ="And, of course I love you! S~e~n~p~a~i!";
        }
        $(".submit-text").val("");
    }else if($(".submit-text").val() == "aroused"){
        if($("#deredere").hasClass("desu-active")){
            document.getElementById("top-header-reaction").innerHTML ="Senpai, that's going a little too far.";
        }else if($("#dandere").hasClass("desu-active")){    
            document.getElementById("top-header-reaction").innerHTML ="S-Senpai! I-I...";
        }else if($("#kuudere").hasClass("desu-active")){
            document.getElementById("top-header-reaction").innerHTML ="Heh.";
        }else if($("#tsundere").hasClass("desu-active")){   
            document.getElementById("top-header-reaction").innerHTML ="W-Wah? Senpai, you Baka! Idiot! Get away from me!";
        }else if($("#yandere").hasClass("desu-active")){
            document.getElementById("top-header-reaction").innerHTML ="Oh the things I'd love to do to Senpai, right now!";
        }
        $(".submit-text").val("");
    }else{
        //if the user doesn't submit good info
        if($("#deredere").hasClass("desu-active")){
            document.getElementById("top-header-reaction").innerHTML ="Uhm, Senpai, I couldn't quite get you.";
        }else if($("#dandere").hasClass("desu-active")){
            document.getElementById("top-header-reaction").innerHTML ="Senpai? I'm confused.";
        }else if($("#kuudere").hasClass("desu-active")){
            document.getElementById("top-header-reaction").innerHTML ="Repeat.";
        }else if($("#tsundere").hasClass("desu-active")){
            document.getElementById("top-header-reaction").innerHTML ="Baka! You don't make sense!";
        }else if($("#yandere").hasClass("desu-active")){
            document.getElementById("top-header-reaction").innerHTML ="Senpai? Could you please repeat that?";
        }
        $(".submit-text").val("");
    }

})