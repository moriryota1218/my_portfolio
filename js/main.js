// ----------------TOPへ戻るボタン------------------------
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
// ---------------ここまでTOPへ戻るボタン---------------------

// ---------------TOPページにアニメーション付与---------------
$(function(){
   $(".mainvisual h2").textillate({
      loop: true,
      // フェードイン時のアニメーション
      in: {
         effect: 'fadeInDown',
         delay: 50,
         shuffle: true
      },
      // フェードアウト時のアニメーション
      out: {
         effect: 'flash',
         delay: 50
      }
   });
})
// ---------------ここまでTOPページにアニメーション付与---------------
