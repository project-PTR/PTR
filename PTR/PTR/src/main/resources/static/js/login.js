document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const signupButton = document.getElementById("signupButton");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!validateEmail(email)) {
      alert("유효한 이메일 주소를 입력하세요.");
      return;
    }

    if (password.length < 5) {
      alert("비밀번호는 5자 이상이어야 합니다.");
      return;
    }

    // 폼 데이터가 유효할 경우 서버로 전송하는 로직 추가
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // 로그인 성공 시 동작
          window.location.href = "/main.html";
        } else {
          // 로그인 실패 시 동작
          alert("로그인 실패: " + data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("로그인 중 오류가 발생했습니다.");
      });
  });

  signupButton.addEventListener("click", function () {
    window.location.href = "signUp.html"; // 회원가입 페이지로 이동
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
});
