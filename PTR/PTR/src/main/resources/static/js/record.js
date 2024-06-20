document.addEventListener("DOMContentLoaded", function () {
  const calendarEl = document.getElementById("calendar").querySelector("tbody");
  let currentYear = 2024;
  let currentMonth = 6;
  let selectedDateEl = document.getElementById("selectedDate");
  let recordButton = document.getElementById("recordButton");

  function renderCalendar(year, month) {
    calendarEl.innerHTML = "";
    const firstDay = new Date(year, month - 1, 1).getDay();
    const lastDate = new Date(year, month, 0).getDate();

    let date = 1;
    for (let i = 0; i < 6; i++) {
      const row = document.createElement("tr");

      for (let j = 0; j < 7; j++) {
        const cell = document.createElement("td");
        if (i === 0 && j < firstDay) {
          cell.innerHTML = "";
        } else if (date > lastDate) {
          cell.innerHTML = "";
        } else {
          cell.innerHTML = date;
          const cellDate = date; // 클로저 문제 해결을 위해 별도 변수 사용
          cell.addEventListener("click", function () {
            selectDate(cell, year, month, cellDate);
          });
          date++;
        }
        row.appendChild(cell);
      }
      calendarEl.appendChild(row);
    }
  }

  function selectDate(cell, year, month, date) {
    clearSelectedDate();
    cell.classList.add("selected");
    selectedDateEl.innerText = `선택된 날짜: ${year}-${month}-${date}`;
    recordButton.style.display = "block";
    recordButton.onclick = function () {
      window.location.href = `management.html?year=${year}&month=${month}&date=${date}`;
    };
  }

  function clearSelectedDate() {
    const selectedCells = document.querySelectorAll("#calendar td.selected");
    selectedCells.forEach((cell) => cell.classList.remove("selected"));
    selectedDateEl.innerText = "";
    recordButton.style.display = "none";
  }

  function prevMonth() {
    currentMonth--;
    if (currentMonth < 1) {
      currentMonth = 12;
      currentYear--;
    }
    updateCalendar();
  }

  function nextMonth() {
    currentMonth++;
    if (currentMonth > 12) {
      currentMonth = 1;
      currentYear++;
    }
    updateCalendar();
  }

  function updateCalendar() {
    document.querySelector(
      ".content_date_year"
    ).textContent = `${currentYear}.`;
    document.querySelector(".content_date_month").textContent = currentMonth
      .toString()
      .padStart(2, "0");
    renderCalendar(currentYear, currentMonth);
  }

  // Chart.js 꺾은선 그래프 생성
  const lineCtx = document.getElementById("lineChart").getContext("2d");
  new Chart(lineCtx, {
    type: "line",
    data: {
      labels: ["1주", "2주", "3주", "4주", "5주"],
      datasets: [
        {
          label: "몸무게 ",
          data: [50, 52, 51, 51, 50],
          borderColor: "rgba(44, 57, 74, 1)",
          borderWidth: 4,
          fill: false,
          pointRadius: 0,
          pointHoverRadius: 0,
          backgroundColor: "rgba(0, 0, 0, 0)", // 배경색을 투명하게 설정
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          min: 0,
          max: 100,
          stepSize: 20,
          grid: {
            display: false, // y축의 그리드를 표시하지 않음
          },
          ticks: {
            display: false, // y축의 숫자를 표시하지 않음
            callback: function (value) {
              return value + "kg";
            },
          },
        },
        x: {
          grid: {
            display: false, // x축의 그리드를 표시하지 않음
          },
          ticks: {
            display: false, // x축의 숫자를 표시하지 않음
          },
        },
      },
      plugins: {
        legend: {
          display: false, // 범례를 표시하지 않음
        },
      },
    },
  });

  // Chart.js 세로 막대 그래프 생성
  const barCtx = document.getElementById("barChart").getContext("2d");
  new Chart(barCtx, {
    type: "bar",
    data: {
      labels: ["1주", "2주", "3주", "4주", "5주"],
      datasets: [
        {
          label: "섭취량",
          data: [600, 700, 530, 400, 350, 360, 800],
          backgroundColor: "rgba(254, 192, 9, 1)", // 막대 색상을 불투명하게 설정
          borderColor: "rgba(254, 192, 9, 1)",
          borderWidth: 1,
          pointRadius: 0,
          pointHoverRadius: 0,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          min: 0,
          max: 1000,
          stepSize: 20,
          grid: {
            display: false, // y축의 그리드를 표시하지 않음
          },
          ticks: {
            display: false, // y축의 숫자를 표시하지 않음
            callback: function (value) {
              return value + "kcal";
            },
          },
        },
        x: {
          grid: {
            display: false, // x축의 그리드를 표시하지 않음
          },
          ticks: {
            display: true, // x축의 숫자를 표시하지 않음
          },
        },
      },
      plugins: {
        legend: {
          display: false, // 범례를 표시하지 않음
        },
      },
    },
  });

  function addComment(comment) {
    const commentList = document.getElementById("commentList");
    const commentItem = document.createElement("div");
    commentItem.classList.add("comment_item");
    commentItem.setAttribute("data-id", comment.id);

    const commentText = document.createElement("div");
    commentText.classList.add("comment_text");
    commentText.textContent = comment.text;

    const commentButtons = document.createElement("div");
    commentButtons.classList.add("comment_buttons");

    const editButton = document.createElement("button");
    editButton.textContent = "수정";
    editButton.onclick = function () {
      editComment(comment.id);
    };

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "삭제";
    deleteButton.onclick = function () {
      deleteComment(comment.id);
    };

    commentButtons.appendChild(editButton);
    commentButtons.appendChild(deleteButton);
    commentItem.appendChild(commentText);
    commentItem.appendChild(commentButtons);
    commentList.appendChild(commentItem);
  }

  function saveComment(comment) {
    let comments = JSON.parse(localStorage.getItem("comments")) || [];
    if (selectedCommentId) {
      comments = comments.map((c) =>
        c.id === selectedCommentId ? comment : c
      );
      selectedCommentId = null;
    } else {
      comments.push(comment);
    }
    localStorage.setItem("comments", JSON.stringify(comments));
    renderComments();
  }

  function deleteComment(id) {
    let comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments = comments.filter((c) => c.id !== id);
    localStorage.setItem("comments", JSON.stringify(comments));
    renderComments();
  }

  function editComment(id) {
    const comments = JSON.parse(localStorage.getItem("comments")) || [];
    const comment = comments.find((c) => c.id === id);
    if (comment) {
      document.getElementById("commentTextarea").value = comment.text;
      selectedCommentId = id;
    }
  }

  function renderComments() {
    const commentList = document.getElementById("commentList");
    commentList.innerHTML = "";
    const comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.forEach(addComment);
  }

  document.getElementById("registerBtn").onclick = function () {
    const commentTextarea = document.getElementById("commentTextarea");
    const commentText = commentTextarea.value.trim();
    if (commentText) {
      const comment = {
        id: Date.now(),
        text: commentText,
      };
      saveComment(comment);
      commentTextarea.value = "";
    }
  };

  document.getElementById("updateBtn").onclick = function () {
    const commentTextarea = document.getElementById("commentTextarea");
    const commentText = commentTextarea.value.trim();
    if (commentText && selectedCommentId) {
      const comment = {
        id: selectedCommentId,
        text: commentText,
      };
      saveComment(comment);
      commentTextarea.value = "";
      selectedCommentId = null;
    }
  };

  document.getElementById("deleteBtn").onclick = function () {
    if (selectedCommentId) {
      deleteComment(selectedCommentId);
      document.getElementById("commentTextarea").value = "";
      selectedCommentId = null;
    }
  };

  updateCalendar();
  renderComments();
  window.prevMonth = prevMonth;
  window.nextMonth = nextMonth;
});
