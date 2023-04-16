$(".menu li").hover(function () {
  $(this).find(".menu1").stop().slideToggle("fast");
});

$(".top").click(function () {
  $("html").animate({ scrollTop: 0 }, 300);
});
