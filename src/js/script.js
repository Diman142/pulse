$(document).ready(function(){

$('.carusel__inner').slick({
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    //adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                dots: false,
                arrows: false,
            }
        }
      ]
  });
});














// const slider = tns({
//     container: '.carusel__inner',
//     items: 1,
//     slideBy: 'page',
//     autoplay: false,
//     controls: false,
//     nav: false,
//     // responsive: {
//     //     575: {

//     //     },
//     //     767: {

//     //     },
//     //     991: {

//     //     }
//     //   }
//   });



// document.querySelector('.prev').addEventListener('click', function () {
//     slider.goTo('prev');
// }); 

// document.querySelector('.next').addEventListener('click', function () {
//     slider.goTo('next');
// }); 
