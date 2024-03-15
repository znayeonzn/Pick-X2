//이벤트 함수4: 마우스에 따라 위치 표시

let loc = document.getElementById("loc"); 
    function where(e) {
        let text = "버튼=" + e.button +"<br>";
        text += "(screenX, screenY)=" + e.screenX + "," + e.screenY + "<br>"; //스크린 기준 마우스 좌표 프로퍼티 생성
        text += "(clientX, clientY)=" + e.clientX + "," + e.clientY+ "<br>";    // 브라우저 윈도우의 문서출력 영역 내에서의 마우스 좌표 프로퍼티 생성
        text += "(offsetX, offsetY)=" + e.offsetX + "," + e.offsetY + "<br>"; //타겟 객체 내에서의 마우스 좌표 프로퍼티 생성
        text += "(x,y)=" + e.x + "," + e.y + "\n"; //타겟 객체의 부모 객체 내에서의 마우스 좌표 프로퍼티 생성
        loc.innerHTML = text;
    }