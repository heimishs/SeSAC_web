"use strict";

const Sequelize = require("sequelize");
const config = require(__dirname + "/../config/config.json")["development"];
console.log(config);
const db = {};

let sequelize;

sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// DB 객체
// 설정정보를  sequelize 라는 키 안에 넣어줌
db.sequelize = sequelize;
// sequelize 라이즈 모듈을 Sequelize 키에 담아서 전달함
db.Sequelize = Sequelize;

db.Visitor = require("./Visitor")(sequelize, Sequelize);

module.exports = db; //app.js
