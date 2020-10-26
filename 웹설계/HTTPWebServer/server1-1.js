// 이벤트 리스너 붙이기

const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
    res.write('<h1>Hello Node!</h1>'); // 응답 내용 적기
    res.end('<p>Hello Server!</p>'); // 응답 마무리 (내용 넣어도 된다.)
});
server.listen(8080); // 특정 포트에 연결

// listening과 error 이벤트 붙일 수 있음
server.on('listening', () => {
    console.log('8080번 포트에서 서버 대기 중입니다!');
});
server.on('error', (error) => {
    console.error(error);
})