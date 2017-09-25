$(document).ready(function(){
  $(".header_menu").load("menu/plan.html");
  $(".header_menu").load("menu/info.html");
})



$("header nav button:nth-child(1)").click(function() {
$(event.target).next("#arrow").css("transform" ,"rotate(225deg)");
$(".header_menu").load("menu/plan.html");
$(".header_menu").slideDown();
});
$("header nav button:nth-child(2)").click(function() {
$(event.target).next("#arrow").css("transform" ,"rotate(225deg)");
$(".header_menu").load("menu/info.html");
$(".header_menu").slideDown();
});




$(".mobile_nav div").click(function(){
  $(".mobile_menu_wrapper").show();
  $(".mobile_menu").animate({width: 'show'});
  $("body").css("overflow", "hidden");
  $(".mobile_menu_wrapper").css("overflow", "scroll");
})

$(".mobile_menu_btn").click(function(){
  $(".mobile_menu").animate({width: 'hide'});
  $(".hidden_ul_mobile_menu div ul").slideUp();
  $(".mobile_menu_wrapper").fadeOut();
  $("body").css("overflow", "auto");
})


$(".hidden_ul_mobile_menu div h4").click(function(){
  $(this).next("ul").slideToggle();
})
