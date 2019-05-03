const menuIcn = document.getElementById("menu_bars");
const nav = document.getElementById('nav');
const mainFront = document.getElementById('front_page_main');
const banner = document.getElementById('banner');
const bar1 = document.getElementById('bar_1');
const bar2 = document.getElementById('bar_2');
const bar3 = document.getElementById('bar_3');
var menuShowing = false;

function toggleNav() {
    menuShowing = !menuShowing;
    if (!menuShowing) {
        nav.style.left = 0;
        bar1.classList.add('right_x');
        bar2.classList.add('left_x');
        bar3.classList.add('right_x');
    } else {
        nav.style.left = '-200px';
        bar1.classList.remove('right_x');
        bar2.classList.remove('left_x');
        bar3.classList.remove('right_x');
    }
}

function hideMenu() {
        menuShowing = false;
        nav.style.left = '-200px';
        bar1.classList.remove('right_x');
        bar2.classList.remove('left_x');
        bar3.classList.remove('right_x');
}

menuIcn.addEventListener('click', toggleNav);
mainFront.addEventListener('click', hideMenu);
banner.addEventListener('click', hideMenu);