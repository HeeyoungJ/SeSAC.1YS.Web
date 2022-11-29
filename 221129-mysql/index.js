const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 8000;

const cnn = mysql.createConnection({
    host: 'localhost' , //127.0.0.1과 같다.
    user: 'user' , //root = 외부에서의 접근 허용 x
    password: 'sba123$' ,
    database: '새싹'
})

app.set('view engine' , 'ejs');

app.get('/',(req, res)=>{
    cnn.query('select * from user', (err, result)=>{
        //undefined값이 있으면 if문 실행x
        if (err) throw err; //throw err = console.log(err)와 같은 의미
   
        console.log(result);
    
        res.render("index", { rows: result } ); //rows = 변수값 , result는 mysql에서 만든 db
    });
    });

app.listen(port, ()=>{
    console.log("open :", port);
})