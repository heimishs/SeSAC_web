console.log(document)
console.log(document.URL)
console.log(document.documentElement)
console.log(document.head)
console.log(document.body)
console.log(document.title)

// getElementById
console.log(document.getElementById('green'))
console.log(document.getElementById('red'))

console.clear()
// getElementsByClassName
console.log(document.getElementsByClassName('pink'))
console.log(document.getElementsByClassName('pink')[0])
console.log(document.getElementsByClassName('pink')[1])
console.log(document.getElementsByClassName('others'))

// 태그로 가져오기
console.log(document.getElementsByTagName('div'))

// getElementsByName (name 속성값)
console.log(document.getElementsByName('id'))

// querySelector('선택자')
console.log(document.querySelector('.pink'))
console.log(document.querySelector('.others'))
console.log(document.querySelector('#green'))
console.log(document.querySelector('#red'))
console.log(document.querySelector("[name='id']"))

// querySelectorAll
console.log(document.querySelectorAll('.pink'))
console.log(document.querySelectorAll('#red'))

let pinks = document.querySelectorAll('.pink');

console.clear()
for(let i = 0; i < pinks.length; i++){
    console.log(pinks[i])
}

