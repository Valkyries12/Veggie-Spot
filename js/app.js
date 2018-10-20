
//smooth scroll
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });






function stickyNav() {
  let nav = document.querySelector(".nav");
  let nav__a = document.querySelectorAll(".nav__ul a");
  let yPos = window.pageYOffset;
  //cuando supera los 300px el eje vertical le cambia el color a todos los a y le agrega la clase .sticky, de lo contrario vuelve a la normalidad
  if(yPos > 300) {
    nav.classList.add("sticky");
    for(i = 0; i < nav__a.length;i++){
      nav__a[i].style.color="#555";
    }
    
  } else {
    nav.classList.remove("sticky");
    for(i = 0; i < nav__a.length;i++){
      nav__a[i].style.color="#fff";
    }
  }
}

window.addEventListener("scroll", stickyNav);