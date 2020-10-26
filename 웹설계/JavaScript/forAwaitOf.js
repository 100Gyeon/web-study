const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');
(async () => {
    for await (promise of [promise1, promise2]) {
        console.log(promise);
    }
})();

/*
for await (변수 of 프로미스 배열)
resolve된 프로미스가 변수에 담겨서 나옴
await을 사용하기 때문에 async 함수 안에서 해야 한다. 
*/