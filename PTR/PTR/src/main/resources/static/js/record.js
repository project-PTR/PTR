document.addEventListener("DOMContentLoaded", function () {
  const calendarEl = document.getElementById("calendar").querySelector("tbody");
  let currentYear = 2024;
  let currentMonth = 6;
  let selectedDateEl = document.getElementById("selectedDate");
  let recordButton = document.getElementById("recordButton");

  // 서버에서 데이터를 가져오는 함수
  // async function fetchData(year, month) {
  //   try {
  //     const [dietResponse, exerciseResponse] = await Promise.all([
  //       axios.get(`http://localhost:8080/dietData`, {
  //         params: {
  //           year: year,
  //           month: month,
  //         },
  //       }),
  //       axios.get(`http://localhost:8080/exerciseData`, {
  //         params: {
  //           year: year,
  //           month: month,
  //         },
  //       }),
  //     ]);

  //     const dietData = dietResponse.data;
  //     const exerciseData = exerciseResponse.data;
  //     updateCharts(dietData, exerciseData);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // }

  // 차트를 업데이트하는 함수
  function updateCharts(data) {
    intakeChart.data.datasets[0].data = data.intake;
    exerciseChart.data.datasets[0].data = data.exercise;
    intakeChart.update();
    exerciseChart.update();
  }

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
    recordButton.style.display = "block";
    cell.appendChild(recordButton);
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
    fetchData(currentYear, currentMonth);
  }

  // Chart.js 섭취량 막대 그래프 생성
  const barCtxIntake = document
    .getElementById("barChartIntake")
    .getContext("2d");
  new Chart(barCtxIntake, {
    type: "bar",
    data: {
      labels: ["1주", "2주", "3주", "4주", "5주"],
      datasets: [
        {
          label: "섭취량",
          data: [],
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

  // Chart.js 운동량 막대 그래프 생성
  const barCtxExercise = document
    .getElementById("barChartExercise")
    .getContext("2d");
  new Chart(barCtxExercise, {
    type: "bar",
    data: {
      labels: ["1주", "2주", "3주", "4주", "5주"],
      datasets: [
        {
          label: "운동량",
          data: [],
          backgroundColor: "rgba(75, 192, 192, 1)", // 막대 색상을 불투명하게 설정
          borderColor: "rgba(75, 192, 192, 1)",
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

  updateCalendar();
  renderComments();
  window.prevMonth = prevMonth;
  window.nextMonth = nextMonth;
});
