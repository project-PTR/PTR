document.addEventListener("DOMContentLoaded", function () {
  const calendarEl = document.getElementById("calendar").querySelector("tbody");
  let currentYear = 2024;
  let currentMonth = 6;

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
          cell.addEventListener("click", function () {
            window.location.href =
              "management.html?year=" + year + month + cell.innerHTML;
          });
          date++;
        }
        row.appendChild(cell);
      }
      calendarEl.appendChild(row);
    }
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

  updateCalendar();
  window.prevMonth = prevMonth;
  window.nextMonth = nextMonth;
});
