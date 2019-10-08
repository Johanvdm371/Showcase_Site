//----------------
//Header slideshow
//----------------

const bgImages = ['images/bakery-1868925.jpg', 'images/dough-943245.jpg', 'images/hands-731265.jpg', 'images/cookies-1377586.jpg'];
let nextImage = 0;
const header = document.querySelector('header');

function slideshow(){
    if(nextImage >= bgImages.length){
        nextImage = 0;
    }
    header.style.background = `url(${bgImages[nextImage]})`;
    header.style.backgroundSize = 'cover';
    header.style.backgroundPosition = 'center';
    nextImage++;
};
slideshow();
setInterval(slideshow, 7000);

//---------------
//Popup
//---------------

const motto = document.getElementById('motto');
const about = document.getElementById('about');
const find = document.querySelector('.address');
const products = document.getElementById('products');
const fresh = document.querySelector('.product-container1');
const order = document.querySelector('.product-container2');

function scrollPop(element, distance) {
    const popPos = element.getBoundingClientRect();
    console.log(popPos.top - window.pageYOffset)
    if (popPos.top - window.pageYOffset < -distance) {
        element.style.transform = 'translateX(0)';
        element.style.transform = 'translateY(0)';
        element.style.opacity = '1';
    }
}

//---------------
//To top button
//---------------

const toTop = document.querySelector('#to-top');

function toTopPop() {
    const popupHeight = window.innerHeight;
    let shouldPop = false;
    if (window.pageYOffset - popupHeight >= 0) {
        shouldPop = true;
    } else {
        shouldPop = false;
    }
    if (shouldPop) {
        toTop.style.right = '0';
    }
    else {
        toTop.style.right = '-80px'
    }
}

//---------------
//Event Listeners
//---------------

window.addEventListener('scroll', function() {
    toTopPop();
    scrollPop(motto, 200);
    scrollPop(about, 250);
    scrollPop(products, 650);
    scrollPop(fresh, 1200);
    scrollPop(order, 1500);
    scrollPop(find, 2500);
});

toTop.addEventListener('click', function(){
    window.scrollTo(0, 0);
});