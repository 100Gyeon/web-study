/* 여러 워커 스레드 사용하기
new Worker 호출하는 수만큼 워커 스레드 생성 */

const {
    Worker, isMainThread, parentPort, workerData,
} = require('worker_threads');

if (isMainThread) { // 부모일 때
    const threads = new Set();
    threads.add(new Worker(__filename, {
        workerData: { start: 1 },
    }));
    threads.add(new Worker(__filename, {
        workerData: { start: 2 },
    }));
    for (let worker of threads) {
        // .on : 이런 일 발생하면 이렇게 처리해주세요
        worker.on('message', message => console.log('from worker', message)); // message가 왔을 때 처리할 event
        worker.on('exit', () => {
            threads.delete(worker);
            if (threads.size === 0) {
                console.log('job done');
            }
        });
    }
} else { // 워커일 때
    const data = workerData;
    parentPort.postMessage(data.start + 100);
}
