//require될 파일

const Sequelize = require("sequelize");
const config = require("../config/config.json")["development"];

// config = {
//     "host": "localhost",
//     "database": "새싹",
//     "username": "user",
//     "password": "sba123$",
//     "dialect": "mysql"
// }

const db = {};

const sequelize = new Sequelize( //연결 : 인자 4개 필요
    config.database,
    config.username,
    config.password,
    config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Visitor = require("./Visitor")(sequelize, Sequelize);

db.User = require("./User")(sequelize, Sequelize);
db.Product = require("./Product")(sequelize, Sequelize);
db.Payment = require("./Payment")(sequelize, Sequelize);
// (".Visitor")은 함수 불러온 것. 뒤에 인자까지 써줘야 실행됨.
//sequelize는 define 함수 사용하려고 인자로 사용.
//Sequelize는 INTEGER사용 하려고  인자로 넘겨준 것.

// db = {
//     "Sequelize" : Sequelize,
//     "sequelize" : sequelize,
//     "Visitor" : "Visitor.js에서 return 받은 값"
// }

db.User.hasMany(db.Payment, {
    foreignKey : "user_id",
    sourceKey : "user_id",
    onDelete : "cascade"
})

db.Payment.belongsTo(db.User,{
    foreignKey : "user_id",
    sourceKey : "user_id",
    onDelete : "cascade"
})

db.Product.hasMany(db.Payment, {
    foreignKey : "product_id",
    sourceKey : "product_id",
    onDelete : "cascade"
})

db.Payment.belongsTo(db.User,{ //payment는 바라보고있다.
    foreignKey : "product_id",
    sourceKey : "product_id",
    onDelete : "cascade"
})

module.exports = db;