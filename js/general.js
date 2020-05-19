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