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
        name.textContent = data.teacher.user.userName;

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




axios
.post("http://localhost:8080/findCoin", user)
.then((response)=>{
    console.log("데이터: ", response.data)
    cash(response.data) 
})
.catch((error)=>{
    console.log("에러: ", error)
})

function cash(data){
    const before_cash = document.querySelector(".before_cash");
    before_cash.textContent = data + "개"

    let coin = data;
    let cash = 0;
    const after_cash = document.querySelector(".after_cash");
    const final_price_value = document.querySelector(".final_price_value");
    after_cash.textContent = coin + "개";
    final_price_value.textContent = cash + "원"

    document.querySelector(".cash_box_butten1").addEventListener("click", ()=>{
        coin = coin + 1;
        cash = cash + 200;
        console.log(1)
        after_cash.textContent = coin + "개";
        final_price_value.textContent = cash + "원"
    })
    document.querySelector(".cash_box_butten10").addEventListener("click", ()=>{
        coin = coin + 10;
        cash = cash + 2000;
        console.log(2)
        after_cash.textContent = coin + "개";
        final_price_value.textContent = cash + "원"
    })
    document.querySelector(".cash_box_butten30").addEventListener("click", ()=>{
        coin = coin + 30;
        cash = cash + 6000;
        console.log(3)
        after_cash.textContent = coin + "개";
        final_price_value.textContent = cash + "원"
    })
    document.querySelector(".cash_box_butten50").addEventListener("click", ()=>{
        coin = coin + 50;
        cash = cash + 10000;
        console.log(4)
        after_cash.textContent = coin + "개";
        final_price_value.textContent = cash + "원"
    })
    document.querySelector(".cash_box_butten100").addEventListener("click", ()=>{
        coin = coin + 100;
        cash = cash + 20000;
        console.log(5)
        after_cash.textContent = coin + "개";
        final_price_value.textContent = cash + "원"
    })
    document.querySelector(".cash_box_butten200").addEventListener("click", ()=>{
        coin = coin + 200;
        cash = cash + 40000;
        console.log(6)
        after_cash.textContent = coin + "개";
        final_price_value.textContent = cash + "원"
    })
    
    document.querySelector(".content_body_cash_butten").addEventListener("click",()=>{
        const changeuser = {
            userId: user.userId,
            coin: coin
        }
        
        axios
        .post("http://localhost:8080/changeCoin", changeuser)
        .then((response)=>{
            console.log("데이터: ", response.data)
            location.reload();
        })
        .catch((error)=>{
            console.log("에러: ", error)
        })
    })
}














axios
.post("http://localhost:8080/sendUser", user)
.then((response)=>{
    console.log("데이터: ", response.data)
    myid1(response.data) 
})
.catch((error)=>{
    console.log("에러: ", error)
})

function myid1(data){
    const myid_value_id = document.querySelector(".myid_value_id");
    const myid_value_name = document.querySelector(".myid_value_name");
    const myid_value_email = document.querySelector(".myid_value_email");
    const myid_value_birthday = document.querySelector(".myid_value_birthday");
    const myid_value_create = document.querySelector(".myid_value_create");
    
    myid_value_id.textContent = data.userId;
    myid_value_name.textContent = data.userName;
    myid_value_email.textContent = data.email;

    const birthday = new Date(data.birthday);
    const formattedDate = `${birthday.getFullYear()}년 ${birthday.getMonth() + 1}월 ${birthday.getDate()}일`;
    myid_value_birthday.textContent = formattedDate;

    const createdAt = new Date(data.createdAt);
    const formattedDateTime = `${createdAt.getFullYear()}년 ${createdAt.getMonth() + 1}월 ${createdAt.getDate()}일 ${createdAt.getHours()}시 ${createdAt.getMinutes()}분 ${createdAt.getSeconds()}초`;
    myid_value_create.textContent = formattedDateTime

    // 프로필 불러오기
    const myid_tap3_value_text = document.querySelector(".myid_tap3_value_text");
    myid_tap3_value_text.value = data.profileText;
}

axios
.post("http://localhost:8080/findUserCategory", user)
.then((response)=>{
    console.log("데이터: ", response.data)
    myid11(response.data) 
})
.catch((error)=>{
    console.log("에러: ", error)
})

