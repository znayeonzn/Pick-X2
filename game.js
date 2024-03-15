 //이벤트 함수1: DOM 객체의 이벤트 리스너 프로퍼티에 리스너 등록
let game;
function init() {
	game = document.getElementById("game");
	game.onmouseover = over;	//over()를 리스너로 등록
	game.onmouseout = out;		//out()를 리스너로 등록
}
function over() {
	game.style.backgroundColor = "Orange"; //마우스 올려놓았을 때
}
function out() {
	game.style.backgroundColor = "white"; //마우스  떼었을 때
}
