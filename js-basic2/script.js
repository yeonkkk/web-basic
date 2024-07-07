const inputType = document.querySelector("#typing");
const inputClick = document.querySelector("#push");

inputType.onkeydown = function() {
    console.log("타이핑되고 있어요.");
}

inputClick.onclick = function() {
    console.log("클릭되고 있어요.");
}
