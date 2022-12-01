var express = require("express"); //암기
var controller = require("../controller/Cmain");
//라우터 변수 안에 저장, 파일을 연결
const router = express.Router(); //암기

router.get("/", controller.main); //,뒤에 함수 부분이 중요 정의된 함수는 컨트롤러에 있어야함
router.get("/test", controller.test);

router.post("/postForm", controller.post);

//실습코드
router.get("/login", controller.login);
//로그인 페이지를 url에 찍는 것임으로 get
//controller 변수 안에 login함수가 있을 것이다.(우리가 만든)
router.post("/login", controller.loginpost);
//요청이 다르면 url은 같아도 상관없다.
router.post("/login2", controller.loginpost2);

module.exports = router; //중요!! 위에 정의한 라우터들을 삭 모아 전달