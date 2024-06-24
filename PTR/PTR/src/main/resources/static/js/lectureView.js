const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
console.log("id: ", id);

const url = "http://localhost:8080/lecture/" + id;

axios
.get(url)
.then((response)=>{
    console.log("데이터: ", response.data);
    const lecture = {
        id: response.data.id
    }
    create(lecture)
})
.catch((error)=>{
    console.log("에러 발생: ", error);
});



function create(lecture){
    axios
    .post("http://localhost:8080/buyNumber", lecture)
    .then((lectureUser)=>{
        console.log("데이터: ", lectureUser.data);
        axios
        .post("http://localhost:8080/ratingAVG", lecture)
        .then((ratingAVG)=>{
            console.log("데이터: ", ratingAVG.data);
            view(response.data, lectureUser.data, ratingAVG.data);
        })
        .catch((error)=>{
            console.log("에러 발생: ", error);
        });
    })
    .catch((error)=>{
        console.log("에러 발생: ", error);
    });
}


function view(data, lectureUser, ratingAVG){
    const lecture_title = document.querySelector(".lecture_title");
    lecture_title.textContent = data.lectureName;

    const lecture_img = document.querySelector(".lecture_img");
    const video = document.createElement("video");
    video.src = data.url;
    lecture_img.appendChild(video);

    const lecture_teacher_img = document.querySelector(".lecture_teacher_img");
    const img = document.createElement("img");
    img.src = data.url;
    lecture_teacher_img.appendChild(img);




    const lecture_teacher_name = document.querySelector(".lecture_teacher_name");
    lecture_teacher_name.textContent = data.teacher.user.userName;

    const date = document.querySelector(".date");
    const createdAt = new Date(data.createdAt);
    date.textContent = `${createdAt.getFullYear()}. ${createdAt.getMonth() + 1}. ${createdAt.getDate()}.`;

    const price = document.querySelector(".price");
    price.textContent = "단백질바 " + data.price + "개";

    const lecture_description_value = document.querySelector(".lecture_description_value");
    lecture_description_value.textContent = data.description;

    const buyNum = document.querySelector(".buyNum");
    buyNum.textContent = lectureUser.length;

    const avg = document.querySelector(".avg");
    avg.textContent = ratingAVG;

    
    const tbody = document.querySelector("tbody");

    lectureUser.forEach((lectureUser, index)=>{
        if(lectureUser.teacherRating!=-1||lectureUser.teacherReview!=""){
            const tr = document.createElement("tr")
            const name = document.createElement("td")
            const rating = document.createElement("td")
            const review = document.createElement("td")
            const date = document.createElement("td")

            name.textContent = lectureUser.user.userName
            if(lectureUser.teacherRating!=-1){
                rating.textContent = lectureUser.teacherRating
            }else{
                rating.textContent = "미작성"
            }

            if(lectureUser.teacherReview!=""){
                review.textContent = lectureUser.teacherReview
            }else{
                review.textContent = "미작성"
            }

            const createdAt = new Date(lectureUser.createdAt);
            date.textContent = `${createdAt.getFullYear()}년 ${createdAt.getMonth() + 1}월 ${createdAt.getDate()}일`;

            tr.appendChild(name)
            tr.appendChild(rating)
            tr.appendChild(review)
            tr.appendChild(date)
            tbody.appendChild(tr)
        }
    })
}