//exports.visitor = (req, res) => {
//    res.render("visitor")
//}

const Visitor = require("../model/Visitor");

exports.visitor = (req, res) => {
    Visitor.get_Visitor(function(result){ //원래 데이터가 있다면 보여줘야함.(1)
        console.log(result);
        res.render("visitor", {data: result}); //그래서 visitor.ejs 파일에 data값을 넘겨줌 (2)
    }) //콜백함수
}

exports.register = (req, res) => {
    Visitor.register_visitor( req.body, function(id){ //원래 데이터가 있다면 보여줘야함.(1) 콜백함수
        console.log(id);
        res.send(String(id)); //send에는 id값 숫자만 보낼 수 없다.
    })
}

exports.delete = (req, res) => {
    //my sql req.body.id에 해당하는 데이터를 delete해야함. ->model
    //서버 응답 res.send
    Visitor.delete_visitor( req.body.id , function(){
        res.send(true); //보낼 것이 없어도 응답을 보내야함.
    })
}

exports.get_visitor_by_id = (req, res) => {
    // req.query.id 에 해당하는 데이터를 조회
    // 서버 응답 > 조회한 데이터
    Visitor.get_visitor_by_id_model(req.query.id, function(rows){
        res.send(rows);
    });
}

exports.update_visitor = (req, res) => {
    // req.body 데이터를 mysql에 update 할 수 있도록
    
    // 그냥 서버의 응답 true를 보내고 있음. 클라이언트가 받음 -> 클라이언트 코드 봐야함.
    Visitor.update_visitor(req.body , function(){
        res.send(true);
    });
}