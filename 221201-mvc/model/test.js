const { stringify } = require("querystring");

exports.hello = function(){
    return "hello";
}

// exports.user = function(){
//     return { id: "1", pw: "1234"};
    
//     var spel = string.split("/n")
//     console.log(spel);
//     return "아이디 또는 비밀번호를 잘못 입력했습니다.";
//     return "아이디 또는 비밀번호를 잘못 입력했습니다.";
// }

var users = 
`gmldud//1234//정희영
sesac//123//새싹`;

exports.user2 = ()=>{
    return users;
}

