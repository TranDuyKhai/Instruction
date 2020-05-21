
$(function() {
    $('.workStyle__figure').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        speed: 3000,
        slidesToScroll: 1,
        slidesToShow: 1
    });
    
    $('.interview__figure').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 2000,
        slidesToScroll: 1,
        slidesToShow: 1,
        nextArrow: $('.interview__button > .next').get(0),
        prevArrow: $('.interview__button > .previous').get(0)
    });
    $('.interview__figure').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $('.interview__img--position').html("0" + (currentSlide + 1));
    });
    AOS.init({
        once: true,
        offset: 60,
        duration: 500,
        anchorPlacement: 'center-center'
    });
    $('#svgPlay').html(`<svg 
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="81px" height="81px"  viewBox="0 0 81 81">
   <path fill-rule="evenodd"  opacity="0.8" fill="rgb(255, 255, 255)"
    d="M40.500,80.500 C18.408,80.500 0.499,62.591 0.499,40.499 C0.499,18.407 18.408,0.498 40.500,0.498 C62.592,0.498 80.501,18.407 80.501,40.499 C80.501,62.591 62.592,80.500 40.500,80.500 ZM33.000,25.999 L33.000,55.999 L50.000,40.999 L33.000,25.999 Z"/>
   </svg>`);
});