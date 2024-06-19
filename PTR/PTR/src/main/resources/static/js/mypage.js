const user = {
    userId: "cake"
}

axios
.post("http://localhost:8080/mySubscription", user)
.then((response)=>{
    console.log("데이터: ", response.data)
    createMySubscription(response.data)   
})
.catch((error)=>{
    console.log("에러: ", error)
})

function createMySubscription(data){
    const subscriptionBody = document.querySelector(".content_body_subscriptionlist")
    
    data.forEach((data, index)=>{
        const box = document.createElement("div");
        box.classList.add("content_body_subscriptionlist_box");
        box.classList.add("box");

        const image = document.createElement("div");
        const img = document.createElement("img");
        image.classList.add("content_body_subscriptionlist_box_img");
        img.src = data.teacher.user.profileImg;
        
        const name = document.createElement("div");
        name.classList.add("content_body_subscriptionlist_box_name");
        name.textContent = data.teacher.user.username;

        const butten = document.createElement("div");
        butten.classList.add("content_body_subscriptionlist_box_butten");
        butten.textContent = "자세히보기"

        image.appendChild(img);
        box.appendChild(image);
        box.appendChild(name);
        box.appendChild(butten);
        subscriptionBody.appendChild(box);
    })
}

axios
.post("http://localhost:8080/myBuyLecture", user)
.then((response)=>{
    console.log("데이터: ", response.data)
    createMyLecture(response.data) 
})
.catch((error)=>{
    console.log("에러: ", error)
})





{/* <div class="content_body_favoriteLecture">
              <div class="content_body_favoriteLecture_box box">
                <div class="content_body_favoriteLecture_box_img"></div>
                <div class="content_body_favoriteLecture_box_title">제목</div>
              </div>
              <div class="content_body_favoriteLecture_box box">
                <div class="content_body_favoriteLecture_box_img"></div>
                <div class="content_body_favoriteLecture_box_title">제목</div>
              </div>
              <div class="content_body_favoriteLecture_box box">
                <div class="content_body_favoriteLecture_box_img"></div>
                <div class="content_body_favoriteLecture_box_title">제목</div>
              </div>
              <div class="content_body_favoriteLecture_box box">
                <div class="content_body_favoriteLecture_box_img"></div>
                <div class="content_body_favoriteLecture_box_title">제목</div>
              </div>
              <div class="content_body_favoriteLecture_box box">
                <div class="content_body_favoriteLecture_box_img"></div>
                <div class="content_body_favoriteLecture_box_title">제목</div>
              </div>
              <div class="content_body_favoriteLecture_box box">
                <div class="content_body_favoriteLecture_box_img"></div>
                <div class="content_body_favoriteLecture_box_title">제목</div>
              </div>
            </div> */}

function createMyLecture(data){
    const lectureBody = document.querySelector(".content_body_favoriteLecture");

    data.forEach((data, index)=>{
        const box = document.createElement("div");
        box.classList.add("content_body_favoriteLecture_box");
        box.classList.add("box");

        const image = document.createElement("div");
        const img = document.createElement("video");
        image.classList.add("content_body_favoriteLecture_box_img");
        img.src = data.lecture.url;
        
        const name = document.createElement("div");
        name.classList.add("content_body_favoriteLecture_box_title");
        name.textContent = data.lecture.lectureName;

        
        image.appendChild(img);
        box.appendChild(image);
        box.appendChild(name);
        lectureBody.appendChild(box);
    })
}




























