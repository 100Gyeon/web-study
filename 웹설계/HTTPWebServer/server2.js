// fs 모듈로 html 읽어서 전송하기
// writeHead는 헤더 작성하는 메서드
// write가 버퍼도 전송 가능

const http = require('http');
const fs = require('fs').promises;

http.createServer(async (req, res) => {
    try {
        const data = await fs.readFile('./server2.html');
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.end(data);
    } catch (err) {
        console.error(err);
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8'});
        res.end(err.message);
    }
})
    .listen(8081, () => {
        console.log('8081번 포트에서 서버 대기 중입니다!'); // localhost:8081
    });