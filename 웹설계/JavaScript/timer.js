// 1초 후에 함수 실행
// setTimeOut(함수, 시간)
setTimeout(function () {
    console.log("1초가 지났습니다.");
}, 1000);

// 1초마다 함수 실행 (종료는 Ctrl+C)
// setInterval(함수, 시간)
id = setInterval( function () {
    console.log("1초 마다 호출됩니다.");
}, 1000);

// clearInterval(아이디)
setTimeout(function () {
    clearInterval(id); // 3초 후에 타이머 제거
}, 3000);