const express = require("express");
const app = express();
const port = 7000;

app.set("view engine" , "ejs");
app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.get("/", function(req,res){
    res.render("ajax");
});

app.get("/ajax", function(req,res){
    console.log(req.query);
    res.send(req.query.id);
})

//app.post("/ajax", function(req,res){
//    console.log(req.body);
    //if (req.body.id == "1" && req.body.pw == "1234" ){}
//    res.send(req.body.id);
//})

app.get("/ajaxt", function(req,res){
    res.render("ajax_test");
})

app.post("/alarm", function(req,res){
    if (req.body.id == "1" && req.body.pw == "1234" ){
        res.send("<p style = 'color:blue'>로그인 성공</p>");
    }else {
        res.send("<p style = 'color:red'>로그인 실패</p>");
}
})

app.post("/fetch", function(req,res){
    if (req.body.id == "1" && req.body.pw == "1234" ){
        res.send("<p style = 'color:blue'>로그인 성공</p>");
    }else {
        res.send("<p style = 'color:red'>로그인 실패</p>");
}
})

app.listen(port, ()=>{
    console.log("Server Port : ", port);
});