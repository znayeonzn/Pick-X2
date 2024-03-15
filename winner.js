//pure함수1: 1등 점수 출력 (2번째 페이지)
//프로퍼티 만들기: 생성자 함수 생성
function Check(name, score, hap) {

        //프로토타입 만들기: 생성자 함수 작성
        this.name = name;
        this.score = score;
        this.hap = hap;

        //메소드  만들기
        this.res= function() {return this.hap;}
        this.sum = function(input) {
            this.hap += input;
            return input;
        }
    }

