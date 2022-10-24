// 尚未完成
// 首頁:放大鏡
// 全域:進商品頁面活動彈出


// -------------------公共區---------------------
// to-top
$('#toTop').click(function(){
    $('body,html').animate({
        scrollTop: 0
    }, 500); //速度，越大越慢
    return false;
});

// 動畫進場 下到上
function fadeAnime(){
    $('.fadeUpStart').each(function(){ //抓html的class:fadeUpStart
        var elemPos = $(this).offset().top-5 //
        var scroll = $(window).scrollTop()
        var windowHeight = $(window).height()

        if (scroll >= elemPos - windowHeight){
            $(this).addClass('fadeUp')
        }else{
            $(this).removeClass('fadeUp')
        }
    });

    // 左到右
    $('.fadeLeftStart').each(function(){ 
        var elemPos = $(this).offset().top-5;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();

        if (scroll >= elemPos - windowHeight){
            $(this).addClass('fadeLeft');
        }else{
            $(this).removeClass('fadeLeft');
        }
    });


    // 右到左
    $('.fadeRightStart').each(function(){ 
        var elemPos =$(this).offset().top-5;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();

        if (scroll >= elemPos - windowHeight){
            $(this).addClass('fadeRight');
        }else{
            $(this).removeClass('fadeRight');
        }
    });


    // 原地
    $('.fadeInStart').each(function(){ 
        var elemPos = $(this).offset().top-5;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();

        if(scroll >= elemPos - windowHeight){
            $(this).addClass('fadeIn');
        }else{
            $(this).removeClass('fadeIn');
        }
    });

    $('.flipLeftStart').each(function(){ 
        var elemPos = $(this).offset().top-5;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();

        if (scroll >= elemPos - windowHeight){
            $(this).addClass('flipLeft');
        }else{
            $(this).removeClass('flipLeft');
        }
    });

    $('.blurStart').each(function(){ 
        var elemPos = $(this).offset().top-5;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();

        if (scroll >= elemPos - windowHeight){
            $(this).addClass('blur');
        }else{
            $(this).removeClass('blur');
        }
    });

    //魚進場
    $('.flipLeftTopStart').each(function(){ 
        var elemPos = $(this).offset().top-5;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();

        if (scroll >= elemPos - windowHeight){
            $(this).addClass('flipLeftTop');
        }else{
            $(this).removeClass('flipLeftTop');
        }
    });

}
  
$(window).scroll(function (){
    fadeAnime();
});

$(window).on('load', function(){
    fadeAnime();
});


//------news------- 

$('.slider-news').slick({
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    dots: true,
    responsive: [
        {
        breakpoint: 769,//斷點
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
        }
    },
    {
        breakpoint: 426,//斷點
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    }
]
});

// 輪播圖
$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 6900,
        infinite: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        cssEase: 'linear',
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 769,//斷點
            settings: {
            slidesToShow: 3,//畫面看幾張
        }},{
            breakpoint: 426,//斷點
            settings: {
            slidesToShow: 1.5,
            }
        }]
    });

    $('.slider-another').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2,
        speed: 6900,
        infinite: true,
        pauseOnHover: true,
        pauseOnFocus: false,
        cssEase: 'linear',
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 769,
            settings: {
                slidesToShow: 3,
            }},
        {
            breakpoint: 426,
            settings: {
                slidesToShow: 1.5,
            }
        }
    ]
    });



})
//-----------------聯絡我們表單----------------

//表單點擊狀態 
$(document).ready(function(){
    $('.data-list input').focus(function(){
        $(this).css({
            backgroundColor: '#eee',
            fontSize: 18,
            outline:'none'
        })
    }).blur(function(){
        $(this).css({
            backgroundColor: '#F5F4F1',
            fontSize: 16
        })
    })

    $('.data-list textarea').focus(function(){
        $(this).css({
            backgroundColor: '#eee',
            fontSize: 18,
            outline:'none'
        }).attr('placeholder','')
    }).blur(function(){
        $(this).css({
            backgroundColor: '#F5F4F1',
            fontSize: 16
        })
        if($(this).val() == ''){
            $(this).attr('placeholder','回饋意見')
        }
    })
})

// 表單送出
// $(document).ready(function(){
//     $('submit-btn').click(function(){
//         document.querySelector("black-box").style.display = "block" 
//     })
// })


// --------------會員登入------------
    // 登入
    $(document).ready(function(){
        $('.sign-in-box input').focus(function(){
        $(this).css({
            backgroundColor: '#eee',
            fontSize: 20,
            outline:'none'

        }).attr('placeholder','')
    }).blur(function(){

        $(this).css({
            backgroundColor: '#F5F4F1',
            fontSize: 16
        }).attr('placeholder','請輸入英數至少6個字元')
    }) 
    })

    // 註冊
    $(document).ready(function(){
        $('.sign-up-box input').focus(function(){
        $(this).css({
            backgroundColor: '#fff',
            fontSize: 20,
            outline:'none'

        }).attr('placeholder','')
    }).blur(function(){

        $(this).css({
            backgroundColor: '#fff',
            fontSize: 16
        }).attr('placeholder','請輸入英數至少6個字元')
    }) 
    })

    // 信箱
    $(document).ready(function(){
        $('.sign-up-box-mail input').focus(function(){
        $(this).css({
            backgroundColor: '#fff',
            fontSize: 20,
            outline:'none'

        }).attr('placeholder','')
    }).blur(function(){

        $(this).css({
            backgroundColor: '#fff',
            fontSize: 16
        }).attr('placeholder','Email')
    }) 
    })

    
    // 手機
    $(document).ready(function(){
        $('.sign-up-box-phone input').focus(function(){
        $(this).css({
            backgroundColor: '#fff',
            fontSize: 20,
            outline:'none'

        }).attr('placeholder','')
    }).blur(function(){

        $(this).css({
            backgroundColor: '#fff',
            fontSize: 16
        }).attr('placeholder','手機')
    }) 
    })
