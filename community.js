
				//1번 문제; 현재 시간 Date 객체 생성
				let current = new Date(); 
				if (current.getSeconds() % 2 ==0)
					document.body.style.backgroundColor = "NavajoWhite";
				else
					document.body.style.backgroundColor = "Pink";

				document.write("현재 시간: ");
				document.write(current.getHours(), "시/");
				document.write(current.getMinutes(), "분/");
				document.write(current.getSeconds(), "초/");
				document.write("입니다!");

