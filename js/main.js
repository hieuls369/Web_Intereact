//Vanilla JavaScript
var myColor = "white";

var check = true;

if(check){
    console.log("working..still loading..");
}



//call the id and innerHTML to change the text
document.getElementById("slogan").innerHTML = "Welcome";

document.getElementById("title").innerHTML = "Maria Change";

//call the class name and [] is the position of the class (if there are more than one same class name)
document.getElementsByClassName("title")[0].innerHTML = "Maria Change2";

document.getElementsByClassName("title")[0].style.color = myColor;

document.getElementsByClassName("title")[0].style.fontSize = "50px";



//JQuery
//Just like short version of JavaScript

//$("#title").text("Maria JChange");
//$(".title").text("WELL");
//$(".title").css("font-size", "100px");

//$("<h3>Price: 3$</h3>").insertAfter($("div:text-white(1)"));

function colorChange(){

    myColor = "red";

    $(".header").css("color", "blue");
}

colorChange();

/*Interact with the web */

$(".script-fun > li").siblings().hide();

$(".py-2 a:eq(3)").click(function(){

    $(".script-fun > li").siblings().toggle();


    $(this).toggleClass("open");

    if($(this).hasClass("open")){
        
        
        $(".script-menu").animate({
            width: "25%"
        }, 500, function(){
            $(".py-2 a:eq(3)").text("Close");
            $(".script-fun > li").siblings().show();
        });
    }else{
       
        $(".script-menu").animate({
            width: "0%"
            
        }, 300, function(){
            $(".py-2 a:eq(3)").text("Open");
            $(".script-fun > li").siblings().hide();
        });

    }

    
});

$(".btnSave").click(function(){
    
})

