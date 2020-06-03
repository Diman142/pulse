$(document).ready(function(){

let cons_title = document.querySelectorAll(".title");


if(window.innerWidth<992){
    cons_title[0].classList.remove("title_left");
}


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

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });


  

  function toggleSlide(item){
    $(item).each(function(i){
        $(this).on('click', function(e){
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
    });
  }

  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');
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
