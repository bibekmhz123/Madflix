const Slideshow =document.querySelector('.slideshow');
const SlideImages=document.querySelectorAll('.slideshow images');

//Buttons
const preBtn=document.querySelector('.preBtn');
const nextBtn=document.querySelector('.nextBtn');

//counter
let counter=1;
const size= SlideImages[0].clientwidth;

Slideshow.style.transform='translateX('+(-size*counter)+'px)';

//Button Listeners

nextBtn.addEventListener('click', ()=> {
	Slideshow.style.transition="transform 0.4s ease-in-out";
	counter++;
	console.log(counter); 
});
