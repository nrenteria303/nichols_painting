const menuIcn = document.getElementById("menu_bars");
const nav = document.getElementById('nav');
const navExit = document.getElementById('menuExitLayer');
const bar1 = document.getElementById('bar_1');
const bar2 = document.getElementById('bar_2');
const bar3 = document.getElementById('bar_3');
var menuShowing = false;

const quotations = document.querySelector("#quotations");

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

menuIcn.addEventListener('click', toggleNav);
navExit.addEventListener('click', hideMenu);

$.ajax({
    url: "./_posts/testimonials/testimonials.json",
    dataType: "json",
    method: "get",
    success: function(res) {
        let testimonials = res.testimonials;
        testimonials.forEach(testimonial => {
            let blockQuote = document.createElement("blockquote");
            blockQuote.innerText = "\"" + testimonial.quote + "\"";
            let customerName = document.createElement("p");
            customerName.innerHTML = '&mdash; ' + testimonial.customerName;
            quotations.append(blockQuote);
            quotations.append(customerName);
        });
    }
});