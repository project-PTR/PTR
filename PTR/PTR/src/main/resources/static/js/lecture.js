document.addEventListener("DOMContentLoaded", function () {
  const notifyButtons = document.querySelectorAll(".notify_button");

  notifyButtons.forEach((button) => {
    button.addEventListener("click", function () {
      if (this.style.backgroundColor === "rgb(254, 192, 9)") {
        this.style.backgroundColor = "#eee";
        alert("알림이 해제되었습니다!");
      } else {
        this.style.backgroundColor = "#FEC009";
        alert("알림이 설정되었습니다!");
      }
    });
  });
});

const user = {
  userId: "cake",
};

axios
  .get("http://localhost:8080/findAllLecture")
  .then((response) => {
    console.log("데이터: ", response.data);
    allLecture(response.data);
  })
  .catch((error) => {
    console.log("에러: ", error);
  });

function allLecture(data) {
  const body = document.querySelector(".content_body_interestLecture");

  data.forEach((data, index) => {
    const box = document.createElement("div");
    box.classList.add("content_body_interestLecture_box");
    box.classList.add("box");

    const videoDiv = document.createElement("div");
    const video = document.createElement("video");
    videoDiv.classList.add("content_body_interestLecture_box_img");
    video.src = data.url;

    const div = document.createElement("div");

    const lecture_flex = document.createElement("div");
    lecture_flex.classList.add("lecture_flex");

    const lecture_teacher_profile = document.createElement("div");
    lecture_teacher_profile.classList.add("lecture_teacher_profile");
    const img = document.createElement("img");
    img.src = data.teacher.user.profileImg;

    lecture_teacher_profile.addEventListener("click", (event) => {
      event.stopPropagation(); // 클릭 이벤트가 상위 요소로 전파되지 않도록 방지
      window.location.href = "teacherView.html?id=" + data.teacher.id;
    });

    img.addEventListener("click", (event) => {
      event.stopPropagation(); // 클릭 이벤트가 상위 요소로 전파되지 않도록 방지
      window.location.href = "teacherView.html?id=" + data.teacher.id;
    });

    const div2 = document.createElement("div");

    const lecture_title = document.createElement("div");
    lecture_title.classList.add("lecture_title");
    lecture_title.textContent = data.lectureName;

    const lecture_teacher_name = document.createElement("div");
    lecture_teacher_name.classList.add("lecture_teacher_name");
    lecture_teacher_name.textContent = data.teacher.user.userName;

    const lecture_updateTime = document.createElement("div");
    lecture_updateTime.classList.add("lecture_updateTime");
    const createdAt = new Date(data.createdAt);
    lecture_updateTime.textContent = `${createdAt.getFullYear()}. ${
      createdAt.getMonth() + 1
    }. ${createdAt.getDate()}.`;

    const lecture_price = document.createElement("div");
    lecture_price.classList.add("lecture_price");
    if (data.price == 0) {
      lecture_price.textContent = "무료";
    } else {
      lecture_price.textContent = "단백질바 " + data.price + "개";
    }

    videoDiv.appendChild(video);
    lecture_teacher_profile.appendChild(img);

    div2.appendChild(lecture_title);
    div2.appendChild(lecture_teacher_name);
    div2.appendChild(lecture_updateTime);

    lecture_flex.appendChild(lecture_teacher_profile);
    lecture_flex.appendChild(div2);

    div.appendChild(lecture_flex);
    div.appendChild(lecture_price);

    box.appendChild(videoDiv);
    box.appendChild(div);

    body.appendChild(box);

    box.addEventListener("click", () => {
      window.location.href = "lectureView.html?id=" + data.id;
    });
  });
}

document.getElementById("filterButton").addEventListener("click", function () {
  const searchParams = {
    searchType: document.querySelector("select[name='searchType']").value,
    keyword: document.querySelector("input[name='keyword']").value,
    categories: Array.from(
      document.querySelectorAll("input[name='category']:checked")
    ).map((el) => el.value),
    uploadDate: document.querySelector("input[name='uploadDate']:checked")
      .value,
    startDate: document.querySelector("input[name='startDate']").value,
    endDate: document.querySelector("input[name='endDate']").value,
    buy: document.querySelector("input[name='buy']:checked").value,
    price: document.querySelector("input[name='price']:checked").value,
    order: document.querySelector("input[name='order']:checked").value,
  };

  axios
    .post("http://localhost:8080/searchLecture", searchParams)
    .then((response) => {
      console.log("검색 결과: ", response.data);
      const body = document.querySelector(".content_body_interestLecture");
      body.innerHTML = ""; // 기존 내용을 지우고
      allLecture(response.data); // 검색 결과를 표시
    })
    .catch((error) => {
      console.log("에러: ", error);
    });
});

// 초기 데이터 로드
fetchData();

function fetchData() {
  axios
    .get("http://localhost:8080/findAllLecture")
    .then((response) => {
      console.log("초기 데이터: ", response.data);
      allLecture(response.data);
    })
    .catch((error) => {
      console.log("에러: ", error);
    });
}

// 맞춤 교육 영상 서비스
// let userCategoryList = []

// axios
// .post("http://localhost:8080/findUserCategory", user)
// .then((response)=>{
//   console.log("데이터: ", response.data)
//   findUserCategory(response.data)
// })
// .catch((error)=>{
//   console.log("에러: ", error)
// })

// function findUserCategory(data){
//   data.forEach((data, index)=>{
//     const category = {
//       categoryName: data.category
//     }
//     userCategoryList.add(category)
//   })
// }

// axios
// .post("http://localhost:8080/findLectureAllByCategoryIn", user)
// .then((response)=>{
//     console.log("데이터: ", response.data)
//     createMyLecturescrap(response.data)
// })
// .catch((error)=>{
//     console.log("에러: ", error)
// })

// function createMyLecturescrap(data){
//     const lectureBody = document.querySelector(".content_body_scrapLecture");

//     data.forEach((data, index)=>{
//         const box = document.createElement("div");
//         box.classList.add("content_body_scrapLecture_box");
//         box.classList.add("box");

//         const image = document.createElement("div");
//         const img = document.createElement("video");
//         image.classList.add("content_body_scrapLecture_box_img");
//         img.src = data.lecture.url;

//         const name = document.createElement("div");
//         name.classList.add("content_body_scrapLecture_box_title");
//         name.textContent = data.lecture.lectureName;

//         image.appendChild(img);
//         box.appendChild(image);
//         box.appendChild(name);
//         lectureBody.appendChild(box);
//     })
// }

document.querySelector(".search_filter").addEventListener("click", () => {
  document.querySelector(".search_filter").classList.add("hiden");
  document.querySelector(".search_filter_close").classList.remove("hiden");
  document.querySelector(".search_box").classList.remove("hiden");
});

document.querySelector(".search_filter_close").addEventListener("click", () => {
  document.querySelector(".search_filter").classList.remove("hiden");
  document.querySelector(".search_filter_close").classList.add("hiden");
  document.querySelector(".search_box").classList.add("hiden");
});
