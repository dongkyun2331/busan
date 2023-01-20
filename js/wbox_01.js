//background
// $(document).ready(function () {
//   var width = $('.background').width()
//   var num = $('.bul .bli').length
//   var max = width * num
//   var move = 0
//   function background() {
//     move += width
//     $('.bul').animate({ left: -move }, 600, function () {
//       if (move >= max) {
//         $(this).css('left', 0)
//         move = 0
//       }
//     })
//   }
//   backgroundOff = setInterval(background, 3000)
//   $('.bul').append($('.bul .bli').first().clone())

//   $('.stop').click(function () {
//     clearInterval(backgroundOff)
//   })
//   $('.start').click(function () {
//     backgroundOff = setInterval(background, 3000)
//   })
// })

// wbox_01
$(document).ready(function () {
  // var height = $('.wbox_01').height()
  // var num = $('.wbox_01ul .wli').length
  // var max = height * num
  // var move = 0
  // function wbox_01() {
  //   move += height
  //   $('.wbox_01ul').animate({ top: -move }, 600, function () {
  //     if (move >= max) {
  //       $(this).css('top', 0)
  //       move = 0
  //     }
  //   })
  // }
  // wbox_01Off = setInterval(wbox_01, 3000)
  // $('.wbox_01ul').append($('.wbox_01ul .wli').first().clone())

  // $('.stop').click(function () {
  //   clearInterval(wbox_01Off)
  // })
  // $('.start').click(function () {
  //   wbox_01Off = setInterval(wbox_01, 3000)
  // })

  $('.wbox_01ul').slick({
    dots: true,
    autoplay: true,
    vertical: true,
    autoplaySpeed: 3000,
    // nextArrow: $('.right'),
    // prevArrow: $('.left'),
  })

  $('.start').click(function () {
    $('.wbox_01ul').slick('slickPlay')
    $('.bul').slick('slickPlay')
  })

  $('.stop').click(function () {
    $('.wbox_01ul').slick('slickPause')
    $('.bul').slick('slickPause')
  })

  $('.bul').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: $('.right'),
    prevArrow: $('.left'),
  })
})
