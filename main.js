


$(".form_btn div").click(function(){
  $(".form_btn div").removeClass("active_form_btn");
  $(this).addClass("active_form_btn");
})
$(".form_btn div:first-child").click(function(){
  $("main").css("background-image", "url('images/slider/slide1.jpg')");
  $("form").load("origin_form.html");
})


$(".form_btn div:nth-child(2)").click(function(){

    $("main").css("background-image", "url('images/hotel.jpg')");
  $("form").load("hotel.html");
})
$(".form_btn div:nth-child(3)").click(function(){
  $("main").css("background-image", "url('images/hotels.jpg')");
  $("form").load("hotels.html");
})
$(".form_btn div:nth-child(4)").click(function(){
    $("main").css("background-image", "url('images/car.jpg')");
  $("form").load("cars.html");
})
