/* worker_threads */

const {
    Worker, isMainThread, parentPort,
} = require('worker_threads');

if(isMainThread) { // 부모일 때
    const worker = new Worker(__filename);
    worker.on('message', message => console.log('from worker', message));
    worker.on('exit', () => console.log('worker exit'));
    worker.postMessage('ping');
} else { // 워커일 때
    parentPort.on('message', (value) => {
        console.log('from parent', value);
        parentPort.postMessage('pong');
        parentPort.close();
    });
}

// isMainThread를 통해서 메인 스레드, 워커 스레드 구분
// worker.postMessage('') : 워커로 데이터 보냄
// parentPort.on('message') : 워커가 부모로부터 데이터 받음
// parentPort.postMessage('') : 부모로 데이터 보냄
