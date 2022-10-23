// tab  
function GethashID (hashIDName){// 切換tab的方法
    if(hashIDName){
      //tab設定
      $('.tab li').find('a').each(function() { //取得tab裡的a 
        var idName = $(this).attr('href'); //#錨定ID取得
        if(idName == hashIDName){ //抓取的ID與錨定的ID相同時
          var parentElm = $(this).parent(); //tab的父層(li)
          $('.tab li').removeClass("active"); //舊有.active狀態移除
          $(parentElm).addClass("active"); //新按的li加.active
      
          //選取區域設定
          $(".area").removeClass("is-active"); //原本.is-active狀態去除
          $(hashIDName).addClass("is-active"); //選取的區域增加.is-active狀態 
        }
      });
    }


  }
  
  //按tab的時候
  $('.tab a').on('click', function() {
    var idName = $(this).attr('href'); //#id取得  
    GethashID (idName);//讀取tab
    return false; //a標籤無效
  });


  $(window).on('load', function () {
      $('.tab li:first-of-type').addClass("active"); //最開始li加.active
      $('.area:first-of-type').addClass("is-active"); //最開始.area + .is-active
    var hashName = location.hash;  // #
    GethashID (hashName);
  });


  // -----------------------跟著選取標籤轉換下方顯示內容
  // function openServe(evt,serve){
  //   //宣告會用到的變數
    
  //   var i , textcontent ,tablinks
  //   //抓到所有class="textcontent"元素，並且把他們藏起來
  //   textcontent = document.getElementsByClassName("textcontent");
  //   for(i=0;i<textcontent.length;i++){
  //     textcontent[i].style.display ="none";
  //   }
  //   //抓到所有tablinks 取消.active
  //   tablinks = document.getElementsByClassName("tablinks");
  //   for( i=0 ; i < tablinks.length ; i++){     tablinks[i].className=tablinks[i].className.replace("active","");
  //   }
  //   //顯示當前的tab與active的效果
  //   document.getElementById(serve).style.display = "block";
  //   evt.currentTarget.className += " active";
  // }


  $(document).ready(function(){
  // 收藏最愛
    $('.star-btn').click(function(){
      $(this).css({
          color:'black'
      }).text('已加入')
    })
    
    // 對應tab顯示該區
    // $(document).ready(function(){
    //   $('#skill').click(function(){
    //     alert('HI');
    //   })
      
    // })
  $(`.skill-btn`).click(function(){
      $('.fish-class').removeClass('none').addClass('block')
      $('.fish-recipe-section').removeClass('block').addClass('none')
      $('.season-recipe-section').removeClass('block').addClass('none')
  })

  $(`.fish-recipe-btn`).click(function(){
      $('.fish-class').removeClass('block').addClass('none')
      $('.fish-recipe-section').removeClass('none').addClass('block')
      $('.season-recipe-section').removeClass('block').addClass('none')
  })

  $(`.season-recipe-btn`).click(function(){
      $('.fish-class').removeClass('block').addClass('none')
      $('.fish-recipe-section').removeClass('block').addClass('none')
      $('.season-recipe-section').removeClass('none').addClass('block')
  })






  })

