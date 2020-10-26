const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

const min = 2;
let primes = []; // 8개의 워커 스레드가 각각 이 공간 가짐
// 이름은 같지만 메모리상 다른 공간에 저장된다.

// 소수 찾는 알고리즘 함수는 그대로 사용
function findPrimes(start, range) {
    let isPrime = true;
    const end = start + range;
    for (let i = start; i < end; i++) {
        for (let j = min; j < Math.sqrt(end); j++) {
            if (i !== j && i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(i);
        }
        isPrime = true;
    }
}

if (isMainThread) {
    const max = 10000000;
    const threadCount = 8; // 8명의 알바라고 생각
    const threads = new Set(); // 알바 등록
    const range = Math.ceil((max - min) / threadCount); // 일거리를 8등분
    
    let start = min;
    console.time('prime');
    for (let i = 0; i < threadCount - 1; i++) {
        const wStart = start;
        threads.add(new Worker(__filename, { workerData: { start: wStart, range } }));
        start += range;
    }
    threads.add(new Worker(__filename, { workerData: { start, range: range + ((max - min + 1) % threadCount) } }));
    
    for (let worker of threads) {
        worker.on('error', (err) => {
            throw err;
        });

        worker.on('exit', () => {
            threads.delete(worker);
            if (threads.size === 0) {
                console.timeEnd('prime');
                console.log(primes.length);
            }
        });

        // 아래의 parentPort.postMessage에서 받아옴
        worker.on('message', (msg) => {
            primes = primes.concat(msg);
        });
        // 워커 스레드 종료된 순서대로 primes에 들어감
        // 그래서 무조건 정렬이 보장되는 것은 아님
    }
} else { // 워커 스레드가 하는 부분
    // start부터 range까지 소수 있는지 찾기
    findPrimes(workerData.start, workerData.range);
    // 소수를 저장한 primes를 메인 스레드로 보내줌
    parentPort.postMessage(primes);
}