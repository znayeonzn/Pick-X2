//pure함수2: 등급 출력하는 함수 (1번째 페이지)
//프로토타입 Name 작성
function Name(nickname, score) {
    //nickname, score 프로퍼티 작성
        this.nickname = nickname;
        this.score=score;
        this.getGrade = function() { //getGrade() 메소드 작성
            if(this.score > 70) return "A등급";
            else if(this.score > 50) return "B등급";
            else return "C등급";
        }
    }