const express = require("express");
const app = express();
const port = 8000;

app.set("view engine", "ejs");

app.use("/static", express.static(__dirname+"/static"));
//req를 위한 코드, body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const router = require("./routes");

app.use('/user', router); 

app.get("*", (req, res)=>{ //*은 모든 라우터라는 뜻
    res.send('error'); //ejs파일 render
});

app.listen(port, ()=>{
    console.log("server open:", port);
})