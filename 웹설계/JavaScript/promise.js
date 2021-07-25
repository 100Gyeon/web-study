/*
생성자를 통해서 프로미스 객체를 만드는 순간, pending(대기) 상태가 된다.
executor 함수 인자 중 하나인 resolve 함수를 실행하면, fulfilled(이행) 상태가 된다.
executor 함수 인자 중 하나인 reject 함수를 실행하면, rejected(거부) 상태가 된다.
*/
const p = new Promise((resolve, reject) => {
  /* pending */
  setTimeout(() => {
    resolve(); /* fulfilled */
  }, 1000);
});
p.then(); /* p라는 프로미스 객체가 fulfilled 되는 시점에 p.then 안에 설정한 callback 함수가 실행된다. */


/*
then을 설정하는 시점을 정확히 하고,
함수의 실행과 동시에 프로미스 객체를 만들면서 pending이 시작하도록 하기 위해
프로미스 객체를 생성하면서 리턴하는 함수(p)를 만들어 함수(p) 실행과 동시에 then을 설정
*/
function p() {
  return new Promise((resolve, reject) => {
    /* pending */
    setTimeout(() => {
      resolve(); /* fulfilled */
    }, 1000);
  });
}
p().then(() => {
  console.log('1000ms 후에 fulfilled 됩니다.');
});


/*
마찬가지로 프로미스 함수가 rejected 되는 시점에
p.catch 안에 설정한 callback 함수가 실행된다.
*/
function p() {
  return new Promise((resolve, reject) => {
    /* pending */
    setTimeout(() => {
      reject(); /* rejected */
    }, 1000);
  });
}
p()
  .then(() => {
    console.log('1000ms 후에 fulfilled 됩니다.');
  })
  .catch(() => {
    console.log('1000ms 후에 rejected 됩니다.');
  });


/*
executor의 resolve 함수를 실행할 때 인자를 넣어 실행하면,
then의 callback 함수의 인자로 받을 수 있다.
resolve('hello');
then((message) => { ... })
*/
function p() {
  return new Promise((resolve, reject) => {
    /* pending */
    setTimeout(() => {
      resolve('hello'); /* fulfilled */
    }, 1000);
  });
}
p()
  .then(message => {
    console.log('1000ms 후에 fulfilled 됩니다.', message);
  })
  .catch(reason => {
    console.log('1000ms 후에 rejected 됩니다.', reason);
  });


/*
executor의 reject 함수를 실행할 때 인자를 넣어 실행하면,
catch의 callback 함수의 인자로 받을 수 있다.
보통 reject 함수를 실행하며 rejected 되는 이유를 넘기는데,
표준 내장 객체인 Error의 생성자를 이용하여 Error 객체를 만든다.
*/
function p() {
  return new Promise((resolve, reject) => {
    /* pending */
    setTimeout(() => {
      reject(new Error('bad')); /* rejected */
    }, 1000);
  });
}
p()
  .then(message => {
    console.log('1000ms 후에 fulfilled 됩니다.', message);
  })
  .catch(error => {
    console.log('1000ms 후에 rejected 됩니다.', error);
  });


/*
fulfilled 되거나 rejected 된 후에 최종적으로 실행할 것이 있다면,
.finally()를 설정하고, 함수를 인자로 넣는다.
*/
function p() {
  return new Promise((resolve, reject) => {
    /* pending */
    setTimeout(() => {
      reject(new Error('bad')); /* rejected */
    }, 1000);
  });
}
p()
  .then(message => {
    console.log('1000ms 후에 fulfilled 됩니다.', message);
  })
  .catch(error => {
    console.log('1000ms 후에 rejected 됩니다.', error);
  })
  .finally(() => {
    console.log('end');
  });


/*
value가 프로미스 객체인지 아닌지 알 수 없는 경우
value가 프로미스 객체면, resolve된 then 메서드를 실행
                아니면, value를 인자로 보내면서 then 메서드를 실행
*/
Promise.resolve(/* value */);

Promise.resolve(new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 1000);
})).then(data => {
  console.log('프로미스 객체인 경우, resolve 된 결과를 받아 then이 실행됩니다.', data);
});

Promise.resolve('bar').then(data => {
  console.log('then 메서드가 없는 경우, fulfilled 됩니다.', data);
})
/*
출력 결과
------------------------------------------------------------------
then 메서드가 없는 경우, fulfilled 됩니다. bar
프로미스 객체인 경우, resolve 된 결과를 받아 then이 실행됩니다. foo
*/


/*
Promise.reject를 사용하면, catch로 연결된 rejected 상태로 변경된다.
*/
Promise.reject(/* value */);

Promise.reject(new Error('reason')).then(error => {

}).catch(error => {
  console.log(error);
})


/*
프로미스 객체 여러 개를 생성하여,
배열로 만들어 인자로 넣고 Promise.all을 실행하면,
배열의 모든 프로미스 객체들이 fulfilled 되었을 때, then의 함수가 실행된다.
then의 함수의 인자로 프로미스 객체들의 resolve 인자값을 배열로 돌려준다.
Promise.all([프로미스 객체들]);
*/
function p(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  })
}
Promise.all([p(1000), p(2000), p(3000)]).then((messages) => {
  console.log('모두 fulfilled 된 이후에 실행됩니다.', messages);
});
// 출력 결과 : 모두 fulfilled 된 이후에 실행됩니다. [1000, 2000, 3000]


/*
Promise.race([프로미스 객체들]);
배열의 모든 프로미스 객체들 중 가장 먼저 fulfilled 된 것으로 then의 함수가 실행된다.
then의 함수의 인자로 가장 먼저 fulfilled 된 프로미스 객체의 resolve 인자값을 돌려준다.
*/
function p(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  })
}
Promise.race([p(1000), p(2000), p(3000)]).then((message) => {
  console.log('가장 빠른 하나가 fulfilled 된 이후에 실행됩니다.', message);
});
// 출력 결과 : 가장 빠른 하나가 fulfilled 된 이후에 실행됩니다. 1000