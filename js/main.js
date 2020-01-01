$(function(){
  var pagetop = $('#page_top');
  // ボタン非表示
  pagetop.hide();
  // 300px スクロールしたらボタン表示
  $(window).scroll(function () {
     if ($(this).scrollTop() > 300) {
          pagetop.fadeIn();
     } else {
          pagetop.fadeOut();
     }
  });
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 600);
     return false;
  });
});