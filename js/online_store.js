// ------側邊欄連動innerHTML

// 放進購物車 還未連動
$(document).ready(function(){
  $('.car-btn').click(function(){
    $(this).css({
        color:'black'
    }).text('已加入')
  })
  
})

// 文字改變-path & 主標
$(document).ready(function(){
  $('.forMainJs').click(function(e){
    $('#main-product').text('e.value') 
    
  // path
    $('#where').text('e.value') 

  })


})