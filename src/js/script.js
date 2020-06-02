let cons_title = document.querySelectorAll(".title");


if(window.innerWidth<992){
    cons_title[0].classList.remove("title_left");
}

$(document).ready(function(){
    $('.carusel__inner').slick({
        speed: 1000,
        //adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                dots: true,
                arrows: false,
                }
            }
        ]
    });
});
      