$(document).ready(function(){
    $('.btn-menu').click(function(){
        $('.slide-nav').toggleClass('show');
    });

    $('.btn-close').click(function(){
        $('.slide-nav').removeClass('show'); 
    });
});