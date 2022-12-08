const express = require("express");
const session = require("express-session");
const app = express();
const path = require('path'); 
const port = 8000;

app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views')); 
//session 사용할 미들웨어

var sql = require('mysql');
var config = {
    user: 'user',
    password: 'sba123$',
    server: 'localhost',
    database: '새싹',
    stream: true
}

const user = {id: "a", pw:"1"};
app.use(session({
    secret: '1234', //임의의 문자열로 세션 암호화 , 필수
    resave: false, //true: 모든 요청마다 session에 변화가 없어도 다시 저장
    saveUninitialized: true, //초기화된 session을 저장할지 말지
    // cookie:{ //sessioni id 쿠키에 대한 옵션
    //     httpOnly: true,
    //     maxAge :
    // },
    // secure: //true 보안서버에서만 작동
}))

var isLogin = false;

app.get("/" , (req,res)=> {
    if(isLogin)
    res.render("profile");
    else res.render("index");
});

app.get("/", (req, res)=>{
    if(req.session.uer)
    res.render("profile", {isLogin: ture}) //isLogin은 변수
    else res.render("index", {isLogin: false})
    //만약 공간에 req.session.user가 있다면
    res.send("hello");
});

app.get("/login" , (req,res)=> {
    res.render("login");
});

app.post("/login", (req,res)=>{
    // cookies = { }
    // req.session = { }

    if(req.body.id == user.id && req.body.qw == user.pw){
        console.log("성공");
        res.send("로그인 성공");
    }
    else{
        res.send("로그인 실패");
        res.render("login");
    }

    req.session.user = req.body.id ;
    //session은 클라이언트 고유의 방
    //누가 로그인했는지 알기위해 req.body.id 저장

    res.render("profile");
})

app.get("/profile" , (req,res)=> {
    res.render("profile");
    console.log(session.id);
});

// app.destroy("/logout", (req,res)=>{
//     req.session.destroy(function(err){ //destroy내장함수
//         if(err) throw err;
//         res.send("로그아웃 성공");
//     })
// })

app.listen(port, ()=>{
    console.log("server open", port);
});