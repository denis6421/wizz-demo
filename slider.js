var images = [
'images/slider/slide1.jpg',
'images/slider/slide2.jpg',
'images/slider/slide3.jpg'
];
var imageHead = document.querySelector("main");
var i = 0;
 setInterval(function() {
      imageHead.style.backgroundImage = "url(" + images[i] + ")";
      i = i + 1;
      if (i == images.length) {
        i =  0;
      }
}, 5000);
