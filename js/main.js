// Collapsible menu icon for mobile version

const collapsibles = document.querySelectorAll('.collapsible');
collapsibles.forEach((item) =>
	item.addEventListener('click', function () {
		this.classList.toggle('collapsible--expanded');
	})
);

// #############################################

// When the user scrolls down 640px from the top of the document, resize the back-button's opacity

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 640 || document.documentElement.scrollTop > 640) {
    document.getElementById("back-button").style.display = "inline";
    document.getElementById("back-button").style.opacity = "0.8";
  } else {
    document.getElementById("back-button").style.display = "none";
    document.getElementById("back-button").style.opacity = "0";
  }
}

// #############################################

let heroHeight = document.querySelector('.hero').clientHeight;

if(heroHeight < 210){
  document.querySelector('.hero-text').style.display = 'none';
}
else{
  document.querySelector('.hero-text').style.display = 'block';
}

screen.addEventListener("orientationchange", function() {
  if(heroHeight < 210){
    document.querySelector('.hero-text').style.display = 'none';
  }
  else{
    document.querySelector('.hero-text').style.display = 'block';
  }
  window.location.reload();
});