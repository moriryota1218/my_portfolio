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

// ---------------TOPページスライドダウン-----------------------------
$(function(){
   function animation(){
      $('.fadeInDown').each(function(){
         // ターゲット位置の取得
         var target = $(this).offset().top;
         // スクロール量を取得
         var scroll = $(window).scrollTop();
         // ウィンドウの高さを取得
         var windowHeight = $(window).height();
         //ターゲットまでスクロールするとフェードインする
         if(scroll > target - windowHeight){
            $(this).css('opacity','1');
            $(this).css('transform','translate(0');
         }        
      });
   }
   animation();
   $(window).scroll(function(){
      animation();
   });
});

// ---------------TOPページスライドアップ-----------------------------
$(function(){
   function animation(){
      $('.fadeInUp').each(function(){
         // ターゲット位置の取得
         var target = $(this).offset().top;
         // スクロール量を取得
         var scroll = $(window).scrollTop();
         // ウィンドウの高さを取得
         var windowHeight = $(window).height();
         //ターゲットまでスクロールするとフェードインする
         if(scroll > target - windowHeight){
            $(this).css('opacity','1');
            $(this).css('transform','translate(0');
         }        
      });
   }
   animation();
   $(window).scroll(function(){
      animation();
   });
});

// -----------------------ハンバーガーメニュー---------------------------
$(function(){
   $(".btn-navi").on("click", function(){
      // ハンバーガーメニューの位置を設定するための変数
      var rightVal = 0;
      if($(this).hasClass("open")) {
       // 「open」クラスを持つ要素はメニューを開いた状態に設定
       rightVal = -300;
       // メニューを開いたら次回クリック時は閉じた状態になるよう設定
       $(this).removeClass("open");
      } else {
       // 「open」クラスを持たない要素はメニューを閉じた状態に設定 (rightVal は0の状態 )
       // メニューを開いたら次回クリック時は閉じた状態になるよう設定
       $(this).addClass("open");
      }

      $(".global-navi").stop().animate({
         right: rightVal
      }, 200);
   });
});