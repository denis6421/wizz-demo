

window.onload = function () {
$("form").load("origin_form.html");
}

$("form #origin_in").click(function(){
    $(".origin_container").css("display", "block");


});

$(".origin_select div span").click(function(){
$(" #origin_in").val($(this).text());
$("form .origin_input input:first-child").val($(this).text());
$(".origin_container").hide()
});

$(".destination_select div span").click(function(){
$("form .origin_input input:nth-child(2)").val($(this).text());
$("#destination_in").val($(this).text());
$(".origin_container").hide()
});

$("#origin_in").click(function(){
    $(".origin_container").css("display", "block");

  $(".origin_container").load("origin.html");


});

$("form .origin_input input:first-child").click(function(){
  $(".origin_container").css("display", "block");

  $(".origin_container").load("origin.html");


})

$("#destination_in").click(function(){
    $(".origin_container").css("display", "block");
  $(".origin_container").load("destination.html");

});

$("form .origin_input input:nth-child(2)").click(function(){
  $(".origin_container").css("display", "block");
    
  $(".origin_container").load("destination.html");


})



$(".origin_closing button").click(function(){
$(".origin_container").hide();
});

$(".destination_closing button").click(function(){
$(".origin_container").hide();
});



$(document).mouseup(function(e){
  var container = $(".origin_container");
  if (!container.is(e.target) && container.has(e.target).length === 0)
  {
    container.hide();
  }
});
