const express = require("express");
const app = express();
const port = 8000;

app.set("view engine", "ejs");

app.use("/staitc", express.static(__dirname+"/static"));
//req를 위한 코드, body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//url 관련된 코드
const router = require("./routes");
//폴더까지만 와도 안에 index.js가 있다면 알아서 연결해줌.
//파일명이 index가 아닐 경우, /파일명 붙여주기
app.use('/visitor', router); //중요!
// localhost:8000/amumal 라우터로 모두 이동시키겠다는 코드
//미들웨어..?

//제일 마지막에 써야하는 코드
app.get("*", (req, res)=>{ //*은 모든 라우터라는 뜻
    res.send('error'); //ejs파일 render
});

app.listen(port, ()=>{
    console.log("server open:", port);
})