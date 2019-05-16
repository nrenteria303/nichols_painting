const menuIcn = document.getElementById("menu_bars");
const nav = document.getElementById('nav');
const navExit = document.getElementById('menuExitLayer');
const bannerHeading = document.getElementById('fancy_heading');
const bannerShade = document.getElementById('banner_shade_top');
const mainFront = document.getElementById('front_page_main');
const banner = document.getElementById('banner');
const bar1 = document.getElementById('bar_1');
const bar2 = document.getElementById('bar_2');
const bar3 = document.getElementById('bar_3');
var menuShowing = false;

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

menuIcn.addEventListener('click', toggleNav);
navExit.addEventListener('click', hideMenu);