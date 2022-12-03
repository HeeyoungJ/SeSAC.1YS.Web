const { response } = require("express");
const mysql = require("mysql");

const cnn = mysql.createConnection({
    host : 'localhost',
    user : 'user',
    password : 'sba123$',
    database : '새싹'
})

exports.register_user = (info,cb) => {
    var sql = `insert into usertest(id, pw, name) values('${info.id}','${info.pw}','${info.name}');`;
    //문자열 말고 백틱을 넣어 값을 받아야함.

    cnn.query(sql, (err, result) => {
        if(err) throw err; 
        console.log("insert result : ", result);
        cb(result.insertId); //Visitor의 콜백함수
    })
}
