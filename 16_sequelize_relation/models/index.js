"use strict";

const Sequelize = require("sequelize");
const config = require(__dirname + "/../config/config.js")["devel"];
const db = {};

let sequelize;
sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// 모델을 불러오면서 인자로 전달할 정보 전달
const PlayerModel = require("./Player")(sequelize, Sequelize);
const ProfileModel = require("./Profile")(sequelize, Sequelize);
const GameModel = require("./Game")(sequelize, Sequelize);
const TeamModel = require("./Team")(sequelize, Sequelize);
const TeamGameModel = require("./TeamGame")(sequelize, Sequelize);

// 모델간 관게설정

// Player:Profile = 1:1
PlayerModel.hasOne(ProfileModel, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
  foreignKey: "player_id",
});
ProfileModel.belongsTo(ProfileModel, {
  foreignKey: "player_id",
});
// Team:Player = 1:N
TeamModel.hasMany(PlayerModel, {
  foreignKey: "teamid", //내가 정해주는 이름
  sourceKey: "team_id", //실제로 참조할 이름
  // 실제 team model 컬럼명과 일치해야함
  // mdels/team 의 primary key
});
PlayerModel.belongsTo(TeamModel, {
  foreignKey: "teamid",
  targetKey: "team_id", //실제로 참조할 이름
});

// Team:Game = N:N
// 중계테이블 teamgame 활용해야함
TeamModel.belongsToMany(GameModel, {
  through: TeamGameModel,
  foreignKey: "team_id",
});
GameModel.belongsToMany(TeamModel, {
  through: TeamGameModel,
  foreignKey: "game_id",
});

// DB 객체에 모델 추가
db.Player = PlayerModel;
db.Profilel = ProfileModel;
db.Game = GameModel;
db.Team = TeamModel;
db.TeamGame = TeamGameModel;
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
