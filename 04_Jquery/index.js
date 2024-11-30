console.log('111')

// jQuery 요소선택방법
$("#div1")
console.log($("#div1"))

// 여러요소한번에 적용됨
$('button').css('color','red')

function submitjs(){
    document.getElementById('div1').innerText = "반갑습니다"
    document.getElementById('div1').setAttribute('style','border: 2px solid red')
    
}

function submitjq(){
    $('#div1').text('hello Jquery')
    $('#div1').css('border','3px solid red')
}