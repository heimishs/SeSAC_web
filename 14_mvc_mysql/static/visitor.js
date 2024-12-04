const tbody = document.querySelector("tbody");
// 방명록 등록
function createVisitor() {
  const form = document.forms["visitor-form"];

  if (form.name.value.length === 0 || form.comment.value.length === 0) {
    alert("이름과 방명록을 모두 기입해주세요");
  }

  //테이블 생성시 name 컬럼을 varchar(10)으로 설정해두어서
  //   프론트에서 유효한 검사를 하고 데이터 전송

  if (form.name.value.length > 10) {
    alert("이름은 10글자 미만으로 작성해주세요");
    return;
  }

  axios({
    method: "post",
    url: "/visitor",
    data: {
      name: form.name.value,
      comment: form.comment.value,
    },
  })
    .then((res) => {
      console.log(res);
      const { id, comment, name } = res.data;
      const newHtml = `
      <tr id="tr_${id}">
          <td>${id}</td>
          <td>${name}</td>
          <td>${comment}</td>
          <td><button type="button" onclick="editVisitor(${id})">
              수정
            </button></td>
          <td><button
              type="button"
              onclick="deleteVisitor(${id})"
            >
              삭제
            </button></td>
        </tr>`;

      tbody.insertAdjacentHTML("beforeend", newHtml);
      form.reset();
      //문자열을 특정 요소의 마지막에 HTML 추가
    })
    .catch((arr) => {
      console.log(err);
    });
}

// 방명록 삭제
function deleteVisitor(btn, id) {
  console.log(btn);

  axios({
    method: "delete",
    url: "/visitor",
    data: {
      id: id,
    },
  })
    .then((text) => {
      console.log(text);
      //   btn.parentElement.parentElement.remove();
      btn.closest(`#tr_${id}`).remove();
    })
    .catch((err) => {
      console.log(err);
    });
}

// 수정 버튼을 누르면
// GET /visitor 하나의 데이터 조회
// 1. 수정을 위한 입력창으로 변함
function editVisitor(id) {
  const form = document.forms["visitor-form"];

  axios({
    method: "get",
    url: `/visitor/${id}`,
  })
    .then((res) => {
      console.log(res.data);
      const { name, comment, id } = res.data;
      form.name.value = name;
      form.comment.value = comment;

      const btnCon = document.getElementById("btn_group");
      const html = `<button type="button" onclick="editDo(${id})">수정하기</button>
      <button type="button" onclick="editCancel()">수정취소</button>`;

      btnCon.innerHTML = html;
    })
    .catch((err) => {
      console.log(err);
    });
}

// 2. 실제 수정 데이터를 요청
function editDo(id) {
  const form = document.forms["visitor-form"];
  if (form.name.value.length === 0 || form.comment.value === 0) {
    alert("입력");
    return;
  }

  if (form.name.value.length > 10) {
  }

  axios({
    method: "patch",
    url: "/visitor",
    data: {
      id: id,
      comment: form.comment.value,
      name: form.name.value,
    },
  })
    .then((res) => {
      console.log(res.data);
      const { id, name, comment } = res.data;
      const tr = document.querySelector(`#tr_${id}`);
      console.log(tr.children);
      const children = tr.children;
      children[1].textContent = form.name.value;
      children[2].textContent = form.comment.value;

      editCancel();
    })
    .catch((err) => {
      console.log(err);
    });
}

function editCancel() {
  const form = document.forms["visitor-form"];
  form.reset();

  const btnCon = document.getElementById("btn_group");
  const html = `<button type="button" onclick="createVisitor()">방명록 등록</button>`;
  btnCon.innerHTML = html;
}
