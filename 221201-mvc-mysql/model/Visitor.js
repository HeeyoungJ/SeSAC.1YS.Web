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
    cnn.query(sql, (err, rows) => {
        if(err) throw err;

        console.log("visitors : ", rows);
        cb(rows); //Visitor의 콜백함수
    })
}

exports.register_visitor = (info,cb) => {
    // info = req.body; {name: "" , comment:""}
    var sql = `insert into visitor(name, comment) values('${info.name}','${info.comment}');`;

    cnn.query(sql, (err, result) => {
        if(err) throw err;

        console.log("insert result : ", result);
        cb(result.insertId); //Visitor의 콜백함수
    })
}