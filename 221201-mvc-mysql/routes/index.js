var express = require("express"); //암기
var controller = require("../controller/Cvisitor");
//라우터 변수 안에 저장, 파일을 연결
const router = express.Router(); //암기

router.get( "/" , controller.visitor);
router.post( "/register" , controller.register);

module.exports = router; //중요!! 위에 정의한 라우터들을 삭 모아 전달