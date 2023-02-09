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
});

// {소켓아이디 : 닉네임, 소켓아이디 : 닉네임}

let list = {}

io.on('connection', (socket)=> {
    //io.emit은 전체 메세지 보내기
    io.emit('welcome', 'HahaHoHo 채팅이 시작되었습니다.');
    // io.emit('notice', socket.id + '님이 입장하셨습니다.');

    socket.emit('info', socket.id);
    
    socket.on("username", (name) => {
        list[socket.id] = name;
        io.emit("list", list);
        io.emit('notice', name + '님이 입장하셨습니다.')
    })

    socket.on('disconnect', ()=>{
        io.emit('notice', list[socket.id] + '님이 퇴장하셨습니다.')
        //퇴장시 방에 있는 사람들 리스트에서 지워주기
        delete list[socket.id]
        io.emit('list', list)
    })

    socket.on('send', (json) => {
        json['from'] = socket.id;
        json['username'] = list[socket.id]
        json['is_dm'] = false;
        //json { msg : ~~~, from ~~~, username :~~~, to:~~~, is_dm : ~~~}
        if(json.to == '전체') io.emit('newMsg', json)
        else{
            //복습!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            json['is_dm'] = true
            const socketID = Object.keys(list).find(key => list[key] == json.to)
            io.to(socketID).emit('newMsg', json)
            socket.emit('newMsg', json)
        }
    })

    // socket.on('close', (msg)=>{
    //     console.log(msg);
    //     io.emit('closeres',
    //         '채팅이 종료되었습니다.')
    // })
});

http.listen(8000, ()=>{
    console.log('Server port :', 8000);
})