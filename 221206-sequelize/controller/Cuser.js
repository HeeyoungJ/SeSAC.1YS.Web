//const User = require("../model/User");
const { User } = require("../model/index");

exports.index = (req,res) => {
    res.render("404");
}

exports.signup = (req,res) => {
    res.render("signup");
}
exports.post_signup = async (req,res) => {
    let data = {
        id : req.body.id,
        pw : req.body.pw,
        name : req.body.name
    }
    let result = await User.create(data)
    console.log(result);
    res.send(String(result.id));


    // INSERT INTO user(id, name, pw) VALUES('${data.id}','${data.name}','${data.pw}');
    // User.post_signup(req.body, function(){
    //     res.send(true);
    // });
}

exports.signin = (req,res) => {
    res.render("signin");
}

exports.post_signin = async (req,res) => {
    let data = {
        id : req.body.id,
        pw : req.body.pw
    }
    let result = await User.findAll({
        where : { id: req.body.id, pw : req.body.pw}
    })
    console.log("결과는 : " , result);
    if ( result.length > 0 ) res.send(true);
        else res.send(false);


//    `SELECT * FROM user WHERE id='${id}' and pw='${pw}' limit 1;`
//    User.post_signin(req.body.id, req.body.pw, function(result){
//        if ( result.length > 0 ) res.send(true);
//        else res.send(false);
//    });
}

exports.profile = async (req,res) => {
    let data = {
        id : req.body.id
    }
    let result = await User.findAll({
        where : { id: req.body.id}
    })
    if ( result.length > 0 ) res.render("profile", {data: result[0]});
    else res.redirect("/user/signin");

    // SELECT * FROM user WHERE id='${id}' limit 1;
    // User.get_user(req.body.id, function(result){
    //     if ( result.length > 0 ) res.render("profile", {data: result[0]});
    //     else res.redirect("/user/signin");
    // })
}

exports.profile_edit = async (req,res) => {
    let data = {
        pw : req.body.pw,
        name: req.body.name
    }
    let result = await User.update(data, {
        where : {id: req.body.id}
    })
    console.log(result);
    res.send(true);

    // User.update_profile(req.body, function(){
    //     res.send(true);
    // })
}
exports.profile_delete = async (req,res) => {
    let result = await User.destroy({ //destroy의 결과는 성공여부 1인지 0인지
        where: { id: req.body.id }
    })
    console.log(result);
    res.send(true);


    // User.delete_user(req.body.id, function(){
    //     res.send(true);
    // })
}