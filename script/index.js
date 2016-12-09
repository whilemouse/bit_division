$(document).ready(function(){	
	btnListener();
	// 테스트 실행
	excuteTest();
});

function btnListener() {
	// 나눗셈 콘솔 리스너
	$("#excute_division").click( divide );

	// 테스트 버튼 리스너
	$("#btn_test_divide_process").click( function() {
		test("testDivideProcess", testDivideProcess) ;
	});
	$("#btn_test_form_check").click( function() {
		test("testFormCheck", testFormCheck) ;
	});
	$("#btn_test_divide").click( function() {
		test("testDivideProcess", testDivideProcess) ;
	});
	$("#btn_test_auto_divide").click( function() {
		test("testAutoDivide", testAutoDivide) ;
	});
}

