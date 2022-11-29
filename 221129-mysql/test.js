const mysql = require("mysql");

const cnn = mysql.createConnection({ //mysql 안의 createconnction 함수사용
    host: 'localhost' , //127.0.0.1과 같다.
    user: 'user' , //root = 외부에서의 접근 허용 x
    password: 'sba123$' ,
    database: '새싹'
})

cnn.query('select * from user', (err, result)=>{
     //undefined값이 있으면 if문 실행x
    if (err) throw err; //throw err = console.log(err)와 같은 의미

    console.log(result);
})