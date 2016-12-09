function excuteTest() {
	test("함수가 존재하는지 체크", functionExistCheck);
}

function functionExistCheck() {
	ok(typeof divide === "function", "divide 함수 존재");
	ok(typeof formCheck === "function", "formCheck 함수 존재");
	ok(typeof divideProcess === "function", "divideProcess 함수 존재");
}

function testDivide() {
	var divide_obj = Object;
	divide_obj = divide();
	if ( divide_obj !== false ) {
		equal(typeof divide_obj , "object", "divide 오브젝트를 정상적으로 반환");
		equal(typeof divide_obj.dividend , "number", "피제수는 자연수");
		equal(typeof divide_obj.divisor , "number", "제수는 자연수");
		equal(typeof divide_obj.quotient , "number", "몫은 자연수");
		equal(typeof divide_obj.remainder , "number", "나머지는 자연수 혹은 0");
	} else {
		ok(true, "입력값을 입력하지 않은 상태");
	}
}

function testFormCheck() {
	var form_check_dividend;
	var form_check_divisor;

	form_check_dividend =  formCheck("dividend");
	form_check_divisor =  formCheck("divisor");

	if( form_check_dividend !== false ) {
		equal(typeof form_check_dividend, "number", "피제수 폼 체크 통과");
	} else {
		ok(true, "입력값을 입력하지 않은 상태");
	}

	if( form_check_divisor !== false ) {
		equal(typeof form_check_divisor, "number", "제수 폼 체크 통과");
	} else {
		ok(true, "입력값을 입력하지 않은 상태");
	}
	
}

function testDivideProcess() {
	var divide_process_obj = new Object();
	var test_obj = new Object();

	divide_process_obj = divide();
	test_obj = {
		dividend : null,
		divisor : null,
		quotient : divide_process_obj.quotient,
		remainder : divide_process_obj.remainder
	};

	if( divide_process_obj !== false ) {
		equal(test_obj.quotient ,Math.floor(divide_process_obj.dividend / divide_process_obj.divisor), "/ 연산자를 사용한 몫과 동일");
		equal(test_obj.remainder , divide_process_obj.dividend % divide_process_obj.divisor, "% 연산자를 사용한 몫과 동일");	
	} else {
		ok(true, "입력값을 입력하지 않은 상태");
	}
}

function testAutoDivide() {
	var dividend;
	var divisor;

	var bit_divide_obj = {
		quotient : null,
		remainder : null
	}

	var dec_divide_obj = {
		quotient : null,
		remainder : null
	}

	var divide_array = new Array();
	var count;

	count = $("#compare_count").val();

	for(var i=0; i<count; i++) {
		dividend = Math.floor(Math.random() * 100000 ) + 1;
		divisor = Math.floor(Math.random() * 1000 ) + 1;

		divide_array = divideProcess(dividend, divisor);
		
		bit_divide_obj.quotient = divide_array[0];
		bit_divide_obj.remainder = divide_array[1];

		dec_divide_obj.quotient = Math.floor(dividend / divisor);
		dec_divide_obj.remainder = dividend % divisor;

		equal(bit_divide_obj.quotient ,dec_divide_obj.quotient, "/ 연산자를 사용한 몫과 동일");
		equal(bit_divide_obj.remainder , dec_divide_obj.remainder, "% 연산자를 사용한 몫과 동일");	
	}
	
}