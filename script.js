//slider logic

let slides = document.querySelectorAll('.slide')
let totalLength = slides.length;
let counter = 0;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`
})

const goPrev = () => {
    if (counter > 0) {
        counter--;
    }
    else {
        counter = totalLength - 1;
    }
    slideImage();
}

const goNext = () => {
    counter = (counter + 1) % totalLength;
    slideImage();
}

const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}



const homeAccess = document.querySelector('.home');
const aboutAccess = document.querySelector('.about-us');
const imagesAccess = document.querySelector('.images');
const servicesAccess = document.querySelector('.services');

//scrolling to particular section
function scrolltoId(id) {
    var access = document.getElementById(id);
    access.scrollIntoView({ behavior: 'smooth' });
}

homeAccess.addEventListener('click', (e)=>{
    e.preventDefault()
    scrolltoId('home-page');
})


aboutAccess.addEventListener('click', (e)=>{
    e.preventDefault()
    scrolltoId('about-us-page');
})


imagesAccess.addEventListener('click', (e)=>{
    e.preventDefault()
    scrolltoId('images-page');
})


servicesAccess.addEventListener('click', (e)=>{
    e.preventDefault()
    scrolltoId('services-page');
})
