// TODO: 컨트롤러 코드
// const User = require("../model/User");
const models = require("../models/index");
// GET /user
exports.main = (req, res) => {
  res.render("index");
};

// GET /user/signup
exports.get_signup = (req, res) => {
  console.log(res.body);
  res.render("signup");
};

// GET /user/signin
exports.get_signin = (req, res) => {
  res.render("signin");
};

/* MODEL에게 DB 정보 요청하는 부분  */
// POST /user/signup
exports.post_signup = (req, res) => {
  console.log(req.body);
  User.post_signup(req.body, () => {
    res.end();
  });
};

// POST /user/signin
// 로그인 1. 로그인 가능한 계정인지 아닌지만 비교
exports.post_signin = async (req, res) => {
  try {
    const result = await models.User.findOne({
      where: { userid: "admin" },
    });

    if (result) {
      console.log(result);
    } else {
      console.log("No user found with the provided id");
    }
  } catch (err) {
    console.error("Error finding user:", err);
  }
};

// POST /user/profile, 로그인 버튼 클릭시 요청되는 form 전송
// 로그인 2(로그인 성공시). 로그인 가능한 회원이라면,
// 회원 정보 수정 페이지 render 시켜주기
exports.post_profile = (req, res) => {
  console.log(req.body); //{userid: ~}
  User.post_profile(req.body.userid, (result) => {
    // post_signin에서 userid가 테이블에 있을 때만
    // /user/profile에 POST 요청을 보내기 때문에
    // userid가 넘어오는지 아닌지는 확인하지 않아도 됨

    // 로그인 성공; views/profile.ejs 렌더링
    res.render("profile", { data: result[0] });
    // post요청에도 render 가능
    // profile 페이지를 보는 것은 POST 요청으로만 가능하기 때문에
    // GET /user/profile으로는 페이지 확인이 불가능함
  });
};

// POST /user/profile/edit
// 회원 정보 수정
exports.edit_profile = (req, res) => {
  console.log(req.body);
  User.edit_profile(req.body, () => {
    // res.send('회원정보 수정 성공!');
    res.end(); // 데이터를 아무것도 보내지 않으면서 응답을 종료하기 위해서는 response.end() 메소드를 사용한다.
  });
};

// POST /user/profile/delete
// 회원 탈퇴
exports.delete_profile = (req, res) => {
  console.log(req.body);
  User.delete_profile(req.body.id, () => {
    res.end();
  });
};
