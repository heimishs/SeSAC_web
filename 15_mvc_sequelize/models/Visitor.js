const Visitor = function (Sequelize, DataTypes) {
  const model = Sequelize.define(
    "visitor",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      comment: {
        type: DataTypes.TEXT("medium"),
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

  return model;
};

module.exports = Visitor; //models/index.js 에서 사용할 예정
