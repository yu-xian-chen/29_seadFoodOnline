// ---------------購物車
// 訂單確認
// 按鈕: + a class="btn-add"
// 按鈕: - a class="btn-reduce"
// 按鈕: X a class="delete-x
// 合計: span class="end-total"

//訂單確認
// --刪除
$(document).ready(function(){
    $('.delete-x').click(function(){ //點子曾，父父層display:none =>選取器closest('className')
        $(this).closest('.item-row').css('display','none')
    })
})

// + -
window.addEventListener("load", function(){
	//-------------------
	let btnPluses = document.getElementsByClassName("btn-add");
	let btnMinuses = document.getElementsByClassName("btn-reduce");
	let qtys = document.getElementsByClassName("qty");
	for(let i=0;i<btnPluses.length;i++){
		//------註冊 + 按鈕
		btnPluses[i].onclick = function(){
			qtys[i].value = parseInt(qtys[i].value) + 1 ;
		}

		//-----註冊 - 按鈕
		btnMinuses[i].onclick = function(){
			if(qtys[i].value>0){
				qtys[i].value=qtys[i].value -1;
			}
		}
	}
})

//--加總  做到這裡
$(document).ready(function(){ //加總小計
    $('.qty').change(function(){ //當input的value改變 執行以下
        let itemValue= document.querySelector('.qty').value
        $('.one-item-total').text(`${itemValue}`) //小計欄位的值顯示加總(變數)
    }) 
})




// 折扣碼
$(document).ready(function(){

})




// 冷凍運送方式





// 冷凍包裝方式





// 付款方式





