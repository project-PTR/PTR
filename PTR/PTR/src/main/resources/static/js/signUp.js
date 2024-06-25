document.addEventListener("DOMContentLoaded", function () {
  const signUpForm = document.getElementById("signUpForm");

  signUpForm.addEventListener("submit", function (event) {
    event.preventDefault(); // 폼의 기본 제출 동작을 막음

    const signupData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      gender: document.querySelector('input[name="gender"]:checked').value,
      position: document.querySelector('input[name="position"]:checked').value,
      activity: Array.from(
        document.querySelectorAll('input[name="activity"]:checked')
      ).map((el) => el.value),
      diet_mode: Array.from(
        document.querySelectorAll('input[name="diet_mode"]:checked')
      ).map((el) => el.value),
      start_weight: document.getElementById("start_weight").value,
      target_weight: document.getElementById("target_weight").value,
    };

    fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert("회원가입이 완료되었습니다!");
        } else {
          alert("회원가입에 실패했습니다. 다시 시도해 주세요.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("회원가입 중 오류가 발생했습니다.");
      });
  });
});
