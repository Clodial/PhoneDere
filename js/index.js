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
    $("#whole-app").css("background-color","#ff9933");
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
    var check = $(".submit-text").val().toLowerCase();

    if(check == "happy"){
        $(".blush").show();
        if($("#deredere").hasClass("desu-active")){
            document.getElementById("top-header-reaction").innerHTML ="Well, I'm happy with Senpai, too!";
            //content
            $("#face-eye1").css("background","url(img/stuff/pissed.png)");
            $("#face-eye2").css("background","url(img/stuff/pissed.png)");
            $("#face-mouth").css("background","url(img/stuff/mouth0000.png)");
            
        }else if($("#dandere").hasClass("desu-active")){
            document.getElementById("top-header-reaction").innerHTML ="Oh... Uhm... I feel happy, too, Senpai.";
            //content
            $("#face-eye1").css("background","url(img/stuff/pissed.png)");
            $("#face-eye2").css("background","url(img/stuff/pissed.png)");
            $("#face-mouth").css("background","url(img/stuff/mouth0000.png)");
            
        }else if($("#kuudere").hasClass("desu-active")){
            document.getElementById("top-header-reaction").innerHTML ="Cool";
            //cool
            $(".blush").hide();
            $("#face-eye1").css("background","url(img/stuff/pissed.png)");
            $("#face-eye2").css("background","url(img/stuff/pissed.png)");
            $("#face-mouth").css("background","url(img/stuff/mouth0008.png)");
            
        }else if($("#tsundere").hasClass("desu-active")){
            document.getElementById("top-header-reaction").innerHTML ="Wipe that grin off your face, Baka!";
            //tsun tsun
            $("#face-eye1").css("background","url(img/stuff/blink2.png)");
            $("#face-eye2").css("background","url(img/stuff/blink2.png)");
            $("#face-mouth").css("background","url(img/stuff/mouth0006.png)");
            
        }else if($("#yandere").hasClass("desu-active")){
            document.getElementById("top-header-reaction").innerHTML ="Heh, heh heh. As you should be.";
            //yanyan
            $("#face-eye1").css("background","url(img/stuff/yan.png)");
            $("#face-eye2").css("background","url(img/stuff/yan.png)");
            $("#face-mouth").css("background","url(img/stuff/mouth0000.png)");
            
        }
        $(".submit-text").val("");
    }else if(check == "sad"){
        $(".blush").show();
        if($("#deredere").hasClass("desu-active")){
            document.getElementById("top-header-reaction").innerHTML ="Senpai, don't worry! I'm always here for you!";
            //content
            $("#face-eye1").css("background","url(img/stuff/pissed.png)");
            $("#face-eye2").css("background","url(img/stuff/pissed.png)");
            $("#face-mouth").css("background","url(img/stuff/mouth0000.png)");
            
        }else if($("#dandere").hasClass("desu-active")){    
            document.getElementById("top-header-reaction").innerHTML ="S-Senpai. If you need a shoulder. I'm here for you.";
            //content
            $("#face-eye1").css("background","url(img/stuff/pissed.png)");
            $("#face-eye2").css("background","url(img/stuff/pissed.png)");
            $("#face-mouth").css("background","url(img/stuff/mouth0000.png)");
           
        }else if($("#kuudere").hasClass("desu-active")){
            document.getElementById("top-header-reaction").innerHTML ="Meh.";
            //indifferent
            $(".blush").hide();
            $("#face-eye1").css("background","url(img/stuff/pissed.png)");
            $("#face-eye2").css("background","url(img/stuff/pissed.png)");
            $("#face-mouth").css("background","url(img/stuff/mouth0007.png)");
            
        }else if($("#tsundere").hasClass("desu-active")){
            document.getElementById("top-header-reaction").innerHTML ="Good for you?";
            //indifferent
            $(".blush").hide();
            $("#face-eye1").css("background","url(img/stuff/pissed.png)");
            $("#face-eye2").css("background","url(img/stuff/pissed.png)");
            $("#face-mouth").css("background","url(img/stuff/mouth0007.png)");
            
        }else if($("#yandere").hasClass("desu-active")){
            document.getElementById("top-header-reaction").innerHTML ="Oh, Senpai! Keep making that sexy face!";
            //lovey nosebleed
            $("#face-eye1").css("background","url(img/stuff/obsessed.png)");
            $("#face-eye2").css("background","url(img/stuff/obsessed.png)");
            $("#face-mouth").css("background","url(img/stuff/mouth0003.png)");
           
        }
        $(".submit-text").val("");
    }else if(check == "angry"){
        $(".blush").show();
        if($("#deredere").hasClass("desu-active")){
            document.getElementById("top-header-reaction").innerHTML ="Senpai, were my bentos that bad?";
            //sad
            $("#face-eye1").css("background","url(img/stuff/sad.png)");
            $("#face-eye2").css("background","url(img/stuff/sad.png)");
            $("#face-mouth").css("background","url(img/stuff/mouth0001.png)");
            
        }else if($("#dandere").hasClass("desu-active")){
            document.getElementById("top-header-reaction").innerHTML ="S-Senpai! Uhm, I didn't mean to... I'm sorry";
            //scared
            $(".blush").hide();
            $("#face-eye1").css("background","url(img/stuff/yan.png)");
            $("#face-eye2").css("background","url(img/stuff/yan.png)");
            $("#face-mouth").css("background","url(img/stuff/mouth0004.png)");
            
        }else if($("#kuudere").hasClass("desu-active")){
            document.getElementById("top-header-reaction").innerHTML ="Pft. If I had arms, I'd smack you.";
            //annoyed
            $(".blush").hide();
            $("#face-eye1").css("background","url(img/stuff/blink.png)");
            $("#face-eye2").css("background","url(img/stuff/blink.png)");
            $("#face-mouth").css("background","url(img/stuff/mouth0007.png)");
            
        }else if($("#tsundere").hasClass("desu-active")){
            document.getElementById("top-header-reaction").innerHTML ="Well, I'm mad at you, too! Baka.";
            //mad
            $(".blush").hide();
            $("#face-eye1").css("background","url(img/stuff/ang.png)");
            $("#face-eye2").css("background","url(img/stuff/ang.png)");
            $("#face-mouth").css("background","url(img/stuff/mouth0001.png)");
            
        }else if($("#yandere").hasClass("desu-active")){    
            document.getElementById("top-header-reaction").innerHTML ="Oh, Senpai! Playing hard to get!";
            //starstruck
            $("#face-eye1").css("background","url(img/stuff/obsessed.png)");
            $("#face-eye2").css("background","url(img/stuff/obsessed.png)");
            $("#face-mouth").css("background","url(img/stuff/mouth0003.png)");
            
        }
        $(".submit-text").val("");
    }else if(check == "weird"){
        $(".blush").show();
        if($("#deredere").hasClass("desu-active")){
            document.getElementById("top-header-reaction").innerHTML ="Senpai? Stop that! That's weird.";
            //upset
            $("#face-eye1").css("background","url(img/stuff/pissed.png)");
            $("#face-eye2").css("background","url(img/stuff/pissed.png)");
            $("#face-mouth").css("background","url(img/stuff/mouth0000.png)");
            
        }else if($("#dandere").hasClass("desu-active")){
            document.getElementById("top-header-reaction").innerHTML ="Huh?";
            //content
            $("#face-eye1").css("background","url(img/stuff/pissed.png)");
            $("#face-eye2").css("background","url(img/stuff/pissed.png)");
            $("#face-mouth").css("background","url(img/stuff/mouth0004.png)");
            
        }else if($("#kuudere").hasClass("desu-active")){    
            document.getElementById("top-header-reaction").innerHTML ="Can you please make some sense?";
            //content
            $(".blush").hide();
            $("#face-eye1").css("background","url(img/stuff/pissed.png)");
            $("#face-eye2").css("background","url(img/stuff/pissed.png)");
            $("#face-mouth").css("background","url(img/stuff/mouth0007.png)");
            
        }else if($("#tsundere").hasClass("desu-active")){   
            document.getElementById("top-header-reaction").innerHTML ="Baka! Make some sense!";
            //Tsuntsun
            $("#face-eye1").css("background","url(img/stuff/blink2.png)");
            $("#face-eye2").css("background","url(img/stuff/blink2.png)");
            $("#face-mouth").css("background","url(img/stuff/mouth0006.png)");
            
        }else if($("#yandere").hasClass("desu-active")){
            document.getElementById("top-header-reaction").innerHTML ="Oh, Senpai. Only you would feel that!";
            //cool
            $(".blush").hide();
            $("#face-eye1").css("background","url(img/stuff/yan.png)");
            $("#face-eye2").css("background","url(img/stuff/yan.png)");
            $("#face-mouth").css("background","url(img/stuff/mouth0008.png)");
            
        }
        $(".submit-text").val("");
    }else if(check == "love"){
        $(".blush").show();
        if($("#deredere").hasClass("desu-active")){
            document.getElementById("top-header-reaction").innerHTML ="Oh, Senpai! You noticed me!";
            //excited
            $("#face-eye1").css("background","url(img/stuff/blink2.png)");
            $("#face-eye2").css("background","url(img/stuff/blink2.png)");
            $("#face-mouth").css("background","url(img/stuff/mouth0002.png)");
            
        }else if($("#dandere").hasClass("desu-active")){
            document.getElementById("top-header-reaction").innerHTML ="...!";
            //embarrassed
            $("#face-eye1").css("background","url(img/stuff/pissed.png)");
            $("#face-eye2").css("background","url(img/stuff/pissed.png)");
            $("#face-mouth").css("background","url(img/stuff/mouth0004.png)");
            
        }else if($("#kuudere").hasClass("desu-active")){
            document.getElementById("top-header-reaction").innerHTML ="Of course I would make you feel that way.";
            //cool
            $(".blush").hide();
            $("#face-eye1").css("background","url(img/stuff/pissed.png)");
            $("#face-eye2").css("background","url(img/stuff/pissed.png)");
            $("#face-mouth").css("background","url(img/stuff/mouth0008.png)");
        }else if($("#tsundere").hasClass("desu-active")){
            document.getElementById("top-header-reaction").innerHTML ="B-Baka! Don't say such things! And... Thank you.";
            //embarrassed
            $("#face-eye1").css("background","url(img/stuff/sad.png)");
            $("#face-eye2").css("background","url(img/stuff/sad.png)");
            $("#face-mouth").css("background","url(img/stuff/mouth0006.png)");
        }else if($("#yandere").hasClass("desu-active")){
            document.getElementById("top-header-reaction").innerHTML ="And, of course I love you! S~e~n~p~a~i!";
            //yanyan
            $(".blush").hide();
            $("#face-eye1").css("background","url(img/stuff/yan.png)");
            $("#face-eye2").css("background","url(img/stuff/yan.png)");
            $("#face-mouth").css("background","url(img/stuff/mouth0000.png)");
        }
        
        $(".submit-text").val("");
    }else if(check == "sexy"){
        $(".blush").show();
        if($("#deredere").hasClass("desu-active")){
            document.getElementById("top-header-reaction").innerHTML ="Senpai, that's going a little too far.";
            //mad
            $(".blush").hide();
            $("#face-eye1").css("background","url(img/stuff/ang.png)");
            $("#face-eye2").css("background","url(img/stuff/ang.png)");
            $("#face-mouth").css("background","url(img/stuff/mouth0001.png)");
            
        }else if($("#dandere").hasClass("desu-active")){    
            document.getElementById("top-header-reaction").innerHTML ="S-Senpai! I-I...";
            //scared
            $("#face-eye1").css("background","url(img/stuff/yan.png)");
            $("#face-eye2").css("background","url(img/stuff/yan.png)");
            $("#face-mouth").css("background","url(img/stuff/mouth0004.png)");
            
            
        }else if($("#kuudere").hasClass("desu-active")){
            document.getElementById("top-header-reaction").innerHTML ="Take a number.";
            //cool
            $(".blush").hide();
            $("#face-eye1").css("background","url(img/stuff/pissed.png)");
            $("#face-eye2").css("background","url(img/stuff/pissed.png)");
            $("#face-mouth").css("background","url(img/stuff/mouth0008.png)");
            
        }else if($("#tsundere").hasClass("desu-active")){   
            document.getElementById("top-header-reaction").innerHTML ="W-Wah? Senpai, you Baka! Idiot! Get away from me!";
            //scared
            $("#face-eye1").css("background","url(img/stuff/blink.png)");
            $("#face-eye2").css("background","url(img/stuff/blink.png)");
            $("#face-mouth").css("background","url(img/stuff/mouth0006.png)");
            
        }else if($("#yandere").hasClass("desu-active")){
            document.getElementById("top-header-reaction").innerHTML ="Oh the things I'd love to do to Senpai, right now!";
            //yanyan
            $(".blush").hide();
            $("#face-eye1").css("background","url(img/stuff/yan.png)");
            $("#face-eye2").css("background","url(img/stuff/yan.png)");
            $("#face-mouth").css("background","url(img/stuff/mouth0000.png)");
            
        }
        $(".submit-text").val("");
    }else{
        //if the user doesn't submit good info
        if($("#deredere").hasClass("desu-active")){
            $(".blush").show();
            document.getElementById("top-header-reaction").innerHTML ="Uhm, Senpai, I couldn't quite get you.";
            //content
            $("#face-eye1").css("background","url(img/stuff/pissed.png)");
            $("#face-eye2").css("background","url(img/stuff/pissed.png)");
            $("#face-mouth").css("background","url(img/stuff/mouth0000.png)");
            
        }else if($("#dandere").hasClass("desu-active")){
            document.getElementById("top-header-reaction").innerHTML ="Senpai? I'm confused.";
            //scared
            $(".blush").hide();
            $("#face-eye1").css("background","url(img/stuff/pissed.png)");
            $("#face-eye2").css("background","url(img/stuff/pissed.png)");
            $("#face-mouth").css("background","url(img/stuff/mouth0000.png)");
            
        }else if($("#kuudere").hasClass("desu-active")){
            document.getElementById("top-header-reaction").innerHTML ="Repeat.";
            //indifferent
            $(".blush").hide();
            $("#face-eye1").css("background","url(img/stuff/pissed.png)");
            $("#face-eye2").css("background","url(img/stuff/pissed.png)");
            $("#face-mouth").css("background","url(img/stuff/mouth0007.png)");
            
        }else if($("#tsundere").hasClass("desu-active")){
            document.getElementById("top-header-reaction").innerHTML ="Baka! You don't make sense!";
            //tsuntsun
            $("#face-eye1").css("background","url(img/stuff/pissed.png)");
            $("#face-eye2").css("background","url(img/stuff/pissed.png)");
            $("#face-mouth").css("background","url(img/stuff/mouth0000.png)");
            
        }else if($("#yandere").hasClass("desu-active")){
            document.getElementById("top-header-reaction").innerHTML ="Senpai? Could you please repeat that?";
            //smile
            $("#face-eye1").css("background","url(img/stuff/yan.png)");
            $("#face-eye2").css("background","url(img/stuff/yan.png)");
            $("#face-mouth").css("background","url(img/stuff/mouth0002.png)");
            
        }
        $(".submit-text").val("");
    }
    $("#face-eye1").css("background-size","96px 96px");
    $("#face-eye2").css("background-size","96px 96px");
    $("#face-mouth").css("background-size","192px 96px");
});