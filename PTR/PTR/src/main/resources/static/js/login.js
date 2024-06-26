document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const signupButton = document.getElementById("signupButton");

  document.querySelector("#loginBtn").addEventListener("click", () => {
    const loginData = {
      userId: document.getElementById("userId").value,
      password: document.getElementById("password").value,
    };
    console.log(loginData);
    axios
      .post("http://localhost:8080/user/login", loginData)
      .then((response) => {
        if (response.status === 200) {
          alert("로그인 성공!");
          window.location.href = "/ptr/main.html"; // 로그인 성공 시 메인 페이지로 리디렉션
        } else {
          alert("로그인 실패. 다시 시도해 주세요.");
        }
      })
      .catch((error) => {
        console.error("에러발생: ", error);
        alert("로그인 중 오류가 발생했습니다.");
      });
    console.log("a");
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const loginData = {
      userId: document.getElementById("userId").value,
      password: document.getElementById("password").value,
    };

    // 폼 데이터가 유효할 경우 서버로 전송하는 로직 추가
  });

  signupButton.addEventListener("click", function () {
    window.location.href = "signUp.html";
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
});
