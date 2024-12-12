// const Visitor = require("../model/Visitor");
const models = require("../models/index");
const { errorlogs } = require("../utils/common");

exports.main = (req, res) => {
  res.render("index");
};

/* /visitors GET */
exports.getVisitors = (req, res) => {
  // [DB 연결전]
  // res.render("visitors", { data: Visitor.getVisitors() });

  // [DB 연결후, Sequelize 전]
  // Visitor.getVisitors((result) => {
  //   console.log("전체목록 Cvisitor.js", result);
  //   res.render("visitors", { data: result });
  // });

  // [Sequelize 이후]
  // `SELECT * FROM visitor`
  models.Visitor.findAll()
    .then((result) => {
      console.log("findAll>>", result);
      // findAll의 결과는 배열
      // res.send(result);
      res.render("visitors", { data: result });
    })
    .catch((err) => {
      console.log("getVisitors Controller Err", err);
      res.status(500).send("server err!");
    });
};

/* /visitor/:id GET*/
exports.getVisitor = async (req, res) => {
  console.log(req.params); // {id:'1'}
  console.log(req.params.id); // '2'
  // [Sequelize 이전]
  // Visitor.getVisitor(req.params.id, (result) => {
  //   console.log("한 개의 데이터 Cvisitor.js", result);
  //   res.send(result);
  // });

  // [Sequelize 이후]
  // `SELECT * FROM visitor WHERE id=${req.params.id}`
  try {
    const result = await models.Visitor.findOne({
      where: {
        id: req.params.id,
      },
    });
    console.log("findOne >> ", result[0].user);
    res.send(result);
    /* 
    visitor {
  dataValues: { id: 3, name: 'nickname', comment: '수정한 댓글입니다.1' },
  _previousDataValues: { id: 3, name: 'nickname', comment: '수정한 댓글 입니다.1' },
  uniqno: 1,
  _changed: Set(0) {},
  _options: {
    isNewRecord: false,
    _schema: null,
    _schemaDelimiter: '',
    raw: true,
    attributes: [ 'id', 'name', 'comment' ]
  },
  isNewRecord
    */
  } catch (err) {
    console.log("err", err);
    res.status(500).send("Internal Server Error");
  }
};

// visitor POST 등록
// INSERT INTO >> CREATE
exports.postVisitor = (req, res) => {
  console.log(req.body);

  // console.log("controller", result);
  // res.send({ id: result, comment: req.body.comment, name: req.body.name });
  models.Visitor.create({
    name: req.body.name,
    comment: req.body.comment,
  })
    .then((res) => {
      console.log(res);
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Server Error");
    });
};

// visitor DELETE 삭제
// delete > destroy
exports.deleteVisitor = async (req, res) => {
  console.log(req.body);
  console.log(req.body.id);
  // Visitor.deleteVisitor(req.body.id, () => {
  //   // res.send(req.body.id + "삭제완료");
  // });

  try {
    const result = await models.Visitor.destroy({ where: { id: req.body.id } });
    console.log(result);

    if (Boolean(result)) {
      res.send(req.body.id + "번 삭제완료");
    } else {
      res.send("잘못된 접근입니다");
    }
  } catch (err) {
    console.log(err);
  }
};

// visitor PATCH 수정
exports.patchVisitor = async (req, res) => {
  console.log(req.body);

  // Visitor.patchVisitor(req.body, () => {
  //   res.send("수정완료");
  // });

  // Sequelize 후

  try {
    const result = await models.Visitor.update(
      {
        name: req.body.name,
        comment: req.body.comment,
      },
      {
        where: {
          id: req.body.id,
        },
      }
    );
    console.log(result);
    res.send("수정완료");
  } catch (err) {
    errorlogs(res, err, "patch controller 내부");
  }
};
