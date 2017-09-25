$(".moving button").click(function(){
  $(".moving").css("display", "none");
})


$(document).ready(function(){
$(".flight_offers_images").load("ajax/offers.html");
$(".partner_offers").load("ajax/partner.html");
});

var adult_count = 1;


$(".passangers_input .passangers_dec").click(function(e){

if(adult_count <= 0){
    adult_count = 1;
  }else{
    $(e.target).next().html(adult_count);
  }
});
$(".passangers_input .passangers_inc").click(function(e){
  adult_count++;
  if(adult_count <= 0){
  adult_count = 0;
    }else{
  $(e.target).prev().prev().html(adult_count);
}
});
$(".passangers_input .passangers_dec").click(function(e){
  adult_count--;
if(adult_count <= 0){
    adult_count = 1;
  }else{
    $(e.target).next().html(adult_count);
  }
});

$(".child_input .passangers_dec").click(function(e){
  adult_count--;
if(adult_count => 1){
    adult_count = 1;
  }else{
    $(e.target).next().html(adult_count);
  }
});
$(".child_input .passangers_inc").click(function(e){

  adult_count++;
  if(adult_count <= 0){
  adult_count = 0;
    }else{
  $(e.target).prev().prev().html(adult_count);
}
});
