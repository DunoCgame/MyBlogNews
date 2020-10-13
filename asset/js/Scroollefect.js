window.onscroll = function() { 	Scroll_herader() 	}; 	
var Scroll=document.getElementById("HeaderScroll");
var NavbarSocial=document.getElementById("NavbarSocial");
var Logo=document.getElementById("logo");
var SubLogo=document.getElementById("screen");

function Scroll_herader() {
if(screen.width>700 ){

if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ) {
    // modificador
	Scroll.style.position="fixed";
	Scroll.style.top=2;
	Scroll.style.zIndex = "10";	
	SubLogo.classList.add("Sublogoweb");	
	Logo.style.display="none";
	NavbarSocial.style.display="none";
	
	
  }
  else 
	   if (document.body.scrollTop ==0 || document.documentElement.scrollTop ==0 ) {
   //eliminacion del modificador
		Scroll.style.position = 'relative'; 
		Scroll.style.top = 0;
		Scroll.style.zIndex = "1";
		SubLogo.classList.remove("Sublogoweb");	
		Logo.style.display="block";
		NavbarSocial.style.display="block";
		NavbarSocial.style.display="flex";

		// Scroll.style.height="50px";	
}
//CONTROL_PANTALLA


}



}


//paginacion

var Paginacion=document.getElementById("Contenedor-Paginacion");

if(Paginacion){
var btnpaginacion = Paginacion.getElementsByClassName("link");

for (var i = 0; i < btnpaginacion.length; i++) {
	
	  btnpaginacion[i].addEventListener("click", function() {
		
		  var currentpaginacion = document.getElementsByClassName("active-Paginacion");
		  currentpaginacion[0].className = currentpaginacion[0].className.replace(" active-Paginacion", "");
		  this.className += " active-Paginacion";
	 
	 });
}

}


/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("screen").style.width = "100%";
 
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("screen").style.width = "0%";
}