const express = require("express");
const app = express();
const port = 8080;

//-------form전송 : use나 set은 가급적 위에 작성-서버를 여는 코드는 마지막에 작성--------

//body-parser 코드
app.use(express.urlencoded({ extended: true })); // x-www-urlencoded 데이터 해석
app.use(express.json());
// json (:딕셔너리형태와 비슷) 형태로 parsing 해주겠다는 뜻 /
//{ key : value }

//------------------------------------------------------------------------------------

app.set('view engine' , 'ejs'); //난 view엔진으로 ejs를 사용할 것이다.


//app.use(express.static("static"));
//src="/img/dog.jpg"

//app.use("/public" , express.static("static"));
//public은 가상경로 , 괄호 안의 static은 폴더이름
//static 이라는 실제 존재하는 폴더를 public 경로로 접근할 수 있도록 함
//src="/public/img/dog.jpg"

app.use("/static" , express.static("static"));

app.get('/', (req, res)=>{
    res.send("hello express");
})
//첫번째는 라우터 두번째는 매개변수2개
//request(클라이언트가 서버에게 보내는 요청)response(서버가 클라이언트에게 보내는 응답)
// localhost:8080

app.get('/test', (req, res)=>{
    res.sendFile(__dirname + "/views/index.html");
})
// localhost:8080/test
// __dirname : C:/~~~/lecture/2211122_express -> 강사님 쪽

app.get('/ejs', (req, res)=>{
    res.render( "index" , {
        title: "index 페이지 입니다.",
        data: ["a", "b" , "c"]
    } );
})

app.get('/img', (req, res)=>{
    res.render( "indextest" , {
        title: "index 페이지 입니다.",
        pic : ["1", "2" , "3"]
    } );
})

app.listen( port, ()=>{
    console.log("server open : " , port);
    // node index.js 로 터미널에서 확인 가능
})

//------------------------------form 전송---------------------------------------------------------------

app.get("/form", (req, res)=> {
    res.render("form");
})

//아이디 받는 곳 -> 전송 클릭하면 해당 라우터로 정보가 전송됨/url이 form에서 getForm으로 변경됨
app.get("/getForm", (req, res)=> {
    console.log(req.query);
    //req : client가 서버 층에 보내는 요청
    //query를 터미널 콘솔에 딕셔너리 형태로 보여줌
    //url에서 물음표 뒤에 있는 것을 query라고함
    res.send("get 요청 성공!");
    //브라우저에서 전송하면 보이는 문자열
})

app.post("/postForm", (req, res)=> {
    console.log(req.body);
    //post요청은 query가 아닌 body에 담겨옴.
    res.render("result" , {data: req.body});
    //result파일에 req.body정보를 보내줌.
})

//get은 url자체에서 query를 만들 수 있음.
//url로 접속할 수 있는 것은 get요청.
//post는 해당 부분이 불가하다. 보안에 좋다.


// ================test===================
app.get("/formtest" , (req, res)=>{
    res.render("form_test");
})

app.get("/gettest" , (req, res)=>{
    console.log(req.query);
    res.send("정보를 확인해주세요." +
     ' 이름 : ' + req.query.name +
      ' 성별 : ' + req.query.gender +
      ' 생일 : ' + req.query.year + '년' + req.query.month + '월' +
      req.query.day + '일');
});



app.post("/formtest" , (req, res)=>{
    res.render("form_test");
})

app.post("/posttest" , (req, res)=>{
    console.log(req.body);
    res.send("테스트 성공");
})

function phone_validation(obj){
     var regPhone = /^\d{3}-\d{3,4}-\d{4}$/;
     if(regPhone.test(obj.value) === false) {
         $(".error").text('000-0000-0000 양식에 맞게 입력해주세요.');
     } else {
         $(".error").text("");

     }
 }
