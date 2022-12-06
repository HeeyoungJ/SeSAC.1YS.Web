// const Visitor = require("../model/Visitor");
const { Visitor } = require("../model/index");
//db에 있는 { Visitor } require( 객체 구조 분해 )

exports.visitor = async (req, res) => {
    let result = await Visitor.findAll()
    //await 함수는 가독성이 좋음. promise 객체에만 가능
    res.render("visitor", {data: result});
    

    //Visitor.findAll() //sequelize 안에 있는 함수. select문
    //.then((result) => { //promise
    //console.log(result);        
    //console.log(result[0].id);        
    //res.render("visitor", {data: result});
    //})

    //select * from visitor;
    // Visitor.get_visitor(function(result){
    //     console.log(result);
    //     res.render("visitor", {data: result});
    // })
}

exports.register = async (req, res) => {
    let data = {
        name : req.body.name,
        comment : req.body.comment
    }
    let result = await Visitor.create(data)
    console.log(result);
    res.send(String(result.id));
    

    //Visitor.create(data)
    //.then((result)=>{
    //    console.log(result);
    //    res.send(String(result.id));
    //})

//     `insert into visitor(name, comment) values('${req.body.name}', '${req.body.comment}');

//    Visitor.register_visitor( req.body, function(id){
//        console.log(id);
//        res.send(String(id));
//    })
}

exports.delete = async (req, res) => {
    let result = await Visitor.destroy({ //destroy의 결과는 성공여부 1인지 0인지
        where: { id: req.body.id }
    })
    console.log(result);
    res.send(true);

    //Visitor.destroy({ //destroy의 결과는 성공여부 1인지 0인지
    //    where: { id: req.body.id }
    //})
    //.then((result)=>{
    //    console.log(result);
    //    res.send(true);
    //})
    
    //delete from visitor where id = ${req.body.id}
    // mysql req.body.id에 해당하는 데이터를 delete
    // 서버 응답 res.send 
    //Visitor.delete_visitor(req.body.id, function(){
    //    res.send(true);
    //})
}

exports.get_visitor_by_id = async (req, res) => {
    // req.query.id 에 해당하는 데이터를 조회
    // 서버 응답 > 조회한 데이터
    //Visitor.findAll({
    //    where : { id: req.query.id },
    //    limit : 1
    //})
    let result = await Visitor.findOne({
        where : { id: req.query.id }
    })
    res.send(result);

    //Visitor.findOne({
    //    where : { id: req.query.id }
    //})
    //.then((result) => {
    //    res.send(result);
    //})

    //select * from visitor where id = req.query.id;
    
    //Visitor.get_visitor_by_id_model(req.query.id, function(rows){
    //    res.send(rows);
    //});
//-------------------------------
    //select id, name, comment from visitor order by id DESC limit 1;
    //Visitor.findOne({
    //    attributes : [ "id", "name", "comment"],
    //    where : { id: req.query.id },
    //    order: [["id", "DESC"]],
    //    limit: 1
    //})
    //.then((result) => {
    //    res.send(result);
    //})

    //select * from visitor where id = req.query.id;
    
    //Visitor.get_visitor_by_id_model(req.query.id, function(rows){
    //    res.send(rows);
    //});
}

exports.update_visitor = async (req, res) => {
    let data = {
        name: req.body.name,
        comment : req.body.comment
    }
    let result = await Visitor.update(data, {
        where: {id: req.body.id}
    })
    console.log(result);
    res.send(true);

    //Visitor.update(data, {
    //    where: {id: req.body.id}
    //})
    //.then((result)=>{
    //    console.log(result);
    //    res.send(true);
    //})

    // update visitor set name='${req.body.name}', comment ='${req.body.comment}' where id='${req.body.id}'
    // req.body 데이터를 mysql 에 update 할 수 있도록
    // 서버의 응답
    //Visitor.update_visitor(req.body, function(){
    //    res.send(true);
    //});
}