$(document).ready(function() {
    $('.nav-button').click(function() {
     $('.nav-button').toggleClass('change');
    });
});

$(window).scroll(function() {
    let position = $(this).scrollTop();
    if (position >= 200) {
        $('.nav-menu').addClass('custom-navbar');
    } else {
        $('.nav-menu').removeClass('custom-navbar');
    }
});

$(window).scroll(function() {
    let position = $(this).scrollTop();
    if (position >= 700){
        $('.camera-img').addClass('fromLeft');
        $('.mission-text').addClass('fromRight');
    } else {
        $('.camera-img').removeClass('fromLeft');
        $('.mission-text').removeClass('fromRight');
    }
    
 });

 $('.gallery-list-item').click(function() {
    let value = $(this).attr('data-filter');
    if (value === 'all'){
        $('.filter').show(700);
    } else {
        $('.filter').not('.' + value).hide(700);
        $('.filter').filter('.'+ value).show(700);
    }

 });

 $('.gallery-list-item').click(function(){
    $(this).addClass('active-item').siblings().removeClass('active-item');
 });

 $(window).scroll(function(){
    let position = $(this).scrollTop();
    if (position >= 4450){
        $('.card-1').addClass('fromLeftCard');
        $('.card-3').addClass('fromRightCard');
        $('.card-2').addClass('fromButtonCard');
    }else {
        $('.card-1').removeClass('fromLeftCard');
        $('.card-3').removeClass('fromRightCard');
        $('.card-2').removeClass('fromButtonCard');
    }
 });
