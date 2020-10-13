var slideIndex = 0;
 showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  

  }
  slideIndex++;
  if (slideIndex > slides.length){slideIndex = 1}    

  slides[slideIndex-1].style.display = "block";  

  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

/*SlideShow manual*/

var Nimg=0;
function Slide(n){
 
 var slides = document.getElementsByClassName("mySlides");
 
  if (n >= slides.length) {Nimg = 0}    
  if (n < 0) {Nimg = slides.length}
  
	  for(var i=0; i<slides.length ;i++){
	
	  slides[i].style.display = "none";
	   
	  }
	   slides[Nimg].style.display = "block"; 
	   
	
  }
  
  function plusSlidesA(n) {
  Slide(Nimg += n);
 
}
  function plusSlidesB(n) {
  Slide(Nimg -= n);
 
}
