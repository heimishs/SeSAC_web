const colors = ['#fff','#ddd','red']
const sayhi = function(){
    console.log('hi module1')
}

function sayName(name){
    console.log(`내 이름은 ${name}`)
}

class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }

    getBornYear() {
        return new Date().getFullYear() - this.age
    }
}


// commonJS 방식

module.exports{
    colors,
    sayhi,
    sayName
};