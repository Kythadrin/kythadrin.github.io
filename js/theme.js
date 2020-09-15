scrollUp = document.getElementById("scroll-up");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
   		scrollUp.style.display = "block";
  	} else {
    	scrollUp.style.display = "none";
  	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0;
  	document.documentElement.scrollTop = 0;
} 