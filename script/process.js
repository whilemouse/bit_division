/*
function divideProcess( dividend,  divisor) 	dividend : 피제수, divisor : 제수
	parameter type: number, number
	return type: array

	ex) 13 / 5
	1) 제수가 피제수에 가까워 질때까지 left shift	
	a = 13
		1회차
			b =  5*2^1 (10)
			tq = 1*2^1 (2)
		2회차
			b = 10*2^1 (20)
			tq = 2*2^1 (4)
	2) 제수를 right shift하며 자리수 별로 나눗셈을 함
		b  = 20/2^1 (10)
		tq = 4/2^1 (2)

	3) 특정 자리수에서 나눗셈을 한 후, 몫은 더하고 나머지는 마이너스함
		r = 13 - 10 (3)
		q = 2
*/
function divideProcess( dividend,  divisor) {
	var result_array = new Array();
	
	var tmp_quotient = 1;	// 임시 몫
	var quotient = 0;	// 몫
	var remainder = 0;	// 나머지

	while( divisor <= dividend ) {	// 1
		divisor <<= 1;
		tmp_quotient <<= 1;
	}

	while( tmp_quotient > 1 ) {	// 2
		divisor >>= 1;
		tmp_quotient >>= 1;		
		if( dividend >= divisor ) {	// 3
			dividend -= divisor;
			quotient += tmp_quotient;
		}
	}

	remainder = dividend;
	result_array = [ quotient, remainder ];
	return result_array;
}

/*
function formCheck(type) 	
	partameter type: string(dividend: 피제수, divisor: 제수)
	return type: number

	입력값을 받아 유효성 검사를 함
	(0 < 제수 < 100000), N(0 < 피제수 < 1000)인 두 개의 자연수

*/
function formCheck(type) {
	if( type === "dividend") {
		var pattern = /^([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9]|[1-9][0-9][0-9][0-9][0-9])$/;	// 0 < M < 100000
		var input_text = "나눌 값을 입력하세요";
		var invalid_number_text = "나눌 값은 1부터 99999까지의 자연수를 입력해 주세요";
	}

	if( type === "divisor") {
		var pattern = /^([1-9]|[1-9][0-9]|[1-9][0-9][0-9])$/;	// 0 < N < 1000	
		var input_text = "몇으로 나눌지 입력하세요";
		var invalid_number_text = "몇으로 나눌지 1부터 999까지의 자연수를 입력해 주세요";
	}

	var input = prompt(input_text);
	if( input === null ) {
		return false;
	}
	if( pattern.test(input) === false ) {
		alert(invalid_number_text);
		return false;
	}
	return Number(input);
}
/*
function divide()
	parameter type : null
	return type : Object

	나눗셈 프로세스 실행
*/
function divide() {	
	var dividend;	// 피제수
	var divisor;	// 제수
	var quotient;	// 몫
	var remainder;	// 나머지

	var result_array = new Array();
	var result_obj = new Object();


	dividend = formCheck("dividend");
	if( dividend === false ) {
		return false;
	}
	divisor = formCheck("divisor");
	if( divisor === false ) {
		return false;	
	}

	if( dividend !== false && divisor !== false ) {
		result_array = divideProcess( dividend,  divisor);
		quotient = result_array[0];
		remainder = result_array[1];
		alert(dividend+" / "+divisor +"\n몫 = "+quotient+"\n나머지 = "+remainder);
	}	

	result_obj = {
			dividend : dividend,
			divisor : divisor,
			quotient : quotient,
			remainder : remainder
	}
	return result_obj;
}