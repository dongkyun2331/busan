$('.wbox_01ul').slick({
  vertical: true,
  draggable: false,
  dots: false,
  arrows: false,
  pauseOnHover: false,
  autoplay: true,
})

$('.bul').slick({
  draggable: false,
  dots: false,
  arrows: false,
  pauseOnHover: false,
  autoplay: true,
})

$('.slide_slick').slick({
  nextArrow: $('.right2'),
  prevArrow: $('.left2'),
})

$('.photo_slick').slick({
  nextArrow: $('.right3'),
  prevArrow: $('.left3'),
})

$('.photo_slick').on('afterChange', function (event, slick, currentSlide) {
  $('.number').text(currentSlide + 1)
})

$('.play3').click(function () {
  if ($(this).find('i').hasClass('xi-play')) {
    $('.photo_slick').slick('slickPlay')
    $(this).find('i').removeClass('xi-play').addClass('xi-pause')
  } else {
    $('.photo_slick').slick('slickPause')
    $(this).find('i').removeClass('xi-pause').addClass('xi-play')
  }
})

$('.right').click(function () {
  $('.wbox_01ul').slick('slickNext')
  $('.bul').slick('slickNext')
})

$('.left').click(function () {
  $('.wbox_01ul').slick('slickPrev')
  $('.bul').slick('slickPrev')
})

$('.start').click(function () {
  $('.wbox_01ul').slick('slickPlay')
  $('.bul').slick('slickPlay')
})

$('.stop').click(function () {
  $('.wbox_01ul').slick('slickPause')
  $('.bul').slick('slickPause')
})

$('.y1').magnificPopup({
  disableOn: 700,
  type: 'iframe',
  mainClass: 'mfp-fade',
  removalDelay: 160,
  preloader: false,

  fixedContentPos: false,
})

$('.photo li').hover(function () {
  $(this).find('.wave').toggleClass('move')
  $(this).find('.photo_image').toggleClass('move')
  $(this).find('.photo_p').toggleClass('move')
  $(this).find('.plus').toggleClass('move')
})
