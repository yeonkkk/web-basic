const btn1 = document.getElementById("one");
const btn2 = document.getElementById("two");
const btn3 = document.getElementById("three");

const hadleClick = function(){
    console.log("저를 클릭하셨나요?")
}

// 인자로 전달되는 함수: 콜백함수
btn2.addEventListener('click', hadleClick);

// 다른 핸들러도 등록 가능
btn2.addEventListener('click', function(){
    console.log("다른 핸들러 등록!")
});

// 핸들러 제거 가능
btn2.removeEventListener('click', hadleClick);


const hadleClick2 = function(event){
    console.log(event.target)
}

// 이벤트 객체
btn1.addEventListener('click', hadleClick2);
btn2.addEventListener('click', hadleClick2);
btn3.addEventListener('click', hadleClick2);

