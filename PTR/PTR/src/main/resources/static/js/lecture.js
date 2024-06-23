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


document.querySelector(".search_filter").addEventListener("click", ()=>{
  document.querySelector(".search_filter").classList.add("hiden")
  document.querySelector(".search_filter_close").classList.remove("hiden")
  document.querySelector(".search_box").classList.remove("hiden")
})

document.querySelector(".search_filter_close").addEventListener("click", ()=>{
  document.querySelector(".search_filter").classList.remove("hiden")
  document.querySelector(".search_filter_close").classList.add("hiden")
  document.querySelector(".search_box").classList.add("hiden")
})