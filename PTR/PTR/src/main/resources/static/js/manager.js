axios
.get("http://localhost:8080/todayLectureUser")
.then((response)=>{
    console.log("데이터: ", response.data)
    create_today_buy(response.data)   
})
.catch((error)=>{
    console.log("에러: ", error)
})

function create_today_buy(data){
    document.querySelector(".today_buy_num").textContent = "영상 구매 " + data.length + "건"
    let price = 0;
    data.forEach((data)=>{
        price = price + data.lecture.price
    })
    document.querySelector(".today_buy_total").textContent = price * 200 + "원"
}

axios
.get("http://localhost:8080/todayLecture")
.then((response)=>{
    console.log("데이터: ", response.data)
    create_today_upload(response.data)   
})
.catch((error)=>{
    console.log("에러: ", error)
})

function create_today_upload(data){
    document.querySelector(".today_upload_num").textContent = "영상 업로드 " + data.length + "건"
    let price = 0;
    data.forEach((data)=>{
        price = price + data.price
    })
    document.querySelector(".today_upload_total").textContent = price * 200 + "원"
}

axios
.get("http://localhost:8080/AllLectureUser")
.then((response)=>{
    console.log("데이터: ", response.data)
    create_tatal_sales(response.data)   
})
.catch((error)=>{
    console.log("에러: ", error)
})

function create_tatal_sales(data){
    document.querySelector(".tatal_sales_num").textContent = "총 판매 " + data.length + "건"
    let price = 0;
    data.forEach((data)=>{
        price = price + data.lecture.price
    })
    document.querySelector(".tatal_sales_total").textContent = price * 200 + "원"
}

let allUser = []
let allTeacher = []
let allAdmin = []
let onlyUsers = []

axios
.get("http://localhost:8080/allUser")
.then((response)=>{
    allUser = allUser.concat(response.data);
    axios
    .get("http://localhost:8080/allTeacher")
    .then((response)=>{
        allTeacher = allTeacher.concat(response.data);
        axios
        .get("http://localhost:8080/allAdmin")
        .then((response)=>{
            allAdmin = allAdmin.concat(response.data);
            axios
            .get("http://localhost:8080/onlyUsers")
            .then((response)=>{
                onlyUsers = onlyUsers.concat(response.data);
                create_tatal_user()
            })
            .catch((error)=>{
                console.log("에러: ", error)
            })
        })
        .catch((error)=>{
            console.log("에러: ", error)
        })
    })
    .catch((error)=>{
        console.log("에러: ", error)
    })
})
.catch((error)=>{
    console.log("에러: ", error)
})

function create_tatal_user(){
    document.querySelector(".tatal_user_user").textContent = "유저 " + onlyUsers.length + "명"
    document.querySelector(".tatal_user_teacher").textContent = "강사 " + allTeacher.length + "명"
    document.querySelector(".tatal_user_admin").textContent = "관리자 " + allAdmin.length + "명"

    document.querySelector(".tatal_user_tatal").textContent = allUser.length + "명"
    create_user_detail()
}

axios
.get("http://localhost:8080/findAllLecture")
.then((response)=>{
    console.log("데이터: ", response.data)
    create_tatal_lectures(response.data)   
})
.catch((error)=>{
    console.log("에러: ", error)
})

function create_tatal_lectures(data){
    document.querySelector(".tatal_lectures_total").textContent = data.length + "개"
}

axios
.get("http://localhost:8080/findNotReply")
.then((response)=>{
    console.log("데이터: ", response.data)
    create_new_Q(response.data)   
})
.catch((error)=>{
    console.log("에러: ", error)
})

function create_new_Q(data){
    document.querySelector(".new_Q_total").textContent = data.length + "개"
}



// manager_user 유저 정보

function create_user_detail(){
    create_user_detail_user()
    create_user_detail_user_taacher()
}

function create_user_detail_user(){
    const body = document.querySelector(".user_list");

    onlyUsers.forEach((user, index)=>{
        const user_item = document.createElement("div");
        user_item.classList.add("user_item");
        // user_item.onclick(showUserDetail(user));
        user_item.onclick = () => showUserDetail(user);

        const user_item_flex = document.createElement("div");
        user_item_flex.classList.add("user_item_flex");

        const user_item_userId = document.createElement("div");
        user_item_userId.classList.add("user_item_userId");
        user_item_userId.textContent = user.userId + "(유저)"

        const user_item_date = document.createElement("div");
        user_item_date.classList.add("user_item_date");
        user_item_date.textContent = user.createdAt + " 가입"

        const user_item_flex_detail = document.createElement("div");
        user_item_flex_detail.classList.add("user_item_flex_detail");

        const user_item_cash = document.createElement("div");
        user_item_cash.classList.add("user_item_cash");
        user_item_cash.textContent = "단백질바: " + user.coin + "개"

        const user_item_lecture = document.createElement("div");
        user_item_lecture.classList.add("user_item_lecture");
        const user_item_total = document.createElement("div");
        user_item_total.classList.add("user_item_lecture");
        
        axios
        .post("http://localhost:8080/myBuyLecture", {userId: user.userId})
        .then((response)=>{
            user_item_lecture.textContent = "영상 구매수: " + response.data.length + "개"
            let total_price = 0;
            response.data.forEach((lectureUser)=>{
                total_price = total_price + lectureUser.lecture.price
            })
            user_item_total.textContent = "영상 구매금액: " + (total_price * 200) + "원"
        })
        .catch((error)=>{
            console.log("에러: ", error)
        })

        const user_item_feed = document.createElement("div");
        user_item_feed.classList.add("user_item_lecture");
        user_item_feed.textContent = "피드 갯수: 10개(수정필요)"
        
        user_item_flex.appendChild(user_item_userId)
        user_item_flex.appendChild(user_item_date)

        user_item_flex_detail.appendChild(user_item_cash)
        user_item_flex_detail.appendChild(user_item_lecture)
        user_item_flex_detail.appendChild(user_item_total)
        user_item_flex_detail.appendChild(user_item_feed)

        user_item.appendChild(user_item_flex)
        user_item.appendChild(user_item_flex_detail)
    
        body.appendChild(user_item)
    })
}

