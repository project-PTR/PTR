document
  .getElementById("profileImageContainer")
  .addEventListener("click", function () {
    document.getElementById("profileImageInput").click();
  });

document
  .getElementById("profileImageInput")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        document.getElementById("profileImage").src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });

document.addEventListener("DOMContentLoaded", function () {
  const profileImageContainer = document.getElementById(
    "profileImageContainer"
  );
  const profileImageInput = document.getElementById("profileImageInput");
  const profileImage = document.getElementById("profileImage");
  const signUpForm = document.getElementById("signUpForm");

  profileImageContainer.addEventListener("click", function () {
    profileImageInput.click();
  });

  profileImageInput.addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        profileImage.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });
  signUpForm.addEventListener("submit", function (event) {
    event.preventDefault(); // 폼의 기본 제출 동작을 막음

    const formData = new FormData(signUpForm);
    formData.append("profileImage", profileImageInput.files[0]);

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

    formData.append(
      "signupData",
      new Blob([JSON.stringify(signupData)], {
        type: "application/json",
      })
    );

    fetch("/api/signup", {
      method: "POST",
      body: formData,
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
