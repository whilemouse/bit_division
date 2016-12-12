# bit_division
/ 연산자를 사용하지 않는 나눗셈(division without division operator) 

연산 프로세스
비트 연산을 이용한 나눗셈. 비트 연산은 2^n 으로만 계산 되므로 덧셈과 마이너스 연산자를 사용함.
피제수 : a
제수 : b
임시 몫 : tq
몫 : q
나머지 : r
a = b * q^n + r

사용법
1. /index.html 실행
	1.1 "나눗셈 콘솔 실행" 버튼 클릭( 수동 테스트 )
	1.2 "/ 연산자와 비교테스트" 버튼( 자동 테스트 )
	1.3 "기타 함수 Test" 버튼( 모듈 테스트)

2. 나눗셈 속도 비교 확인
1) / 연산자를 통한 나눗셈
2) 반복문을 통한 나눗셈
3) 비트연산을 이용한 나눗셈
위 세 개의 속도를 측정 한 경우, 1)과 3)이 동일한 성능을 가지고 있고, 2)이 안좋은 성능을 가지고 있음.

속도 측정 결과
http://jindo.dev.naver.com/jsMatch/index.html?d=278	


Operation process
division by bit operation. bit operation used addition and subtraction because that is 2^n.
dividend : a
divisor : b
temp quotient: tq
quotient = q
remainder : r
a = b * q^n + r

How To Use
go /index.html 
	1.1 "나눗셈 콘솔 실행" button click( manual test )
	1.2 "/ 연산자와 비교테스트" button click( auto test )
	1.3 "etc function Test" button click( module test )


2. Compare division speed
1) Division by '/' operation
2) Division by loop
3) Division by bit division
1) and 3) are equal performance, but 2) is worse.

Performance measure Result
http://jindo.dev.naver.com/jsMatch/index.html?d=278	