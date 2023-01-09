// wbox_01
$(document).ready(function () {
  var height = $('.wbox_01').height()
  var num = $('.wbox_01ul .wli').length
  var max = height * num
  var move = 0
  function wbox_01() {
    move += height
    $('.wbox_01ul').animate({ top: -move }, 600, function () {
      if (move >= max) {
        $(this).css('top', 0)
        move = 0
      }
    })
  }
  wbox_01Off = setInterval(wbox_01, 2000)
  $('.wbox_01ul').append($('.wbox_01ul .wli').first().clone())

  $('.stop').click(function () {
    clearInterval(wbox_01Off)
  })
  $('.start').click(function () {
    wbox_01Off = setInterval(wbox_01, 2000)
  })
})
