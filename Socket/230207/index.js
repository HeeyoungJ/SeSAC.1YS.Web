// 서버
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

// 클라이언트 소켓이 연결이 되면 콜백 함수가 실행된다.
// socket : 클라이언트 소켓과 연결 되고 새로 생성된 소켓
io.on('connection', (socket)=> {
    console.log('Server Socket Connected', socket.id);

    //welcome 메세지 보내기
    socket.emit('welcome', {msg : 'welcome'});

    socket.on('response', (str) => {
        console.log(str);
    })
    
    socket.on('disconnect', () => {
        console.log('Server Socket disconnected');
    })
    //실습
    socket.on('hello', (data)=> {
        console.log(data);
        socket.emit('hellores', 'hello : 안녕하세요!')
    })
    socket.on('study', (data)=> {
        console.log(data.msg);
        socket.emit('studyres', 'study : 공부합시다!')
    })
    socket.on('bye', (data)=> {
        console.log(data.msg);
        socket.emit('byeres', 'bye : 안녕히가세요!')
    })
    //하나의 함수로 보내는 방법
    //키값을 생성
    let data = {hello: '안녕하세요!', study: '공부하세요!', bye: '안녕히가세요!'}

    socket.on('send', (msg) => {
        console.log(msg)
        socket.emit('response', msg + " : " + data[msg])
    })

})
http.listen(8000, ()=>{
    console.log('Server port :', 8000);
})