//pure함수1: 1등 점수 출력 (2번째 페이지)
 //new 연산자 이용하여 포인트 객체 생성
    let point = new Check("주아연", "50", 70);

    //객체 활용
    document.write("1등 : ");
    document.write(point.name + "/");
    document.write("기본 점수: " + point.score+ "/");
    
    document.write("현재 점수(기본 점수 포함): " +point.hap+ "<br>");

    point.sum(10);
    document.write("5월 30일 추가 점수 10점 획득 후, 최종 점수는" + point.res());