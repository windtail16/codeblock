$('.smooth-link').click(function() {
  var target = $(this.hash);
  target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
  if (target.length) {
    $('html,body').animate({
      scrollTop: target.offset().top - 80
    }, 1000);
  }
});
// TOP go btn
$('.top-go').click(function () {
  $('html, body').animate({
    scrollTop: '0px'
  },
  1500);
  return false;
});
$('.bottom-go').click(function () {
  $('html, body').animate({
    scrollTop: $(document).height()
  },
  1500);
  return false;
});
//menu mobile
$('.btn-menu').click(function() {
  $(this).next('ul.dl-menu').toggleClass('invisible');
});

$('.btn-menu').click(function(){
  $('.slide-nav').toggleClass('show');
});

$('.btn-close').click(function(){
  $('.slide-nav').toggleClass('show');
});

// 높이값 계산
var winHeight = $(window).height();
var topHeight = $(".top").height();
var botHeight = $(".cresh-footer").height();

var conHeight = winHeight-topHeight-botHeight;

function addHeight(){
  $(".mid").css("min-height",conHeight);
}

addHeight();