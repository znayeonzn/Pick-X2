//pure함수2: 등급 출력하는 함수(2번째 페이지)
//winner, loser 객체 생성
let winner = new Name("주아연", 80);
let loser = new Name("김경림", 50);
document.write(winner.nickname + "의 등급은 " + winner.getGrade() +"<br>");
document.write(loser.nickname+ "의 등급은 " + loser.getGrade() +"<br>");