document.querySelector(".subscription").addEventListener("click", ()=>{
    document.querySelector(".content_body_subscription").classList.remove("hiden")
    document.querySelector(".content_body_myrecord").classList.add("hiden")
    document.querySelector(".content_body_cash").classList.add("hiden")
    document.querySelector(".content_body_myid").classList.add("hiden")
    
    document.querySelector(".subscription").classList.add("content_menu_bold")
    document.querySelector(".myrecord").classList.remove("content_menu_bold")
    document.querySelector(".cash").classList.remove("content_menu_bold")
    document.querySelector(".myid").classList.remove("content_menu_bold")

    document.querySelector(".head_subscription").classList.remove("hiden")
    document.querySelector(".head_myrecord").classList.add("hiden")
    document.querySelector(".head_cash").classList.add("hiden")
    document.querySelector(".head_myid").classList.add("hiden")
})
document.querySelector(".myrecord").addEventListener("click", ()=>{
    document.querySelector(".content_body_myrecord").classList.remove("hiden")
    document.querySelector(".content_body_subscription").classList.add("hiden")
    document.querySelector(".content_body_cash").classList.add("hiden")
    document.querySelector(".content_body_myid").classList.add("hiden")
    
    document.querySelector(".myrecord").classList.add("content_menu_bold")
    document.querySelector(".subscription").classList.remove("content_menu_bold")
    document.querySelector(".cash").classList.remove("content_menu_bold")
    document.querySelector(".myid").classList.remove("content_menu_bold")

    document.querySelector(".head_myrecord").classList.remove("hiden")
    document.querySelector(".head_subscription").classList.add("hiden")
    document.querySelector(".head_cash").classList.add("hiden")
    document.querySelector(".head_myid").classList.add("hiden")
})
document.querySelector(".cash").addEventListener("click", ()=>{
    document.querySelector(".content_body_cash").classList.remove("hiden")
    document.querySelector(".content_body_myrecord").classList.add("hiden")
    document.querySelector(".content_body_subscription").classList.add("hiden")
    document.querySelector(".content_body_myid").classList.add("hiden")
    
    document.querySelector(".cash").classList.add("content_menu_bold")
    document.querySelector(".myrecord").classList.remove("content_menu_bold")
    document.querySelector(".subscription").classList.remove("content_menu_bold")
    document.querySelector(".myid").classList.remove("content_menu_bold")

    document.querySelector(".head_cash").classList.remove("hiden")
    document.querySelector(".head_myrecord").classList.add("hiden")
    document.querySelector(".head_subscription").classList.add("hiden")
    document.querySelector(".head_myid").classList.add("hiden")
})
document.querySelector(".myid").addEventListener("click", ()=>{
    document.querySelector(".content_body_myid").classList.remove("hiden")
    document.querySelector(".content_body_myrecord").classList.add("hiden")
    document.querySelector(".content_body_cash").classList.add("hiden")
    document.querySelector(".content_body_subscription").classList.add("hiden")
    
    document.querySelector(".myid").classList.add("content_menu_bold")
    document.querySelector(".myrecord").classList.remove("content_menu_bold")
    document.querySelector(".cash").classList.remove("content_menu_bold")
    document.querySelector(".subscription").classList.remove("content_menu_bold")

    document.querySelector(".head_myid").classList.remove("hiden")
    document.querySelector(".head_myrecord").classList.add("hiden")
    document.querySelector(".head_cash").classList.add("hiden")
    document.querySelector(".head_subscription").classList.add("hiden")
})








document.querySelectorAll(".myid_tap1")[0].addEventListener("click", ()=>{
    console.log("1")
    document.querySelector(".content_body_myid_tap1").classList.remove("hiden")
    document.querySelector(".content_body_myid_tap2").classList.add("hiden")
    document.querySelector(".content_body_myid_tap3").classList.add("hiden")
})

document.querySelectorAll(".myid_tap2")[0].addEventListener("click", ()=>{
    console.log("2")
    document.querySelector(".content_body_myid_tap2").classList.remove("hiden")
    document.querySelector(".content_body_myid_tap1").classList.add("hiden")
    document.querySelector(".content_body_myid_tap3").classList.add("hiden")
})

document.querySelectorAll(".myid_tap3")[0].addEventListener("click", ()=>{
    console.log("3")
    document.querySelector(".content_body_myid_tap3").classList.remove("hiden")
    document.querySelector(".content_body_myid_tap1").classList.add("hiden")
    document.querySelector(".content_body_myid_tap2").classList.add("hiden")
})

document.querySelectorAll(".myid_tap1")[1].addEventListener("click", ()=>{
    console.log("1")
    document.querySelector(".content_body_myid_tap1").classList.remove("hiden")
    document.querySelector(".content_body_myid_tap2").classList.add("hiden")
    document.querySelector(".content_body_myid_tap3").classList.add("hiden")
})

document.querySelectorAll(".myid_tap2")[1].addEventListener("click", ()=>{
    console.log("2")
    document.querySelector(".content_body_myid_tap2").classList.remove("hiden")
    document.querySelector(".content_body_myid_tap1").classList.add("hiden")
    document.querySelector(".content_body_myid_tap3").classList.add("hiden")
})

document.querySelectorAll(".myid_tap3")[1].addEventListener("click", ()=>{
    console.log("3")
    document.querySelector(".content_body_myid_tap3").classList.remove("hiden")
    document.querySelector(".content_body_myid_tap1").classList.add("hiden")
    document.querySelector(".content_body_myid_tap2").classList.add("hiden")
})

document.querySelectorAll(".myid_tap1")[2].addEventListener("click", ()=>{
    console.log("1")
    document.querySelector(".content_body_myid_tap1").classList.remove("hiden")
    document.querySelector(".content_body_myid_tap2").classList.add("hiden")
    document.querySelector(".content_body_myid_tap3").classList.add("hiden")
})

document.querySelectorAll(".myid_tap2")[2].addEventListener("click", ()=>{
    console.log("2")
    document.querySelector(".content_body_myid_tap2").classList.remove("hiden")
    document.querySelector(".content_body_myid_tap1").classList.add("hiden")
    document.querySelector(".content_body_myid_tap3").classList.add("hiden")
})

document.querySelectorAll(".myid_tap3")[2].addEventListener("click", ()=>{
    console.log("3")
    document.querySelector(".content_body_myid_tap3").classList.remove("hiden")
    document.querySelector(".content_body_myid_tap1").classList.add("hiden")
    document.querySelector(".content_body_myid_tap2").classList.add("hiden")
})
