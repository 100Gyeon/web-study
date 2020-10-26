const http = require('http');

http.createServer((req, res) => {
    console.log(req.url, req.headers.cookie); // req.headers.cookie에 쿠키가 문자열로 담겨있음
    res.writeHead(200, { 'Set-Cookie': 'mycookie=test' });
    // writeHead : 요청 헤더에 입력하는 메서드
    // Set-Cookie : 브라우저에 쿠키를 설정하라고 명령
    res.end('Hello Cookie');
})
    .listen(8083, () => {
        console.log('8083번 포트에서 서버 대기 중입니다!');
    });