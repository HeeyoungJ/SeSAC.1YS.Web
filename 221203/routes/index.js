var express = require("express"); //암기
var controller = require("../controller/Cuser");

const router = express.Router();

router.get( "/login" , controller.log_in);
router.get( "/signup" , controller.sign_up);
router.get( "/profile" , controller.profile);
router.post( "/userlist" , controller.register);

module.exports = router;
