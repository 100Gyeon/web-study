// setTimeOut(함수, 시간)
// 아래 예제는 1초 후에 함수 실행
setTimeout(function () {
    console.log("1초가 지났습니다.");
}, 1000);

// setInterval(함수, 시간)
// 아래 예제는 1초마다 함수 실행 (종료는 Ctrl+C)
let id = setInterval( function () {
    console.log("1초 마다 호출됩니다.");
}, 1000);

// clearInterval(아이디)
// 특정 시간마다 실행하던 함수 호출 정지
setTimeout(function () {
    clearInterval(id);
}, 3000); // 3초 후에 타이머 제거