function create_user_detail_user_taacher(){
    const body = document.querySelector(".user_list");

    allTeacher.forEach((teacher, index)=>{
        const user_item = document.createElement("div");
        user_item.classList.add("user_item");
        // user_item.onclick(showTeacherDetail(teacher));
        user_item.onclick = () => showTeacherDetail(teacher);

        const user_item_flex = document.createElement("div");
        user_item_flex.classList.add("user_item_flex");

        const user_item_userId = document.createElement("div");
        user_item_userId.classList.add("user_item_userId");
        user_item_userId.textContent = teacher.user.userId + "(강사)"

        const user_item_date = document.createElement("div");
        user_item_date.classList.add("user_item_date");
        user_item_date.textContent = teacher.user.createAt + " 가입"

        const user_item_flex_detail = document.createElement("div");
        user_item_flex_detail.classList.add("user_item_flex_detail");

        const user_item_cash = document.createElement("div");
        user_item_cash.classList.add("user_item_cash");
        

        axios
        .post("http://localhost:8080/teacherSubscription", {id: teacher.id})
        .then((response)=>{
            user_item_cash.textContent = "구독자: " + response.data + "명"
        })
        .catch((error)=>{
            console.log("에러: ", error)
        })

        const user_item_lecture = document.createElement("div");
        user_item_lecture.classList.add("user_item_lecture");
        const user_item_total = document.createElement("div");
        user_item_total.classList.add("user_item_lecture");

        axios
        .post("http://localhost:8080/findTeacherLecture", {id: teacher.id})
        .then((response)=>{
            user_item_lecture.textContent = "영상 업로드 갯수: " + response.data.length + "개"
        })
        .catch((error)=>{
            console.log("에러: ", error)
        })

        axios
        .post("http://localhost:8080/findLectureUserByTeacher", {id: teacher.id})
        .then((response)=>{
            let total_price = 0
            response.data.forEach((lectureUser)=>{
                total_price = total_price + lectureUser.lecture.price
            })
            document.querySelector(".user_item_total").textContent = "영상 판매금액: " + (total_price * 200) + "원"
        })
        .catch((error)=>{
            console.log("에러: ", error)
        })

        const user_item_feed = document.createElement("div");
        user_item_feed.classList.add("user_item_lecture");
        user_item_feed.textContent = "피드 갯수: 10개(수정필요)"
        
        user_item_flex.appendChild(user_item_userId)
        user_item_flex.appendChild(user_item_date)

        user_item_flex_detail.appendChild(user_item_cash)
        user_item_flex_detail.appendChild(user_item_lecture)
        user_item_flex_detail.appendChild(user_item_total)
        user_item_flex_detail.appendChild(user_item_feed)

        user_item.appendChild(user_item_flex)
        user_item.appendChild(user_item_flex_detail)
    
        body.appendChild(user_item)
    })
}

function showUserDetail(user){

}

function showTeacherDetail(teacher){

}




























document.querySelector(".content_menu_manager_home").addEventListener("click", ()=>{
    document.querySelector(".content_menu_manager_home").classList.add("content_menu_bold")
    document.querySelector(".content_menu_manager_user").classList.remove("content_menu_bold")
    document.querySelector(".content_menu_manager_lecture").classList.remove("content_menu_bold")

    document.querySelector(".manager_home").classList.remove("hiden")
    document.querySelector(".manager_user").classList.add("hiden")
})

document.querySelector(".content_menu_manager_user").addEventListener("click", ()=>{
    document.querySelector(".content_menu_manager_user").classList.add("content_menu_bold")
    document.querySelector(".content_menu_manager_home").classList.remove("content_menu_bold")
    document.querySelector(".content_menu_manager_lecture").classList.remove("content_menu_bold")

    document.querySelector(".manager_user").classList.remove("hiden")
    document.querySelector(".manager_home").classList.add("hiden")
})




// document.querySelector(".tatal_user_user").addEventListener("click", (event) => {
//     event.stopPropagation(); // 클릭 이벤트가 상위 요소로 전파되지 않도록 방지
// });










document.querySelector(".box_tatal_user").addEventListener("click", ()=>{
    document.querySelector(".content_menu_manager_user").classList.add("content_menu_bold")
    document.querySelector(".content_menu_manager_home").classList.remove("content_menu_bold")
    document.querySelector(".content_menu_manager_lecture").classList.remove("content_menu_bold")

    document.querySelector(".manager_user").classList.remove("hiden")
    document.querySelector(".manager_home").classList.add("hiden")
})

document.querySelector(".box_tatal_teacher").addEventListener("click", ()=>{
    document.querySelector(".content_menu_manager_user").classList.add("content_menu_bold")
    document.querySelector(".content_menu_manager_home").classList.remove("content_menu_bold")
    document.querySelector(".content_menu_manager_lecture").classList.remove("content_menu_bold")

    document.querySelector(".manager_user").classList.remove("hiden")
    document.querySelector(".manager_home").classList.add("hiden")
})





