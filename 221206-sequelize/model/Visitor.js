const Visitor = (Sequelize, DataTypes)=>{
    return Sequelize.define(
        //sql : create table visitor (
        "visitor",
        {
            id: { //sql : id int not null primary key auto_increment
                type: DataTypes.INTEGER,
                allowNull: false, //null을 허용하지 않음.
                primaryKey: true,
                autoIncrement: true
            },
            name : {//sql : name varchar(10) not null
                type: DataTypes.STRING(10),
                allowNull: false
            },
            comment : { //sql : comment mediumtext
                type: DataTypes.TEXT('medium')
            }
        },
    
        {
            tableName: "visitor",
            freezeTableName: true, //테이블 네임만 정의하면 visitors로 테이블이름이 정해짐. 방지하기위해 해당 코드 입력
            timestamps: false //default : true
            // collate, charset : "UTF-8" - 이미 설정되어 있어서 해줄 필요 없음. 
        }
    
     )
}

module.exports = Visitor;