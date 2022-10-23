// ------側邊欄連動innerHTML

// 放進購物車 還未連動  ----OK
$(document).ready(function(){
  $('.car-btn').click(function(){
    $(this).css({
        color:'black'
    }).text('已加入')
  })
  
})

// 文字改變-path & 主標 ----mata
// $(document).ready(function(){
//   $('.forMainJs').click(function(){
//     $('#main-product').text(`this.value`) 
    
//   // path
//     $('#where').text(`e.value`) 

//   })


// })

// 文字改變-path & 主標 ----mata
//目前寫法 人工智障:一個一個設 待改進 我不會用e
$(document).ready(function(){
  //組合包
  $('#comby').click(function(e){
    $('#main-product').text(`組合包`) 
  // path
    $('#where').text(`組合包`) 
  })

  // 整尾魚oneFish
  $('#oneFish').click(function(e){
    $('#main-product').text(`整尾魚`) 
  // path
    $('#where').text(`整尾魚`) 
  })

  // 半條魚halfFish
  $('#halfFish').click(function(e){
    $('#main-product').text(`半條魚`) 
  // path
    $('#where').text(`半條魚`) 
  })

  // 魚骨頭 fishBone
  $('#fishBone').click(function(e){
    $('#main-product').text(`魚骨頭`) 
  // path
    $('#where').text(`魚骨頭`) 
  })

  // 私房小菜 dish
  $('#dish').click(function(e){
    $('#main-product').text(`私房小菜`) 
  // path
    $('#where').text(`私房小菜`) 
  })

  // 春 navSpring
    $('#navSpring').click(function(e){
    $('#main-product').text(`春`) 
  // path
    $('#where').text(`春`) 
  })

  // 夏 navSummer
    $('#navSummer').click(function(e){
    $('#main-product').text(`夏`) 
  // path
    $('#where').text(`夏`) 
  })

  // 秋 navFall
    $('#navFall').click(function(e){
    $('#main-product').text(`秋`) 
  // path
    $('#where').text(`秋`) 
  })

  // 冬 navWinter
    $('#navWinter').click(function(e){
    $('#main-product').text(`冬`) 
  // path
    $('#where').text(`冬`) 
  })

  // 季節分類
    // 春
    // 白帶 taito 
    $('#taito').click(function(e){
      $('#nextPageShow').text(`白帶`) 
    // path
      $('#seasonPath').text(`春`)
      $('#lastPath').text(`白帶`) 
    })

    // 飛魚 tobi 
    $('#tobi').click(function(e){
      $('#nextPageShow').text(`飛魚`) 
    // path
      $('#seasonPath').text(`春`)
      $('#lastPath').text(`飛魚`) 
    })

    // 姬鯛 hime 
    $('#hime').click(function(e){
      $('#nextPageShow').text(`姬鯛`) 
    // path
      $('#seasonPath').text(`春`)
      $('#lastPath').text(`姬鯛`) 
    })    

    // 竹夾 aji
    $('#aji').click(function(e){
      $('#nextPageShow').text(`竹夾`) 
    // path
      $('#seasonPath').text(`春`)
      $('#lastPath').text(`竹夾`) 
    }) 
    
    // 夏
    $('#summerTaito').click(function(e){
      $('#nextPageShow').text(`白帶`) 
    // path
      $('#seasonPath').text(`夏`)
      $('#lastPath').text(`白帶`) 
    }) 

    $('#isaki').click(function(e){
      $('#nextPageShow').text(`黃雞`) 
    // path
      $('#seasonPath').text(`夏`)
      $('#lastPath').text(`黃雞`) 
    }) 

    $('#summerHime').click(function(e){
      $('#nextPageShow').text(`姬鯛`) 
    // path
      $('#seasonPath').text(`夏`)
      $('#lastPath').text(`姬鯛`) 
    }) 

    $('#mahimahi').click(function(e){
      $('#nextPageShow').text(`鬼頭刀`) 
    // path
      $('#seasonPath').text(`夏`)
      $('#lastPath').text(`鬼頭刀`) 
    }) 

    // 秋
    $('#akiIsaki').click(function(e){
      $('#nextPageShow').text(`黃雞`) 
    // path
      $('#seasonPath').text(`秋`)
      $('#lastPath').text(`黃雞`) 
    }) 

    $('#kann').click(function(e){
      $('#nextPageShow').text(`紅甘`) 
    // path
      $('#seasonPath').text(`秋`)
      $('#lastPath').text(`紅甘`) 
    }) 

    $('#katuo').click(function(e){
      $('#nextPageShow').text(`鰹魚`) 
    // path
      $('#seasonPath').text(`秋`)
      $('#lastPath').text(`鰹魚`) 
    }) 

    // 冬
    $('#kamasu').click(function(e){
      $('#nextPageShow').text(`尖梭`) 
    // path
      $('#seasonPath').text(`冬`)
      $('#lastPath').text(`尖梭`) 
    }) 

    $('#haki').click(function(e){
      $('#nextPageShow').text(`剝皮魚`) 
    // path
      $('#seasonPath').text(`冬`)
      $('#lastPath').text(`剝皮魚`) 
    }) 
    
    $('#huyuKann').click(function(e){
      $('#nextPageShow').text(`紅甘`) 
    // path
      $('#seasonPath').text(`冬`)
      $('#lastPath').text(`紅甘`) 
    }) 

    $('#sawara').click(function(e){
      $('#nextPageShow').text(`鰆魚`) 
    // path
      $('#seasonPath').text(`冬`)
      $('#lastPath').text(`鰆魚`) 
    }) 


})








// ------商品------------
//點側邊欄換innerHTML、切換innerHTML
//建立函數、事件聆聽


// function changeWord(e){
//   let txt = e.target.value;
//   document.getElementById("main-product").innerHTML= txt ;

// }
  
// function init(){
//     document.querySelector(".forMainJs").onclick = changeWord;  //點擊時執行function

// } //window.onload
  
// window.addEventListener("load", init, false);




