const Visitor = require("../model/Visitor");

exports.main = (req, res) => {
  res.render("index");
};

exports.getVisitors = (req, res) => {
  // console.log(Visitor.getVisitors());
  // res.render("visitor", { data: Visitor.getVisitors() }); DB 연결전
  Visitor.getVisitors((result) => {
    console.log(result);
    res.render("visitor", { data: result });
  });
};

// visitor/:id GET
exports.getVisitor = (req, res) => {
  console.log(req.params);
  console.log(req.params.id);
  Visitor.getVisitor(req.params.id, (result) => {
    console.log(result);
    res.send(result);
  });
};

// visitor POST 등록
exports.postVisitor = (req, res) => {
  console.log(req.body);
  Visitor.postVisitor(req.body, (result) => {
    console.log("controller", result);
    res.send({ id: result, comment: req.body.comment, name: req.body.name });
  });
};

// visitor DELETE 삭제
exports.deleteVisitor = (req, res) => {
  console.log(req.body);
  console.log(req.body.id);
  Visitor.deleteVisitor(req.body.id, () => {
    res.send(req.body.id + "삭제완료");
  });
};

// visitor PATCH 수정
exports.patchVisitor = (req, res) => {
  console.log(req.body);

  Visitor.patchVisitor(req.body, () => {
    res.send("수정완료");
  });
};
