/* 
동작의 종류: click, dblclick, scroll, change, submit, ...
- addEventListener(동작의 종류, function(){})
- <태그 onchange="함수의이름()" onclick="함수의이름()"></태그>
   on[동작의 종류] 속성으로 이벤트 제어 가능
*/

const btn1 = document.querySelector('.btn--black')
const btn2 = document.querySelector('.btn--green')
const btn3 = document.querySelector('.btn--blue')
const btn4 = document.querySelector('.btn--red')

// btn1.addEventListener("동작의이름",function(){동작})
btn1.addEventListener("click",function(){
    console.log('버튼1이 클릭되었습니다!!!!')
    alert('버튼1을 클릭하셨군요!!!!')
})

btn1.addEventListener("mouseover", function(){
    // this는 자기 자신을 가리킴
    // btn1.style.backgroundColor="aqua"
    this.style.backgroundColor="aqua"
})

// ** btn2를 눌렀을 때, div를 자식으로 붙이기
const container = document.getElementById('container')
btn2.addEventListener('click',()=>{
    let div = document.createElement('div')
    div.innerText = "hi!"
    div.style.backgroundColor="pink"

    container.append(div)
})

// ** btn3
// 만들어진 div의 배경색 변경
// 함수 호출시 괄호 필수적으로 생략해야함, 괄호 작성시 즉시 호출
btn3.addEventListener('click', changeColor)

function changeColor(){
    const divs = document.querySelectorAll('#container div')
    // [div,div,div, ...]
    for(let div of divs){
        div.style.backgroundColor="skyblue"
    }

    // 막내요소만 노랑색으로 변경
}

// ** btn4
// 배경색 노란색으로 변경, 글자색 검정색으로 변경
btn3.addEventListener("click",changeBtnColor)
btn4.addEventListener("click",changeBtnColor)
function changeBtnColor(){
    this.style.backgroundColor="yellow"
    this.style.color = "#000"
}

// *btn5
// alert창 띄우기
function sayHi(){
    alert('안녕하세요!! 버튼5입니다!!')
}

// ==================================

const btn = document.querySelector('button')
const input = document.querySelector('input')

// 클릭이벤트
btn.addEventListener('click',function(event){
    // 클릭 이벤트에 관한 정보
    console.log(event)
    // 어떤요소가 클릭되었는지확인 가능
    console.log(event.target)
})


// 키보드 이벤트

input.addEventListener('keydown',(event)=>{
    // console.log(event.code)
    // console.log(event.key)
    // console.log(event.keyCode)
    // 방향키 아래
    if(event.code === "ArrowLeft"){
        // console.log('왼쪽방향키')
    }else if(event.code === "ArrowRight"){
        // console.log('오른쪽방향키')
        
    }else if(event.code === "ArrowUp"){
        // console.log('위쪽방향키')
        
    }else{
        // console.log('아래방향키')

    }
})

// scroll 이벤트
window.addEventListener('scroll',(event)=>{
    // console.log(scrollY)

    if(scrollY >= 700){
        // document.querySelector('.pos').style.opacity = "1"
    }
})


// form 이벤트
// submit

const todoForm = document.querySelector('#todo-form')
const todos = document.querySelector('.todos')

todoForm.addEventListener('submit',function(e){
    // 새로고침 막음 폼 제출을 막음
    e.preventDefault();

    // 폼 내부의 인풋창 선택
    const todoInput = document.querySelector('input[name="todo"]')

    // 요소가 가진 데이터 출력
    // console.dir(todoInput)
    // 요소가 가진값 출력
    // console.dir(todoInput.value)

    
    // if(todoInput.value === ""){
    //     alert('공백금지')
    // }else if(todoInput.value){

    // }else
    // {
    //     const todo = todoInput.value
    //     const lis = document.createElement('li')
    //     lis.innerText = todo;

    //     todos.appendChild(lis)
    //     todoInput.value = ""
    // }

    // trim 으로 공백자르기
    const todo = todoInput.value.trim()

    if(todo !== ""){
        
        const lis = document.createElement('li')
        lis.innerText = todo;

        todos.appendChild(lis)
        todoInput.value = ""
    }else{
        alert('공백')
    }
    todoInput.value = ""
})


// change 이벤트
const chginput = document.querySelector('#change-input')
chginput.addEventListener('change',(event)=>{
    
})
chginput.addEventListener('input',(event)=>{
    // input창에 변경이 발생되면 일어나는 이벤트

    let intro = document.querySelector('.intro')
    intro.innerHTML = event.value
})


