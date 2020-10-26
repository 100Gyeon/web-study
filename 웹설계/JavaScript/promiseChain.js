/* Promise Chaining 예제 */

new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000); // 1초 지나고 다같이 결과 출력된다.
}).then(function(result) {
    console.log(result); // 1
    return result * 2;
}).then(function(result) {
    console.log(result); // 2
    return result * 2;
}).then(function(result) {
    console.log(result); // 4
    return result * 2;
});

// promise.then을 호출하면 다시 promise를 반환하므로 .then을 호출 가능