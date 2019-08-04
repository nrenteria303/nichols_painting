const menuIcn = document.getElementById("menu_bars");
const nav = document.getElementById('nav');
const navExit = document.getElementById('menuExitLayer');
const bar1 = document.getElementById('bar_1');
const bar2 = document.getElementById('bar_2');
const bar3 = document.getElementById('bar_3');
var menuShowing = false;
var slideIndex = 1;

function toggleNav() {
    if (!menuShowing) {
        nav.style.left = 0;
        navExit.style.left = '200px';
        bar1.classList.add('right_x');
        bar2.classList.add('left_x');
        bar3.classList.add('right_x');
    } else {
        nav.style.left = '-200px';
        navExit.style.left = '-100vw';
        bar1.classList.remove('right_x');
        bar2.classList.remove('left_x');
        bar3.classList.remove('right_x');
    }    
    menuShowing = !menuShowing;
}

function hideMenu() {
    menuShowing = false;
    nav.style.left = '-200px';
    navExit.style.left = '-100vw';
    bar1.classList.remove('right_x');
    bar2.classList.remove('left_x');
    bar3.classList.remove('right_x');
}

function showBannerHeading() {
    bannerShade.style.top = 0;
    bannerHeading.style.opacity = 1;
}

function showSlides(n) {
    var index;
    var slides = document.getElementsByClassName('slides');
    var dots = document.getElementsByClassName('dot');
    if (n > slides.length) {
        slideIndex = 1;
    } 
    if (n < 1) {
        slideIndex = slides.length
    }
    for (index = 0; index < slides.length; index++) {
        slides[index].style.display = 'none';
    }
    for (index = 0; index < dots.length; index++) {
        dots[index].className = dots[index].className.replace(' active', '');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

showSlides(slideIndex);

menuIcn.addEventListener('click', toggleNav);
navExit.addEventListener('click', hideMenu);