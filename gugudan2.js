 //pure함수 3: 구구단 게임(2번째 페이지)
    //문제 출제
    let ques = randomInt() + "*" + randomInt();

    //이용자의 답 입력
    let user = prompt(ques + "값은 무엇일까요?");
    if (user == null) { //취소 버튼 입력
        let ret = confirm("종료하시겠습니까?"); //게임 종료 시, 종료 확인 묻는 메세지
        if(ret == true) 
        document.write("게임을 종료합니다.");
    }
    else {
        let ans = eval(ques); //구구단 정답 계산
        if (ans == user) 
            document.write("정답입니다.");
        else
            document.write("오답입니다.");
        document.write(ques + "=" + "<span>"+ ans+ "</span>입니다.<br>");
    }