function myid11(data){
    const myid_value_category = document.querySelector(".myid_value_category");
    let categorys = ""
    data.forEach((categoryUser, index)=>{
        if (index === data.length - 1) {
            categorys = categorys + categoryUser.category.categoryName;
        } else {
            categorys = categorys + categoryUser.category.categoryName + ", ";
        }
    })
    myid_value_category.textContent = categorys;
}



            
let changename = "";
let changepassword = "";
let changeemail = "";
let changebirthday = "";

document.querySelector("#usernameInput").addEventListener("change",(e)=>{
    changename = e.target.value;
    console.log(changename)
})
document.querySelector("#passwordInput").addEventListener("change",(e)=>{
    changepassword = e.target.value;
    console.log(changepassword)
})
document.querySelector("#emailInput").addEventListener("change",(e)=>{
    changeemail = e.target.value;
    console.log(changeemail)
})
document.querySelector("#birthdayInput").addEventListener("change",(e)=>{
    changebirthday = e.target.value;
    console.log(changebirthday)
})

document.querySelector(".myid_tap2_butten").addEventListener("click", async () => {
    const checkboxes = document.querySelectorAll('input[name="interest"]:checked');
    let interests = [];
    checkboxes.forEach(checkbox => {
        interests.push({
            user: { userId: user.userId },
            category: { categoryName: checkbox.value }
        });
    });

    const promises = [];

    if (interests.length > 0) {
        const interestPromise = axios.post("http://localhost:8080/saveUserCategory", interests)
            .then(response => {
                console.log("데이터: ", response.data);
            })
            .catch(error => {
                console.log("에러: ", error);
            });
        promises.push(interestPromise);
    }

    if (changename !== "") {
        const changeuser = {
            userId: user.userId,
            userName: changename
        };
        const namePromise = axios.post("http://localhost:8080/changeUserName", changeuser)
            .then(response => {
                console.log("데이터: ", response.data);
            })
            .catch(error => {
                console.log("에러: ", error);
            });
        promises.push(namePromise);
    }

    if (changepassword !== "") {
        const changeuser = {
            userId: user.userId,
            password: changepassword
        };
        const passwordPromise = axios.post("http://localhost:8080/changePassword", changeuser)
            .then(response => {
                console.log("데이터: ", response.data);
            })
            .catch(error => {
                console.log("에러: ", error);
            });
        promises.push(passwordPromise);
    }

    if (changeemail !== "") {
        const changeuser = {
            userId: user.userId,
            email: changeemail
        };
        const emailPromise = axios.post("http://localhost:8080/changeUserEmail", changeuser)
            .then(response => {
                console.log("데이터: ", response.data);
            })
            .catch(error => {
                console.log("에러: ", error);
            });
        promises.push(emailPromise);
    }

    if (changebirthday !== "") {
        const changeuser = {
            userId: user.userId,
            birthday: changebirthday
        };
        const birthdayPromise = axios.post("http://localhost:8080/changeUserBirthday", changeuser)
            .then(response => {
                console.log("데이터: ", response.data);
            })
            .catch(error => {
                console.log("에러: ", error);
            });
        promises.push(birthdayPromise);
    }

    try {
        await Promise.all(promises);
        console.log("모든 요청이 완료되었습니다.");
        location.reload();
    } catch (error) {
        console.log("요청 중 에러 발생: ", error);
    }
});



document.querySelector(".myid_tap3_butten").addEventListener("click", ()=>{
    const myid_tap3_value_text = document.querySelector(".myid_tap3_value_text");

    const changeProfileText = {
        userId: user.userId,
        profileText: myid_tap3_value_text.value
    };

    console.log(myid_tap3_value_text.value);

    axios
    .post("http://localhost:8080/changeProfileText", changeProfileText)
    .then((response)=>{
        console.log("데이터: ", response.data)
    })
    .catch((error)=>{
        console.log("에러: ", error)
    })


    const myid_tap3_value = document.querySelector(".myid_tap3_value");
    file = myid_tap3_value.files[0];

    const reader = new FileReader();
    reader.onload = function(e) {
        const dataUrl = e.target.result;
        console.log(dataUrl);
        const changeProfileImg = {
            userId: user.userId,
            profileImg: dataUrl
        };
        axios
        .post("http://localhost:8080/changeProfileImg", changeProfileImg)
        .then((response)=>{
            console.log("데이터: ", response.data)
        })
        .catch((error)=>{
            console.log("에러: ", error)
        })
    };

    reader.readAsDataURL(file);

    

    

})












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
