const { response } = require("express");
const mysql = require("mysql");

const cnn = mysql.createConnection({
    host : 'localhost',
    user : 'user',
    password : 'sba123$',
    database : '새싹'
})

exports.get_Visitor = (cb) => {
    var sql = 'SELECT * FROM visitor';

    //cnn쿼리가 오래걸려 콜백함수를 넘겨주어서 실행시켜야한다.
    //구조 암기
    cnn.query(sql, (err, rows) => { //rows에 데이터 결과가 담김.
        if(err) throw err;

        console.log("visitors : ", rows);
        cb(rows); //Visitor의 콜백함수
    })
}

exports.register_visitor = (info,cb) => {
    //info = req.body; {name: "" , comment :""}
    var sql = `insert into visitor(name, comment) values('${info.name}','${info.comment}');`;
    //문자열 말고 백틱을 넣어 값을 받아야함.

    cnn.query(sql, (err, result) => {
        if(err) throw err; 
        console.log("insert result : ", result);
        cb(result.insertId); //Visitor의 콜백함수
    })
}

exports.delete_visitor = (id, cb) =>{
    var sql = `delete from visitor where id = ${id}`;

    cnn.query(sql, (err, result)=>{
        if (err) throw err;
        console.log( "delete result :", result );
        cb();
    })
}

exports.get_visitor_by_id_model = (id, cb) => {
    var sql = `select * from visitor where id = ${id}`; //get에서 id 받아옴

    cnn.query(sql, (err, rows)=>{ //cnn쿼리로 결과값 받기
        if (err) throw err;

        console.log("select by id : ", rows);
        cb(rows[0]);
    })
}

exports.update_visitor = (info, cb) => {
    var sql = `update visitor set name='${info.name}', comment='${info.comment}' where id = '${info.id}'`
    cnn.query(sql, (err, result) => {
        if (err) throw err;

        console.log("update result : ", result);
        cb();
    })
}