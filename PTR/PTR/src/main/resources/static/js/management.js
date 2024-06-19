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

document.addEventListener("DOMContentLoaded", function () {
  function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
      year: params.get("year"),
      month: params.get("month"),
      date: params.get("get"),
    };
  }

  function updateDateDisplay() {
    const { year, month, date } = getQueryParams();
    if (year && month && date) {
      document.querySelector(".content_date_text").textContent =
        year + month.padStart(2, "0") + date.padStart(2, "0");
    }
  }
  updateDateDisplay();
});
