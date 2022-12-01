const Test = require("../model/test"); //model
const user_list = require("../model/test"); //함수 선언
const { stringify } = require("querystring");

exports.main = (req,res)=> {
    let hi = Test.hello(); //test에서 선언한 hello라는 함수값이 변수에 담김
    res.send(hi);
    //res.render("index"); //index.js에서 라우터 뒤 함수들은 모두 이 파일에 적는다.
}
//경로와 연결될 함수 정의


exports.test = (req,res)=> {
    res.send("test");
}
exports.post = (req,res)=> {
    res.send("post");
}

//실습코드
exports.login = (req,res)=> {
    res.render("login");
}
exports.loginpost = (req,res)=>{
    let info = Test.user(); // { id : "1" , pw : "1234"}가 함수 안에 들어있음. test파일의 user함수
    if (req.body.id == info.id && req.body.pw == info.pw ){
        res.send("<p style = 'color:blue'>로그인 성공</p>");
    }else {
        res.send("<p style = 'color:red'>로그인 실패</p>");
    }
}
exports.loginpost2 = (req,res)=>{
    let users = user_list.user2();
    let userlist = users.split("\n")
    //users에 담긴 문자열을 ()를 기준으로 자른다.
    //자른 배열을 userlist에 담아준다.
    //userlist = ["gmldud//1234//정희영", "sesac//123//새싹"];으로 저장됨.
    let login_flag = false;
    let name = "";
    console.log(req.body);
    for(let i = 0; i < userlist.length; i++){
        let user = userlist[i].split("//");
        //user = ["gmldud","1234","정희영"];으로 저장됨.
        console.log(user);
        if (req.body.id == user[0] && req.body.pw == user[1] ){
            login_flag = true;
            name = user[2];
            break; //로그인에 성공하였기 때문에 for문 더 이상 돌지않는 것.
        }
    }

    console.log(login_flag, name);
    if(login_flag) res.send(`<p style = 'color:blue'>${name} 님 환영합니다.</p>`);
    else res.send("<p style = 'color:red'>로그인 실패</p>");
    
}
//이해해보기!!!
//module.exports = {
//    main: main,
//    test: test,
//    post: post
//}