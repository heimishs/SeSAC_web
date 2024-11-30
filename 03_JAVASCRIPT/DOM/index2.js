// 태그 내부에 있는 내용 변경

/*
innerText
textContent
innerHTML

*/

let div1 = document.getElementById('div1')
// Text = 두칸 이상의 공백문자 제거, 앞뒤로 공백문자 제거
div1.innerText = '  여기는 <b>첫번째</b> 태그입니다 &hearts;  '
console.log(div1.innerText)
div1.innerHTML = '  여기는 <b>첫번째</b> 태그입니다 &hearts;'
console.log(div1.innerHTML)
// Content = 두칸 이상의 모든 공백 포함
div1.innerContent = '  여기는 <b>첫번째</b> 태그입니다 &hearts;    '
console.log(div1.innerContent)

console.clear()
// 속성에 접근
/*
요소.속성명
getAttribute() 속성값을 가져오기
setAttribute() 속성값을 설정하기
*/

// pooh, naver

let naver = document.getElementById('naver');
naver.setAttribute("href","https://google.com")
naver.innerText = "구글로이동"
console.log(naver.getAttribute("href"))

console.log(document.querySelector("#pooh").src)
console.log(document.querySelector("#pooh").alt = "푸사진")


// css 변경
let h1 = document.querySelector("h1")
let list = document.querySelectorAll("li")

for(let el of list){
    // 인라인스타일로 적용하는 방법
    // el.style.color = "#fff"
    // el.style.backgroundColor = "pink"
    // el.style.fontSize = "1.3rem"

    // 클래스추가하기
    // el.classList.add("friends")
}


h1.classList.add('add-h1')
h1.classList.remove('add-h1')

// 클래스가 이미 있으면 없애고 없으면 클래스를 추가해줌
h1.classList.toggle('add-h1')

// 클래스 유무확인
console.log(h1.classList)

//클래스가 있는지 없는지 true/false
console.log(h1.classList.contains('add-h1'))


// 부모, 자식, 형제 노드 찾기
let friends = document.querySelector('#friends')
let tigger = document.querySelector('#tigger')

console.clear()

console.log('자식노드 접근')
console.log(friends.children)
console.log(friends.children)

console.log('부모노드 접근')
// 배열 형태가 아닌 요소 자체를 가져옴
console.log(tigger.parentNode)
console.log('--형제 노드 접근--')
console.log('이전 형제',tigger.previousElementSibling)
console.log('다음 형제',tigger.nextElementSibling)

// 노드 생성, 추가, 삭제
let container = document.querySelector('.container')

// 요소 생성
let p = document.createElement('p')
p.innerHTML = "새로추가된"
p.style.fontWeight = "700"
p.style.backgroundColor = "red"

// 요소추가 container 의 맨 뒤 자식요소로 추가됨
container.append(p)

let p2 = document.createElement('p')
let p3 = document.createElement('p')

p2.innerHTML = "p태그 두번째"
p3.innerHTML = "p태그 세번째"

p2.classList.add('p-2')
p3.classList.add('p-3')

container.append(p2)
container.append(p3)

// 여러개 추가 가능
container.append(p2,p3)

// prepend 선택된 요소의 맨 앞 자식으로 추가

let el = document.createElement('li')
el.innerText = "캉가"
el.classList.add('friends')
friends.prepend(el)


// before
let h3 = document.createElement('h3')
h3.innerText = 'h3'

h1.before(h3)

// after
let h2 = document.createElement('h2')
h2.innerText = 'h2'

h1.after(h2)

// 요소 삭제 remove, removechild
let firstli = document.querySelector('li')
let ul = firstli.parentElement

// 삭제할요소.remove
// firstli.remove()

// 부모요소.삭제할 자식요소
ul.removeChild(firstli)

// div container

let cont = document.querySelector('.container')

let div = document.createElement('div')
let img = document.createElement('img')
let span = document.createElement('span')

img.setAttribute('src','../../02_CSS/img/26139_img.png')
img.setAttribute('alt','오울')
span.innerText = '이요르'

cont.append(div)
div.append(img)
div.append(span)
