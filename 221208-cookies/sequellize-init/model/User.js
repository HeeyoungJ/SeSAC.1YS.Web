const User = (Sequelize, DataTypes)=>{
    return Sequelize.define(
        //sql : create table visitor (
        "user",
        {
            id: { //sql : id int not null primary key auto_increment
                type: DataTypes.STRING(15),
                allowNull: false, //null을 허용하지 않음.
                primaryKey: true
            },
            pw : { //sql : comment mediumtext
                type: DataTypes.STRING(20),
                allowNull: false
            },
            name : {//sql : name varchar(10) not null
                type: DataTypes.STRING(10),
                allowNull: false
            }
        },
    
        {
            tableName: "user",
            freezeTableName: true, //테이블 네임만 정의하면 visitors로 테이블이름이 정해짐. 방지하기위해 해당 코드 입력
            timestamps: false //default : true
            // collate, charset : "UTF-8" - 이미 설정되어 있어서 해줄 필요 없음. 
        }
    
     )
}

//exports.post_signup = (data, cb) => {
//    let sql = `INSERT INTO user(id, name, pw) VALUES('${data.id}','${data.name}','${data.pw}');`;
//    cnn.query( sql, function(err){
//        if ( err ) throw err;
//        cb();
//    });
//}

module.exports = User;

// exports.post_signin = (id, pw, cb) => {
//     let sql = `SELECT * FROM user WHERE id='${id}' and pw='${pw}' limit 1;`;
//     cnn.query( sql, function(err, rows){
//         if ( err ) throw err;
//         cb(rows);
//     });
// }
// exports.get_user = (id, cb) => {
//     let sql = `SELECT * FROM user WHERE id='${id}' limit 1;`;
//     cnn.query( sql, function(err, rows){
//         if ( err ) throw err;
//         cb(rows);
//     });
// }

// exports.update_profile = (data, cb) => {
//     let sql = `UPDATE user SET name='${data.name}', pw='${data.pw}' WHERE id='${data.id}'`;
//     cnn.query( sql, ( err ) => {
//         if ( err ) throw err;
//         cb();
//     })

// }
// exports.delete_user = (id, cb) => {
//     cnn.query(`DELETE FROM user WHERE id='${id}'`, (err) => {
//         if ( err ) throw err;
//         cb();
//     });
// }