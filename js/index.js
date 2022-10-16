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

// ===============JQ筆記===================
// 3. 滾動屏幕時移動
// $(window).on('scroll', function () {
// //画面がスクロールされたら動かしたいソースコードを記述
// });

// $(window).on('scroll',function(){
//     document.querySelector('.section-new h2').
// })


// 下到上效果製作
function fadeAnime(){
    $('.fadeUpTrigger').each(function(){ //fadeInUpTriggerというクラス名が
        var elemPos = $(this).offset().top-50; //要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
        $(this).addClass('fadeUp');
        // 画面内に入ったらfadeInというクラス名を追記
        }else{
            $(this).removeClass('fadeUp');
        // 画面外に出たらfadeInというクラス名を外す
        }
        });

    $('.fadeDownTrigger').each(function(){ //fadeInDownTriggerというクラス名が
        var elemPos = $(this).offset().top-50; //要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
        $(this).addClass('fadeDown');
        // 画面内に入ったらfadeDownというクラス名を追記
        }else{
        　$(this).removeClass('fadeDown');
        // 画面外に出たらfadeDownというクラス名を外す
        }
        });
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function (){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動く場合の記述
$(window).on('load', function(){

    fadeAnime();/* アニメーション用の関数を呼ぶ*/

  });// ここまで画面が読み込まれたらすぐに動く場合の記述