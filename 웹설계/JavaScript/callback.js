function callTenTimes(callback) {
    for(let i = 0; i < 10; i++) {
        callback(); // 매개변수로 전달된 함수 호출
    }
}

callTenTimes(function () {
    console.log("함수 호출");
});