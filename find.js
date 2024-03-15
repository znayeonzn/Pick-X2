//이벤트 함수3: 선택된 라디오버튼 출력

function findChecked() {
	let found = null;
	let kcal = document.getElementsByName("cal");	//라디오버튼 객체 알아내기
	for (let i=0; i<kcal.length; i++) {
		if (kcal[i].checked == true) //배열을 통해 선택된 라디오버튼 알아내기
			found = kcal[i];
	}
	if (found != null) //라디오버튼이 선택 되었을 떄
		alert(found.value + "이 선택되었습니다.");
	else
		alert("선택된 것이 없습니다."); //라디오버튼이 생성되지 않을 때
}
