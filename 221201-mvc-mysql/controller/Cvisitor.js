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
    // insert req.body
    // 
    })
}