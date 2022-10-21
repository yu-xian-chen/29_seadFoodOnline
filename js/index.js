// ----------公共區------------
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

}
  
$(window).scroll(function (){
    fadeAnime();
});

$(window).on('load', function(){
    fadeAnime();
});




// banner



//------news------- 目前無效果
function $id(id){  //$id("btnLeft")
    return document.getElementById(id);  //document.getElementById("btnLeft")
}


window.addEventListener("load", function(){

    let wrap = document.querySelector(".news-list");
    let curIndex = 0;
    //-----------------------------------------btnLeft.onclick
    $id("btnLeft").onclick = function(){
        curIndex--;
        wrap.style.left = -310*curIndex + "px";
        if(curIndex == 0 ){
           $id("btnLeft").disabled = true; 
        }
        $id("btnRight").disabled = false; 
    }
    //-----------------------------------------btnRight.onclick
    /* $id("btnRight").onclick = function(){
    curIndex++;
    wrap.style.left = -310*curIndex + "px";  
    if(curIndex == 5){
        document.getElementById("btnRight").disabled = true; 
    }
    document.getElementById("btnLeft").disabled = false;       
    } */
    $id("btnRight").onclick = function(){
        curIndex++;
        wrap.style.left = -310*curIndex + "px";  
        $id("btnLeft").disabled = false;   
        if(curIndex == 5){
            wrap.style.left="5px";
            curIndex = 0;
            $id("btnLeft").disabled = true;       
        }
    }
})


