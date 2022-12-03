const User = require("../model/User");


exports.log_in = (req, res) => {
    // User.get_User(function(result){ //원래 데이터가 있다면 보여줘야함.(1)
    //     console.log(result);
        res.render("../views/login"); //그래서 visitor.ejs 파일에 data값을 넘겨줌 (2)
    }
    //)} //콜백함수

exports.sign_up = (req, res) => {
    // User.get_User(function(result){ //원래 데이터가 있다면 보여줘야함.(1)
    //     console.log(result);
        res.render("../views/signup"); //그래서 visitor.ejs 파일에 data값을 넘겨줌 (2)
    }

exports.profile = (req, res) => {
    // User.get_User(function(result){ //원래 데이터가 있다면 보여줘야함.(1)
    //     console.log(result);
        res.render("../views/profile"); //그래서 visitor.ejs 파일에 data값을 넘겨줌 (2)
    }

exports.register = (req, res) => {
    res.send("가입완료");
    console.log("가입");
    //User.register_user( req.body, function(id){ //원래 데이터가 있다면 보여줘야함.(1) 콜백함수
    //    console.log(id);
    //    res.send(id); //send에는 id값 숫자만 보낼 수 없다.
    //})
}

