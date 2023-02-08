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

setInterval(() => {
    goNext();
}, 3000)

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


//scrolling to particular section

const homeAccess = document.querySelector('.home');
const aboutAccess = document.querySelector('.about-us');
const imagesAccess = document.querySelector('.images');
const servicesAccess = document.querySelector('.services');
const logoAccess = document.querySelector('.website-name');


function scrolltoId(id) {
    var access = document.getElementById(id);
    access.scrollIntoView({ behavior: 'smooth' });
}

homeAccess.addEventListener('click', (e)=>{
    e.preventDefault()
    scrolltoId('home-page');
})

logoAccess.addEventListener('click', (e)=>{
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




// const nav = document.querySelector('.header-wrapper');
// const observer = new IntersectionObserver((entry)=>{
//     const [id] = entry
//     if(id.intersectionRatio){
//         nav.classList.remove('sticky');
//     }else{
//         nav.classList.add('sticky');
//     }
// },{
//     root:null,
//     threshold:0,
//     rootMargin:`-${nav.clientHeight}px`
// })
// observer.observe(document.querySelector('#home-page'))