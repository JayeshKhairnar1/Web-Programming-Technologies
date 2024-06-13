$(document).ready(function(){
    console.log("Writing using JQuery");
    $("#btn1").click(function(){
        console.log("Click");
        //$("#container").hide();
        $("#container").fadeOut(2000,function(){
            alert("Gone....");
        });
    });

    $("#btn2").click(function(){
        console.log("Click");
        //$("#container").hide();
        $("#container").fadeIn();
    });

    $("#btn3").click(function(){
        $("#container").fadeToggle();
    });
    $("#btn4").click(function(){
        $("#container").fadeTo(500,0.5);
    });
    $("#btn5").click(function(){
        $("#container").slideUp(1000);
    });
    $("#btn6").click(function(){
        $("#container").slideDown(1000);
    });
    $("#btn7").click(function(){
        $("#container").slideToggle();
    });
    $("#btn8").click(function(){
        $("#container").animate({width:"200", height:"200",opacity:"0.5", legt:"250"},200, 
            function(){
                $("#container").animate({
                    borderRadius:"20px",
                    left:"0", 
                    height:"100", 
                    width:"100"});
            }
        );
    });



});







