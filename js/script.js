/*global document*/

//set variable
$(function() {
    $('.plan-step').click(function () {
        $(".choose-status").hide('fast');
        $(this).siblings().toggle('fast');
        //Or Using $(".choose-status").fadeOut(500);
       // $(this).siblings().fadeToggle('fast');
        
    });
});


//variable for left side bar
var leftMenuButton  = document.getElementById("circlebutton"),
    leftNav         = document.querySelector(".left-nav");

//left side bar animation => change left value to open and close
leftMenuButton.addEventListener('click', function () {
    if(leftNav.style.left == "-46px"){
        leftNav.style.left ="-283px";
    } else {
        leftNav.style.left ="-46px";
    }
});


//start work area try10/12/2018
//select status
// variable for status select
//var demo = document.querySelector(".plan-step"),
//    statusBar = document.querySelector(".choose-status");


//demo.addEventListener('click', function() {


//    if(statusBar.style.display == "block") {
//        statusBar.style.display = "none";
//        demo.style.color = "#000";
//    } else {
//        statusBar.style.display = "block";
//        demo.style.color = "#aa2fa4";
//    }
//});
//end work area try10/12/2018


//statusBar = document.getElementsByClassName("choose-status");


//planStep.addEventListener('click', function(e){
////    if(statusBar.style.display=="block"){
////        statusBar.style.display = "none";
////    }else {
//        statusBar.style.display = "block";
//        
////    }
//});



//var demo =  document.getElementById("demo");
//var demo =  document.getElementsByClassName("plan-step");
//13/10/2018
//var statusBar = document.getElementsByClassName("choose-status");
//
//for (var i = 0 ; i<demo ; i++){
//    allSpan[i].addEventListener('click',function(){
//       statusBar[i] .style.display = "block";
//    });
//}




//demo.foreach(addEventListener('click', function() {
//    
//    
//    if(statusBar.style.display == "none") {
//        statusBar.style.display = "block";
//        demo.style.color = "#aa2fa4";
//    } else {
//        statusBar.style.display = "none";
//        
//    }
//}));




//start switch between adult and child
var genderBtn = document.querySelector(".gender-btn"),
    kidsImgIcon = document.querySelector(".kids-img-icon"),
    adultImgIcon = document.querySelector(".adults-img-icon"),
    teethAdult = document.querySelector(".inner-teeth-area"),
    teethChild = document.querySelector(".inner-teeth-area-kids");
/*ortho variable*/
var playBtn = document.querySelector(".play-btn"),
    orthoWind = document.querySelector(".ortho");

genderBtn.addEventListener('click', function() {
    if(teethAdult.style.display == "none") {
        teethAdult.style.display = "block";
        teethChild.style.display = "none";
        adultImgIcon.style.display = "none";
        kidsImgIcon.style.display = "block";
        orthoWind.style.display = "none";
    } else {
        teethAdult.style.display = "none";
        teethChild.style.display = "block";
        adultImgIcon.style.display = "block";
        kidsImgIcon.style.display = "none";
        orthoWind.style.display = "none";
    }
});

//START click on play to view ortho window and hide teeth area

playBtn.addEventListener('click', function() {
    orthoWind.style.display = "block";
    teethAdult.style.display = "none";
    teethChild.style.display = "none";
});
//END click on play to view ortho window and hide teeth area



