//script.js 공통 스크립트 파일 참조
$(document).ready(function(){
  var winWidth = $(window).width();
  
  // 2Depth Menu
  if (winWidth >= 980) {
    $(".gnb").hover(function () {
      $(".gnb .dropdown-menu").toggleClass("show");
      $(".gnb .gnb-bg").toggleClass("show");
    });

    $( ".gnb" ).mouseleave(function() {
      $(".gnb .dropdown-menu").removeClass("show");
      $(".gnb .gnb-bg").removeClass("show");  
    }); 
  }
  // 2Depth Menu for Resize
  $(window).resize(function(){
    if (winWidth >= 980) {
      $(".gnb").hover(function () {
        $(".gnb .dropdown-menu").toggleClass("show");
        $(".gnb .gnb-bg").toggleClass("show");
      });

      $( ".gnb" ).mouseleave(function() {
        $(".gnb .dropdown-menu").removeClass("show");
        $(".gnb .gnb-bg").removeClass("show");  
      }); 
    }
  });
  
});