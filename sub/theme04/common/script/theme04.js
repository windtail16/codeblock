$(document).ready(function(){
    $('.btn-menu').click(function(){
        console.log('show');
        $('.slide-nav').toggleClass('show');
    });

    $('.btn-close').click(function(){
        $('.slide-nav').removeClass('show'); 
    });
});