const User = function (Sequelize, DataTypes) {
  return Sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nameid: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      comment: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      pw: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
    }, //컬럼 정의
    {
      timestamps: true,
      // 테이블추가 수정 컬럼을 자동으로 만들어 기록
      // 기본값 true
      freezeTableName: true,
      // 첫번째인자로 전달모델 이름 그대로
      // 테이블 이름을 고정하겠다!
    }
  );
};

module.exports = User; //models/index.js 에서 사용할 예정
