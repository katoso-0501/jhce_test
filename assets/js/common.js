
var loadingState = 0;

$('.header_link00').on('click',function(){
    $('html,body').animate({"scrollTop": 0}, 500);
    return false;
});

$('.header_link01').on('click',function(){
    $('html,body').animate({"scrollTop": "120"}, 500);
    return false;
});

$('.header_link02').on('click',function(){
    var c = $('.courses').offset().top+"px";
    $('html,body').animate({"scrollTop": c}, 500);
    return false;
});

$('.header_link03').on('click',function(){
    var c = $('.ourkitchen').offset().top+"px";
    $('html,body').animate({"scrollTop": c}, 500);
    return false;
});

$(document).ready(function(){
    st = $(window).scrollTop();
    if(st>40) {
        $("body").removeClass('phase1');
        $("body").addClass('phase2');
        $('header').removeClass('noBG');
    } else {                
        $("body").addClass('phase1');
        $("body").removeClass('phase2');
        $('header').addClass('noBG');
    }

});

$(window).on('load',function(){
    loadCompleteAction()
});

function loadCompleteAction () {
    setTimeout(() => {
        $('.loading_mat').addClass("phase2");
    }, 300);

    $('.main_visual_slick__slideshow').slick(
        {
            autoplay: true,
            loop : true,
            fade : true,
            dots: false,
            arrows: false
        }
    );
    
    $('.animationTrigger').each(function(){
        if(
            $(window).scrollTop()>= ($(this).offset().top - $(window).innerHeight() * 1)
        ) {
            $(this).addClass("triggered");
        }
    });

    setTimeout(() => {
        loadingState = 2;
    }, 1000);
}

// Parallax, seek to the 2nd phase
// if the page is scrolled from the top
var st = 0;
$(window).on('scroll resize',function(){
    st = $(window).scrollTop();
    if(st>40) {
        $("body").removeClass('phase1');
        $("body").addClass('phase2');
        $('header').removeClass('noBG');
    } else {                
        $("body").addClass('phase1');
        $("body").removeClass('phase2');
        $('header').addClass('noBG');
    }
});

// _/_/_/_/_/_/_/_/_/_/_/
// ColorBox
// _/_/_/_/_/_/_/_/_/_/_/
$(".single").colorbox({
    maxWidth:"90%",
    maxHeight:"90%",
    opacity: 0.7
});

// _/_/_/_/_/_/_/_/_/_/_/
// Triggering elements which have animation when scroll reached to them
// _/_/_/_/_/_/_/_/_/_/_/
$(window).on('scroll resize load',function(){
    $('.animationTrigger').each(function(){
        if(
            $(window).scrollTop()>= ($(this).offset().top - $(window).innerHeight() * 1)
            && loadingState === 2
            && $("body").hasClass("phase2")
        ) {
            $(this).addClass("triggered");
        }
    });
});