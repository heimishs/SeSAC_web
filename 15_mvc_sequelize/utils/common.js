/** JS DOCS
 * 서버에러가 났을때 실행될 코드 모음
 * @param {res} res 실제 에러 전달
 * @param {Error} err 실제 에러 전달
 * @param {String} errMsgS 서버 콘솔에 띄워줄 메세지
 * @param {String} errMsgC 클라이언트에 나올 메세지
 * @param {Number} statusCode 에러 상태코드
 */

exports.errorlogs = (
  res,
  err,
  errMsgS = "Error",
  errMsgC = "Server error",
  statusCode = 500
) => {
  console.log(errMsgS, err);
  res.status(statusCode).send(errMsgC);
};
