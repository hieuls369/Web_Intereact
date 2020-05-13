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


/*Interact with the web */

$(".script-fun > li").siblings().hide();

var pictureC = "";

$(".py-2 a:eq(3)").click(function(){

    $(".script-fun > li").siblings().toggle();


    $(this).toggleClass("open");

    for (let i = 0; i < background.length; i++) {
        $(".back"+i).css("background-image", "url("+ background[i] +")");
        $(".back"+i).click(function(){
            pictureC = background[i];
            $(this).toggleClass("addBorder");
            $(this).siblings().removeClass("addBorder");

        });
        
    }

    $(".back").css("background-image", "url("+ background[0] +")");

    if($(this).hasClass("open")){
        
        
        $(".script-menu").animate({
            width: "35%"
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

var background = [
    "image/1.jpg",
    "image/3.jpg",
    "image/4.jpg",
    "image/5.jpg",
];

$(".btnSave").click(function(){
    var titleC = $("#titleC").val();
    var bannerC = $("#bannerC").val();
    var bgC = $("#bgC").val();
    
    $("#title").text(titleC);
    $("#slogan").text(bannerC);
    $(".header").css("background", bgC);

    for (let i = 0; i < background.length; i++) {
        if($(".back"+i).hasClass("addBorder")){
            $("body").css("background-image", "url("+background[i]+")");
        }
        
    }
});

