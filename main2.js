$(".moving button").click(function(){
  $(".moving").css("display", "none");
})


$(document).ready(function(){
$(".flight_offers_images").load("offers.html");
$(".partner_offers").load("partner.html");
});

var adult_count = 1;
var child_count = 0;
var infant_count = 0;
$(".passangers_dec").click(function(){
  adult_count--;
  $(this).next("span:first-child").html(adult_count);
  if(adult_count <= 0){
    $(".passangers_input span:first-child").html(1);
  }
})
$(".passangers_inc").click(function(e){
  adult_count++;
  $(e.target "span").html(adult_count);

})
