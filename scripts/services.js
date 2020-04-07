var $container = $("#slideshow_test");
var $dotContainer = $(".dot_cont");
var slides = document.getElementsByClassName('slides');
var slideIndex = 1;

const menuIcn = document.getElementById("menu_bars");
const nav = document.getElementById('nav');
const navExit = document.getElementById('menuExitLayer');
const bar1 = document.getElementById('bar_1');
const bar2 = document.getElementById('bar_2');
const bar3 = document.getElementById('bar_3');
var menuShowing = false;

$.ajax({
    url: "../admin/_posts/service-slides/service-slides.json",
    dataType: "json",
    method: "get",
    success: function(res) {
        for (let i = 0; i < res.length; i++) {
            var $slideshowHTML = `<div class="slides fade">
                                    <img src="`;
            $slideshowHTML += res[i].image + `" alt="` + res[i].altText + `">`;
            $slideshowHTML += `<div class="caption"><p>` + res[i].caption + `</p></div>
                            </div>
                            <div class="cl_down_1 cl"></div>
                            <div class="cl_down_2 cl"></div>
                            <div class="cl_up_1 cl"></div>
                            <div class="cl_up_2 cl"></div>
                            <a class="prev">&#10094;</a>
                            <a class="next">&#10095;</a>`;
            $container.append($slideshowHTML);

            var newDot = document.createElement("div");
            newDot.classList.add("dot");
            $dotContainer.append(newDot);
        }

        const $prevBtn = $(".prev");
        const $nextBtn = $(".next");
        var $dots = document.querySelectorAll(".dot");

        function showSlides(n) {
            var index;
            if (n > slides.length) {
                slideIndex = 1;
            } 
            if (n < 1) {
                slideIndex = slides.length
            }
            for (index = 0; index < slides.length; index++) {
                slides[index].style.display = 'none';
            }
            for (index = 0; index < $dots.length; index++) {
                $dots[index].className = $dots[index].className.replace(' active', '');
            }
            slides[slideIndex - 1].style.display = 'block';
            $dots[slideIndex - 1].className += ' active';
        }
        
        function currentSlide(n) {
            showSlides(slideIndex = n);
        }
        
        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        $prevBtn.click(function() {plusSlides(-1)});
        $nextBtn.click(function() {plusSlides(1)});

        $dots.forEach(function(dot, i) {
            dot.addEventListener("click", function() {currentSlide(i + 1)});
        });
        
        showSlides(slideIndex);
    }
});

function toggleNav() {
    if (!menuShowing) {
        nav.style.left = 0;
        navExit.style.left = '200px';
    } else {
        nav.style.left = '-200px';
        navExit.style.left = '-100vw';
    }    
    bar1.classList.toggle('right_x');
    bar2.classList.toggle('left_x');
    bar3.classList.toggle('right_x');
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
