// 서버
const express = require('express');
const { readFile } = require('fs');
const { Socket } = require('socket.io');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

io.on('connection', (socket)=> {
    console.log('채팅방 입장');

    //welcome 메세지 보내기
    socket.emit('welcome', 'HahaHoHo 채팅이 시작되었습니다.');

    socket.on('close', (msg)=>{
        console.log(msg);
        socket.emit('closeres',
            '채팅이 종료되었습니다.')
    })
});

http.listen(8000, ()=>{
    console.log('Server port :', 8000);
})