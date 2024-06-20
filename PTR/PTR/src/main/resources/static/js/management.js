document.addEventListener("DOMContentLoaded", function () {
  let currentYear, currentMonth, currentDate;

  function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
      year: parseInt(params.get("year")),
      month: parseInt(params.get("month")),
      date: parseInt(params.get("date")),
    };
  }

  function padZero(num) {
    return num.toString().padStart(2, "0");
  }

  function updateDateDisplay(year, month, date) {
    document.querySelector(
      ".content_date_text"
    ).textContent = `${year}. ${padZero(month)}. ${padZero(date)}`;
  }

  async function saveData() {
    const data = {
      intake: document.querySelectorAll(".plan_summary_item .plan_value")[0]
        .textContent,
      consumption: document.querySelectorAll(
        ".plan_summary_item .plan_value"
      )[1].textContent,
      water: document.querySelectorAll(".plan_summary_item .plan_value")[2]
        .textContent,
      weight: document.querySelectorAll(".plan_summary_item .plan_value")[3]
        .textContent,
      carbs: getItems("carbs"),
      proteins: getItems("proteins"),
      fats: getItems("fats"),
    };

    const response = await fetch("/saveData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        year: currentYear,
        month: padZero(currentMonth),
        date: padZero(currentDate),
        data,
      }),
    });

    if (!response.ok) {
      alert("Failed to save data.");
    }
  }

  async function loadData(year, month, date) {
    const response = await fetch(
      `/loadData?year=${year}&month=${padZero(month)}&date=${padZero(date)}`
    );
    const data = await response.json();

    if (data) {
      document.querySelectorAll(
        ".plan_summary_item .plan_value"
      )[0].textContent = data.intake || "0 kcal";
      document.querySelectorAll(
        ".plan_summary_item .plan_value"
      )[1].textContent = data.consumption || "0 kcal";
      document.querySelectorAll(
        ".plan_summary_item .plan_value"
      )[2].textContent = data.water || "0 L";
      document.querySelectorAll(
        ".plan_summary_item .plan_value"
      )[3].textContent = data.weight || "0 kg";
      setItems("carbs", data.carbs || []);
      setItems("proteins", data.proteins || []);
      setItems("fats", data.fats || []);
    }
  }

  function navigateToDate(year, month, date) {
    saveData();
    window.location.href = "management.html?" + year + month + date;
  }

  function prevDay() {
    const currentDateObj = new Date(currentYear, currentMonth - 1, currentDate);
    currentDateObj.setDate(currentDateObj.getDate() - 1);

    currentYear = currentDateObj.getFullYear();
    currentMonth = currentDateObj.getMonth() + 1;
    currentDate = currentDateObj.getDate();

    updateDateDisplay(currentYear, currentMonth, currentDate);
    loadData(currentYear, currentMonth, currentDate);
  }

  function nextDay() {
    const currentDateObj = new Date(currentYear, currentMonth - 1, currentDate);
    currentDateObj.setDate(currentDateObj.getDate() + 1);

    currentYear = currentDateObj.getFullYear();
    currentMonth = currentDateObj.getMonth() + 1;
    currentDate = currentDateObj.getDate();

    updateDateDisplay(currentYear, currentMonth, currentDate);
    loadData(currentYear, currentMonth, currentDate);
  }

  function registerItem(category) {
    const itemText = prompt("항목을 입력하세요:");
    if (itemText) {
      const container = document.getElementById(`${category}_items`);
      const itemElement = document.createElement("div");
      itemElement.classList.add("meal_item");
      const itemTextElement = document.createElement("span");
      itemTextElement.textContent = itemText;
      const removeButton = document.createElement("button");
      removeButton.textContent = "X";
      removeButton.onclick = function () {
        itemElement.remove();
        updateSummaryValues(category);
        saveData();
      };
      itemElement.appendChild(itemTextElement);
      itemElement.appendChild(removeButton);
      container.appendChild(itemElement);
      updateSummaryValues(category);
      saveData();
    }
  }

  function updateWaterIntake() {
    const waterAmountElement = document.getElementById("waterAmount");
    const waterValue = waterAmountElement.textContent;

    const summaryWaterElement = document.querySelectorAll(
      ".plan_summary_item .plan_value"
    )[2];
    summaryWaterElement.textContent = `${waterValue} L`;

    saveData();
  }

  function updateWeight() {
    const weightInput = document.getElementById("weightInput").value;

    const summaryWeightElement = document.querySelectorAll(
      ".plan_summary_item .plan_value"
    )[3];
    summaryWeightElement.textContent = `${weightInput} kg`;

    saveData();
  }

  function getItems(category) {
    const items = [];
    document
      .querySelectorAll(`#${category}_items .meal_item`)
      .forEach((item) => {
        items.push(item.querySelector("span").textContent.trim());
      });
    return items;
  }

  function setItems(category, items) {
    const container = document.getElementById(`${category}_items`);
    container.innerHTML = "";
    items.forEach((item) => {
      const itemElement = document.createElement("div");
      itemElement.classList.add("meal_item");
      const itemTextElement = document.createElement("span");
      itemTextElement.textContent = item;
      const removeButton = document.createElement("button");
      removeButton.textContent = "X";
      removeButton.onclick = function () {
        itemElement.remove();
        updateSummaryValues(category);
        saveData();
      };
      itemElement.appendChild(itemTextElement);
      itemElement.appendChild(removeButton);
      container.appendChild(itemElement);
    });
  }

  function clearItems(category) {
    const container = document.getElementById(`${category}_items`);
    container.innerHTML = "";
  }

  function modifyItem(category) {
    const container = document.getElementById(`${category}_items`);
    const items = container.querySelectorAll(".meal_item");
    if (items.length > 0) {
      const itemToModify = prompt(
        "수정할 항목 번호를 입력하세요 (1부터 시작):"
      );
      const index = parseInt(itemToModify) - 1;
      if (index >= 0 && index < items.length) {
        const newItemText = prompt(
          "새 항목을 입력하세요:",
          items[index].querySelector("span").textContent.trim()
        );
        if (newItemText) {
          items[index].querySelector("span").textContent = newItemText;
          updateSummaryValues(category);
          saveData();
        }
      } else {
        alert("잘못된 번호입니다.");
      }
    } else {
      alert("수정할 항목이 없습니다.");
    }
  }

  function deleteItem(category) {
    const container = document.getElementById(`${category}_items`);
    const items = container.querySelectorAll(".meal_item");
    if (items.length > 0) {
      const itemToDelete = prompt(
        "삭제할 항목 번호를 입력하세요 (1부터 시작):"
      );
      const index = parseInt(itemToDelete) - 1;
      if (index >= 0 && index < items.length) {
        items[index].remove();
        updateSummaryValues(category);
        saveData();
      } else {
        alert("잘못된 번호입니다.");
      }
    } else {
      alert("삭제할 항목이 없습니다.");
    }
  }

  function updateSummaryValues(category) {
    const items = getItems(category);
    const totalValue = items.reduce((total, item) => {
      // Assuming each item represents a numeric value
      // Update this logic based on how each item should contribute to the total
      const value = parseFloat(item) || 0;
      return total + value;
    }, 0);

    if (category === "carbs") {
      document.querySelectorAll(
        ".plan_summary_item .plan_value"
      )[0].textContent = `${totalValue} kcal`;
    } else if (category === "proteins") {
      document.querySelectorAll(
        ".plan_summary_item .plan_value"
      )[1].textContent = `${totalValue} kcal`;
    } else if (category === "fats") {
      document.querySelectorAll(
        ".plan_summary_item .plan_value"
      )[1].textContent = `${totalValue} kcal`;
    }
  }

  const queryParams = getQueryParams();
  currentYear = queryParams.year;
  currentMonth = queryParams.month;
  currentDate = queryParams.date;

  if (currentYear && currentMonth && currentDate) {
    updateDateDisplay(currentYear, currentMonth, currentDate);
    loadData(currentYear, currentMonth, currentDate);

    document
      .querySelector(".content_date_left")
      .addEventListener("click", prevDay);
    document
      .querySelector(".content_date_right")
      .addEventListener("click", nextDay);
  } else {
    const today = new Date();
    currentYear = today.getFullYear();
    currentMonth = today.getMonth() + 1;
    currentDate = today.getDate();

    updateDateDisplay(currentYear, currentMonth, currentDate);
    loadData(currentYear, currentMonth, currentDate);
  }

  document.getElementById("decrease").addEventListener("click", function () {
    var waterAmountElement = document.getElementById("waterAmount");
    var currentValue = parseFloat(waterAmountElement.textContent);
    if (currentValue > 0) {
      waterAmountElement.textContent = (currentValue - 0.25).toFixed(2);
    }
  });

  document.getElementById("increase").addEventListener("click", function () {
    var waterAmountElement = document.getElementById("waterAmount");
    var currentValue = parseFloat(waterAmountElement.textContent);
    waterAmountElement.textContent = (currentValue + 0.25).toFixed(2);
  });

  document
    .querySelector(".water_intake button")
    .addEventListener("click", updateWaterIntake);
  document
    .querySelector(".weight button")
    .addEventListener("click", updateWeight);

  // 등록 버튼 이벤트 리스너 추가
  document.querySelectorAll(".meal_controls button").forEach((button) => {
    button.addEventListener("click", function () {
      const category = button.parentElement.parentElement.id;
      registerItem(category);
    });
  });

  // 탭 클릭 이벤트 리스너 추가
  document.querySelectorAll(".tabs ul li").forEach((tab) => {
    tab.addEventListener("click", function () {
      // 모든 탭에서 active 클래스 제거
      document.querySelectorAll(".tabs ul li").forEach((tab) => {
        tab.classList.remove("active");
      });
      // 클릭된 탭에 active 클래스 추가
      this.classList.add("active");

      // 모든 detail_section에서 active 클래스 제거
      document.querySelectorAll(".detail_section").forEach((section) => {
        section.classList.remove("active");
      });
      // 클릭된 탭의 data-target과 일치하는 detail_section에 active 클래스 추가
      const target = this.getAttribute("data-target");
      document.getElementById(target).classList.add("active");
    });
  });
});
