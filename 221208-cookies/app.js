const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const port = 8000;
const path = require('path'); 

app.use(cookieParser());
app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views')); 

const option = {
    httpOnly: true, //클라이언트가 document.cookie 접근할 수 없게 함.
    maxAge: 60*60*24*1000,//만들어진 순간부터 밀리초만큼 뒤에 만료됨 (ms 단위 ex. 30000=30초)
    //expires: "2022-12-09T00:00:00",// GMT 시간 - 2022-12-08T09:00:00
    //path: "/a", //localhost:8000 쿠키가 없음. localhost:8000/a/~~~~ 쿠키 있음. default "/"
    //secure: false , //true일 경우, https 보안서버에만 적용됨.
    //signed: true //true일 경우, 암호화 default false
};

//app.get("/", (req, res)=>{
//    res.send("hello");
//})

app.get("/", (req, res)=>{
//req.cookies.popup 값을 비교해 1이 아니면, "none" 
    if(req.cookies.popup == "1" )res.render("app" , {popup: "none"});
    else res.render("app" , {popup: "block"});
});

app.post("/setpopup",(req,res)=>{
    res.cookie("popup","1", option); //쿠키 보내기
    //2. 서버 응담
    res.send(true);
});




//쿠키는 인자가 3개 필요
app.get("/set",(req,res)=>{
    res.cookie("test","1", option); //쿠키 보내기
    res.send("쿠키 생성 성공");
});

app.get("/get",(req,res)=>{
    console.log(req.cookies);
    console.log(req.cookies.test);
    res.send(req.cookies); //쿠키 객체 가져오기
});


app.listen(port, ()=>{
    console.log("server open", port);
});