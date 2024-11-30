console.log(window)
console.log(document)
console.log($(window))
console.log($(document))



// jQuery 에서는 이벤트 이름으로 메서드가 존재함
//  요소.click(function(){}), 요소.hover(function(){},function(){})
// 클릭했을때
$('.p-msg').click(function(){
    //$('.p-msg').css('color','red')
})

$('.num').click(function(){
    //$(this).css('color','blue')
})

$('.num').on('click',function(){
    //$(this).css('color','pink')
})

const nums = document.querySelectorAll('.num')
for(let i = 0 ; i < nums.length; i++){
    
    nums[i].addEventListener('click',()=>{
        nums[i].style.color = 'blue'
    })
    
}

// hover
$('.div-hover').hover(function(){
    $(this).addClass('hover')

},function(){
    $(this).removeClass('hover')
})

$(window).scroll(function(){
    console.log('scroll')
})


// 키보드 이벤트

$('.input-key').keydown(function(){
    this.addEventListener('keydown',(event)=>{
        console.log('scroll')
        // 방향키 아래
        if(event.code === "ArrowLeft"){
            this.val = '레프트'
        }else if(event.code === "ArrowRight"){
            // console.log('오른쪽방향키')
            
        }else if(event.code === "ArrowUp"){
            // console.log('위쪽방향키')
            
        }else{
            // console.log('아래방향키')
    
        }
    })
})


$('#todo-form').submit(function(e){
    const inputvalue = $('input[name="todo').val()
    e.preventDefault();
    $('.todos').append(`<li>${inputvalue}</li>`)
    $('input[name="todo').val('')
})

$('#todo-form input').keydown(function(){
    this.addEventListener('keydown',function(){
        
    })
})