import $ from "jquery";

// faq accordion
var viewpostwidth = $(window).width();
if (viewpostwidth < 2500) {
  $(document).on("click", "#faq-accordion li .question", function () {
    var parent = $(this).parents("li");
    parent.find(".answer").stop().slideToggle();
    parent.toggleClass("active");
    parent.siblings().removeClass("active");
    parent.siblings().find(".answer").slideUp();
  });

  $("#faq-accordion li").each(function () {
    if ($(this).hasClass("active")) {
      $(this).find(".answer").show();
    }
  });
}
