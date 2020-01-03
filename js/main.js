$(function(){
  var pagetop = $('#page_top');
  // ボタン非表示
  pagetop.hide();
  // 200px スクロールしたらボタン表示
  $(window).scroll(function () {
     if ($(this).scrollTop() > 200) {
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