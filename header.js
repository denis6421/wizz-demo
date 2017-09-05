$(".hover_btn").mouseover(function() {
$(event.target).next("#arrow").css("transform", "rotate(225deg)");
});

$(".hover_btn").mouseleave(function() {
$(event.target).next("#arrow").css("transform", "rotate(45deg)");
});


$(".mobile_nav div").click(function(){
  $(".mobile_menu").load("mobile-menu.html");
  $(".mobile_menu_wrapper").show();
  $(".mobile_menu").animate({width: 'show'});

  $("body").css("overflow", "hidden");
})

$(".mobile_menu_btn").click(function(){
  $(".mobile_menu").animate({width: 'hide'});
  $(".mobile_menu_wrapper").fadeOut();
  $("body").css("overflow", "auto");
})

$(".hidden_ul_mobile_menu div h4").click(function(){
  $(this).next("ul").slideToggle();
})
