// 가능 (호이스팅 O)
sayHello() 

// 불가 (호이스팅 X)
// sayBye() 

function sayHello() {
    let hello = "Hello"
    console.log(hello)
}

sayHello()

// 익명 함수
const sayBye = function() {
    console.log("Bye")
}

sayBye()