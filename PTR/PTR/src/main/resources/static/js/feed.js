document.querySelector(".footer_feedMenu_feedHomeBtn").addEventListener("click", ()=>{
    document.querySelector(".content_feed").classList.remove("hiden");
    document.querySelector(".content_feed2").classList.add("hiden");
    document.querySelector(".content_createFeed").classList.add("hiden");
    document.querySelector(".content_myFeed").classList.add("hiden");
    document.querySelector(".content_scrapFeed").classList.add("hiden");
    document.querySelector(".content_follower").classList.add("hiden");
    document.querySelector(".content_following").classList.add("hiden");
})
document.querySelector(".footer_feedMenu_createFeedBtn").addEventListener("click", ()=>{
    document.querySelector(".content_feed").classList.add("hiden");
    document.querySelector(".content_feed2").classList.add("hiden");
    document.querySelector(".content_createFeed").classList.remove("hiden");
    document.querySelector(".content_myFeed").classList.add("hiden");
    document.querySelector(".content_scrapFeed").classList.add("hiden");
    document.querySelector(".content_follower").classList.add("hiden");
    document.querySelector(".content_following").classList.add("hiden");
})
document.querySelector(".footer_feedMenu_myFeedBtn").addEventListener("click", ()=>{
    document.querySelector(".content_feed").classList.add("hiden");
    document.querySelector(".content_feed2").classList.add("hiden");
    document.querySelector(".content_createFeed").classList.add("hiden");
    document.querySelector(".content_myFeed").classList.remove("hiden");
    document.querySelector(".content_scrapFeed").classList.add("hiden");
    document.querySelector(".content_follower").classList.add("hiden");
    document.querySelector(".content_following").classList.add("hiden");
})
document.querySelector(".footer_feedMenu_scrapFeedBtn").addEventListener("click", ()=>{
    document.querySelector(".content_feed").classList.add("hiden");
    document.querySelector(".content_feed2").classList.add("hiden");
    document.querySelector(".content_createFeed").classList.add("hiden");
    document.querySelector(".content_myFeed").classList.add("hiden");
    document.querySelector(".content_scrapFeed").classList.remove("hiden");
    document.querySelector(".content_follower").classList.add("hiden");
    document.querySelector(".content_following").classList.add("hiden");
})
document.querySelector(".content_follower_backBtn").addEventListener("click", ()=>{
    document.querySelector(".content_follower").classList.add("hiden");
    document.querySelector(".content_myFeed").classList.remove("hiden");
})
document.querySelector(".content_following_backBtn").addEventListener("click", ()=>{
    document.querySelector(".content_following").classList.add("hiden");
    document.querySelector(".content_myFeed").classList.remove("hiden");
})


//피드 홈
axios
.get("http://localhost:8080/feed", {withCredentials: true})
.then((response) => {
    console.log("데이터: ", response.data);
    displayFeed(response.data);
})
.catch((error)=>{
    console.log("에러발생: ", error);
})

function displayFeed(data){
    const feedbody = document.querySelector(".content_feed");
    data.forEach((feed)=>{
        console.log(feed);
        //태그 요소 생성
        const content_feed = document.createElement("div");
        const content_feedheader = document.createElement("div");
        const content_feedheader_left = document.createElement("div");
        const content_feedheader_userPhoto = document.createElement("img");
        const content_feedheader_userId = document.createElement("div");
        const content_feedheader_date = document.createElement("div");
        const content_feedheader_moreBtn = document.createElement("div");
        const dot1 = document.createElement("div");
        const dot2 = document.createElement("div");
        const dot3 = document.createElement("div");
        const content_feedPhoto = document.createElement("img");
        const content_feedfooter = document.createElement("div");
        const content_feedfooter_left = document.createElement("div");
        const content_feedfooter_text = document.createElement("div");
        const content_feedfooter_right = document.createElement("div");
        const content_feedfooter_likeBtn = document.createElement("img");
        const content_feedfooter_like = document.createElement("div");
        const content_feedfooter_commentBtn = document.createElement("img");
        const content_feedfooter_comment = document.createElement("div");
        const content_feedfooter_scrapBtn = document.createElement("img");
        const content_feedheader_a = document.createElement("div");
        //클래스 이름
        content_feed.classList.add("content_feed");
        content_feedheader.classList.add("content_feedheader");
        content_feedheader_left.classList.add("content_feedheader_left");
        content_feedheader_userPhoto.classList.add("content_feedheader_userPhoto");
        content_feedheader_userId.classList.add("content_feedheader_userId");
        content_feedheader_date.classList.add("content_feedheader_date");
        content_feedheader_moreBtn.classList.add("content_feedheader_moreBtn");
        dot1.classList.add("dot");
        dot2.classList.add("dot");
        dot3.classList.add("dot");
        content_feedPhoto.classList.add("content_feedPhoto");
        content_feedfooter.classList.add("content_feedfooter");
        content_feedfooter_left.classList.add("content_feedfooter_left");
        content_feedfooter_text.classList.add("content_feedfooter_text");
        content_feedfooter_right.classList.add("content_feedfooter_right");
        content_feedfooter_likeBtn.classList.add("content_feedfooter_likeBtn");
        content_feedfooter_like.classList.add("content_feedfooter_like");
        content_feedfooter_commentBtn.classList.add("content_feedfooter_commentBtn");
        content_feedfooter_comment.classList.add("content_feedfooter_comment");
        content_feedfooter_scrapBtn.classList.add("content_feedfooter_scrapBtn");
        
       //태그 속성
        axios
        .post("http://localhost:8080/numberOfFeedLike", {id:feed.id}, {withCredentials: true})
        .then((response)=>{
            console.log("데이터: ", response.data);
            content_feedfooter_like.textContent = response.data;

        })
        .catch((error)=>{
            console.log("에러발생: ", error);
        })
        axios
        .post("http://localhost:8080/numberOfFeedComment", {id:feed.id}, {withCredentials: true})
        .then((response)=>{
            console.log("데이터: ", response.data);
            content_feedfooter_comment.textContent = response.data;

        })
        .catch((error)=>{
            console.log("에러발생: ", error);
        })

        content_feedheader_userPhoto.src = feed.user.profileImg;
        content_feedheader_userId.textContent = feed.user.userId;
        content_feedheader_date.textContent = feed.createdAt;
        content_feedPhoto.src = feed.image;
        content_feedfooter_text.textContent = feed.text;

        content_feedfooter_likeBtn.src = "/img/heart.png";
        content_feedfooter_commentBtn.src = "/img/comment.png";
        content_feedfooter_scrapBtn.src = "/img/bookmark.png";
        
        //부모 자식 위치
        feedbody.appendChild(content_feed);
        content_feed.appendChild(content_feedheader);
        content_feedheader.appendChild(content_feedheader_left);
        content_feedheader_left.appendChild(content_feedheader_userPhoto);
        content_feedheader_left.appendChild(content_feedheader_a);
        content_feedheader_a.appendChild(content_feedheader_userId);
        content_feedheader_a.appendChild(content_feedheader_date);
        content_feedheader.appendChild(content_feedheader_moreBtn);
        content_feedheader_moreBtn.appendChild(dot1);
        content_feedheader_moreBtn.appendChild(dot2);
        content_feedheader_moreBtn.appendChild(dot3);
        content_feed.appendChild(content_feedPhoto);
        content_feed.appendChild(content_feedfooter);
        content_feedfooter.appendChild(content_feedfooter_left);
        content_feedfooter_left.appendChild(content_feedfooter_text);
        content_feedfooter.appendChild(content_feedfooter_right);
        content_feedfooter_right.appendChild(content_feedfooter_likeBtn);
        content_feedfooter_right.appendChild(content_feedfooter_like);
        content_feedfooter_right.appendChild(content_feedfooter_commentBtn);
        content_feedfooter_right.appendChild(content_feedfooter_comment);
        content_feedfooter_right.appendChild(content_feedfooter_scrapBtn);

        })
}

//피드 작성
let user = {
    userId: "cake"
}
let text = "";
document.querySelector("#text-large").addEventListener("change",(e)=>{
    console.log(e.target.value);
    text = e.target.value;
})

document.querySelector(".content_createFeed_createBtn").addEventListener("click",()=>{
    const data = {
        user : {
            userId: user.userId
        },
        text:text
    }
    axios
    .post("http://localhost:8080/feed", data, {withCredentials: true})
    .then((response) => {
        console.log("서버 응답: ", response.data);
        alert("성공적으로 전송되었습니다.");
    })
    .catch((error) => {
        console.log("에러 발생: ", error);
        alert("에러가 발생했습니다.");
    });
})

// 스크랩
axios
.post("http://localhost:8080/feedScrap/user", {userId: user.userId}, {withCredentials: true})
.then((response) => {
    console.log("데이터: ", response.data);
    displayScrap(response.data);
})
.catch((error)=>{
    console.log("에러발생: ", error);
})

function displayScrap(data){
    const feedbody = document.querySelector(".content_scrapFeed_feeds");
    data.forEach((feed)=>{
        console.log(feed);
        //태그 요소 생성
        const content_scrapFeed_feed = document.createElement("img");
        
        //클래스 이름
        content_scrapFeed_feed.classList.add("content_scrapFeed_feed");
        
       //태그 속성
        content_scrapFeed_feed.src = feed.feed.image;

        content_scrapFeed_feed.addEventListener("click",()=>{

            document.querySelector(".content_scrapFeed").classList.add("hiden");
            document.querySelector(".content_feed2").classList.remove("hiden");
            console.log(feed);
            renderFeed(feed.feed);
            
        })
        
        //부모 자식 위치
        feedbody.appendChild(content_scrapFeed_feed);

        })

    function renderFeed(feed){
        console.log(feed);
        const feedbody = document.querySelector(".content_feed2");
        feedbody.innerHTML = "";
    
        const content_feed2 = document.createElement("div");
        const content_feedheader = document.createElement("div");
        const content_feedheader_left = document.createElement("div");
        const content_feedheader_userPhoto = document.createElement("img");
        const content_feedheader_userId = document.createElement("div");
        const content_feedheader_date = document.createElement("div");
        const content_feedheader_moreBtn = document.createElement("div");
        const dot1 = document.createElement("div");
        const dot2 = document.createElement("div");
        const dot3 = document.createElement("div");
        const content_feedPhoto = document.createElement("img");
        const content_feedfooter = document.createElement("div");
        const content_feedfooter_left = document.createElement("div");
        const content_feedfooter_text = document.createElement("div");
        const content_feedfooter_right = document.createElement("div");
        const content_feedfooter_likeBtn = document.createElement("img");
        const content_feedfooter_like = document.createElement("div");
        const content_feedfooter_commentBtn = document.createElement("img");
        const content_feedfooter_comment = document.createElement("div");
        const content_feedfooter_scrapBtn = document.createElement("img");
        const content_feedheader_a = document.createElement("div");
        //클래스 이름
        content_feed2.classList.add("content_feed2");
        content_feedheader.classList.add("content_feedheader");
        content_feedheader_left.classList.add("content_feedheader_left");
        content_feedheader_userPhoto.classList.add("content_feedheader_userPhoto");
        content_feedheader_userId.classList.add("content_feedheader_userId");
        content_feedheader_date.classList.add("content_feedheader_date");
        content_feedheader_moreBtn.classList.add("content_feedheader_moreBtn");
        dot1.classList.add("dot");
        dot2.classList.add("dot");
        dot3.classList.add("dot");
        content_feedPhoto.classList.add("content_feedPhoto");
        content_feedfooter.classList.add("content_feedfooter");
        content_feedfooter_left.classList.add("content_feedfooter_left");
        content_feedfooter_text.classList.add("content_feedfooter_text");
        content_feedfooter_right.classList.add("content_feedfooter_right");
        content_feedfooter_likeBtn.classList.add("content_feedfooter_likeBtn");
        content_feedfooter_like.classList.add("content_feedfooter_like");
        content_feedfooter_commentBtn.classList.add("content_feedfooter_commentBtn");
        content_feedfooter_comment.classList.add("content_feedfooter_comment");
        content_feedfooter_scrapBtn.classList.add("content_feedfooter_scrapBtn");
        
       //태그 속성
        axios
        .post("http://localhost:8080/numberOfFeedLike", {id:feed.id}, {withCredentials: true})
        .then((response)=>{
            console.log("데이터: ", response.data);
            content_feedfooter_like.textContent = response.data;
    
        })
        .catch((error)=>{
            console.log("에러발생: ", error);
        })
        axios
        .post("http://localhost:8080/numberOfFeedComment", {id:feed.id}, {withCredentials: true})
        .then((response)=>{
            console.log("데이터: ", response.data);
            content_feedfooter_comment.textContent = response.data;
    
        })
        .catch((error)=>{
            console.log("에러발생: ", error);
        })
    
        content_feedheader_userPhoto.src = feed.user.profileImg;
        content_feedheader_userId.textContent = feed.user.userId;
        content_feedheader_date.textContent = feed.createdAt;
        content_feedPhoto.src = feed.image;
        content_feedfooter_text.textContent = feed.text;
    
        content_feedfooter_likeBtn.src = "/img/heart.png";
        content_feedfooter_commentBtn.src = "/img/comment.png";
        content_feedfooter_scrapBtn.src = "/img/bookmark.png";
        
        //부모 자식 위치
        feedbody.appendChild(content_feed2);
        content_feed2.appendChild(content_feedheader);
        content_feedheader.appendChild(content_feedheader_left);
        content_feedheader_left.appendChild(content_feedheader_userPhoto);
        content_feedheader_left.appendChild(content_feedheader_a);
        content_feedheader_a.appendChild(content_feedheader_userId);
        content_feedheader_a.appendChild(content_feedheader_date);
        content_feedheader.appendChild(content_feedheader_moreBtn);
        content_feedheader_moreBtn.appendChild(dot1);
        content_feedheader_moreBtn.appendChild(dot2);
        content_feedheader_moreBtn.appendChild(dot3);
        content_feed2.appendChild(content_feedPhoto);
        content_feed2.appendChild(content_feedfooter);
        content_feedfooter.appendChild(content_feedfooter_left);
        content_feedfooter_left.appendChild(content_feedfooter_text);
        content_feedfooter.appendChild(content_feedfooter_right);
        content_feedfooter_right.appendChild(content_feedfooter_likeBtn);
        content_feedfooter_right.appendChild(content_feedfooter_like);
        content_feedfooter_right.appendChild(content_feedfooter_commentBtn);
        content_feedfooter_right.appendChild(content_feedfooter_comment);
        content_feedfooter_right.appendChild(content_feedfooter_scrapBtn);
        
    }
}


// 마이페이지
const content_myFeed_profile_img = document.getElementById("content_myFeed_profile_img");
const content_myFeed_profile_id = document.querySelector(".content_myFeed_profile_id");
const content_myFeed_profile_text = document.querySelector(".content_myFeed_profile_text");
axios
.post("http://localhost:8080/sendUser", {userId: user.userId}, {withCredentials: true})
.then((response) => {
    console.log("데이터: ", response.data);
    content_myFeed_profile_img.src = response.data.profileImg;
    content_myFeed_profile_id.textContent = response.data.userId;
    content_myFeed_profile_text.textContent = response.data.profileText;
})
.catch((error)=>{
    console.log("에러발생: ", error);
})

const content_myFeed_profile_box_numberOfFeed = document.querySelector(".content_myFeed_profile_box_numberOfFeed");
axios
.post("http://localhost:8080/numberOfFeed", {userId: user.userId}, {withCredentials:true})
.then((response)=>{
    console.log("데이터: ", response.data);
    content_myFeed_profile_box_numberOfFeed.textContent = response.data;

})
.catch((error)=>{
    console.log("에러발생: ", error);
})
const content_myFeed_profile_box_numberOfFollower = document.querySelector(".content_myFeed_profile_box_numberOfFollower");
axios
.post("http://localhost:8080/numberOfFollowByUser", {userId: user.userId}, {withCredentials:true})
.then((response)=>{
    console.log("데이터: ",response.data);
    content_myFeed_profile_box_numberOfFollower.textContent = response.data;
})
.catch((error)=>{
    console.log("에러발생: ", error);
})
const content_myFeed_profile_box_numberOfFollowing = document.querySelector(".content_myFeed_profile_box_numberOfFollowing");
axios
.post("http://localhost:8080/numberOfFollowByUser2", {userId: user.userId}, {withCredentials:true})
.then((response)=>{
    console.log("데이터: ", response.data);
    content_myFeed_profile_box_numberOfFollowing.textContent = response.data;
})
.catch((error)=>{
    console.log("에러발생: ", error);
})

axios
.post("http://localhost:8080/feed/id", {userId: user.userId}, {withCredentials: true})
.then((response) => {
    console.log("데이터: ", response.data);
    displayMyFeed(response.data);
})
.catch((error)=>{
    console.log("에러발생: ", error);
})

function displayMyFeed(data){
    const feedbody = document.querySelector(".content_myFeed_myfeeds");
    data.forEach((feed)=>{
        console.log(feed);
        //태그 요소 생성
        const content_myFeed_feed = document.createElement("img");
        
        //클래스 이름
        content_myFeed_feed.classList.add("content_myFeed_feed");
        
       //태그 속성
       content_myFeed_feed.src = feed.image;

       content_myFeed_feed.addEventListener("click",()=>{

            document.querySelector(".content_myFeed").classList.add("hiden");
            document.querySelector(".content_feed2").classList.remove("hiden");
            console.log(feed);
            renderFeed(feed);
            
        })
        
        //부모 자식 위치
        feedbody.appendChild(content_myFeed_feed);

        })

    function renderFeed(feed){
        console.log(feed);
        const feedbody = document.querySelector(".content_feed2");
        feedbody.innerHTML = "";
    
        const content_feed2 = document.createElement("div");
        const content_feedheader = document.createElement("div");
        const content_feedheader_left = document.createElement("div");
        const content_feedheader_userPhoto = document.createElement("img");
        const content_feedheader_userId = document.createElement("div");
        const content_feedheader_date = document.createElement("div");
        const content_feedheader_moreBtn = document.createElement("div");
        const dot1 = document.createElement("div");
        const dot2 = document.createElement("div");
        const dot3 = document.createElement("div");
        const content_feedPhoto = document.createElement("img");
        const content_feedfooter = document.createElement("div");
        const content_feedfooter_left = document.createElement("div");
        const content_feedfooter_text = document.createElement("div");
        const content_feedfooter_right = document.createElement("div");
        const content_feedfooter_likeBtn = document.createElement("img");
        const content_feedfooter_like = document.createElement("div");
        const content_feedfooter_commentBtn = document.createElement("img");
        const content_feedfooter_comment = document.createElement("div");
        const content_feedfooter_scrapBtn = document.createElement("img");
        const content_feedheader_a = document.createElement("div");
        //클래스 이름
        content_feed2.classList.add("content_feed2");
        content_feedheader.classList.add("content_feedheader");
        content_feedheader_left.classList.add("content_feedheader_left");
        content_feedheader_userPhoto.classList.add("content_feedheader_userPhoto");
        content_feedheader_userId.classList.add("content_feedheader_userId");
        content_feedheader_date.classList.add("content_feedheader_date");
        content_feedheader_moreBtn.classList.add("content_feedheader_moreBtn");
        dot1.classList.add("dot");
        dot2.classList.add("dot");
        dot3.classList.add("dot");
        content_feedPhoto.classList.add("content_feedPhoto");
        content_feedfooter.classList.add("content_feedfooter");
        content_feedfooter_left.classList.add("content_feedfooter_left");
        content_feedfooter_text.classList.add("content_feedfooter_text");
        content_feedfooter_right.classList.add("content_feedfooter_right");
        content_feedfooter_likeBtn.classList.add("content_feedfooter_likeBtn");
        content_feedfooter_like.classList.add("content_feedfooter_like");
        content_feedfooter_commentBtn.classList.add("content_feedfooter_commentBtn");
        content_feedfooter_comment.classList.add("content_feedfooter_comment");
        content_feedfooter_scrapBtn.classList.add("content_feedfooter_scrapBtn");
        
       //태그 속성
        axios
        .post("http://localhost:8080/numberOfFeedLike", {id:feed.id}, {withCredentials: true})
        .then((response)=>{
            console.log("데이터: ", response.data);
            content_feedfooter_like.textContent = response.data;
    
        })
        .catch((error)=>{
            console.log("에러발생: ", error);
        })
        axios
        .post("http://localhost:8080/numberOfFeedComment", {id:feed.id}, {withCredentials: true})
        .then((response)=>{
            console.log("데이터: ", response.data);
            content_feedfooter_comment.textContent = response.data;
    
        })
        .catch((error)=>{
            console.log("에러발생: ", error);
        })
    
        content_feedheader_userPhoto.src = feed.user.profileImg;
        content_feedheader_userId.textContent = feed.user.userId;
        content_feedheader_date.textContent = feed.createdAt;
        content_feedPhoto.src = feed.image;
        content_feedfooter_text.textContent = feed.text;
    
        content_feedfooter_likeBtn.src = "/img/heart.png";
        content_feedfooter_commentBtn.src = "/img/comment.png";
        content_feedfooter_scrapBtn.src = "/img/bookmark.png";
        
        //부모 자식 위치
        feedbody.appendChild(content_feed2);
        content_feed2.appendChild(content_feedheader);
        content_feedheader.appendChild(content_feedheader_left);
        content_feedheader_left.appendChild(content_feedheader_userPhoto);
        content_feedheader_left.appendChild(content_feedheader_a);
        content_feedheader_a.appendChild(content_feedheader_userId);
        content_feedheader_a.appendChild(content_feedheader_date);
        content_feedheader.appendChild(content_feedheader_moreBtn);
        content_feedheader_moreBtn.appendChild(dot1);
        content_feedheader_moreBtn.appendChild(dot2);
        content_feedheader_moreBtn.appendChild(dot3);
        content_feed2.appendChild(content_feedPhoto);
        content_feed2.appendChild(content_feedfooter);
        content_feedfooter.appendChild(content_feedfooter_left);
        content_feedfooter_left.appendChild(content_feedfooter_text);
        content_feedfooter.appendChild(content_feedfooter_right);
        content_feedfooter_right.appendChild(content_feedfooter_likeBtn);
        content_feedfooter_right.appendChild(content_feedfooter_like);
        content_feedfooter_right.appendChild(content_feedfooter_commentBtn);
        content_feedfooter_right.appendChild(content_feedfooter_comment);
        content_feedfooter_right.appendChild(content_feedfooter_scrapBtn);
        
    }
}            
        

//팔로워 조회
document.querySelector(".content_myFeed_profile_box_numberOfFollower").addEventListener("click",()=>{
    document.querySelector(".content_myFeed").classList.add("hiden");
    document.querySelector(".content_follower").classList.remove("hiden");


    axios
    .post("http://localhost:8080/userFollow/user", {userId: user.userId}, {withCredentials: true})
    .then((response) => {
        console.log("데이터: ", response.data);
        displayFollower(response.data);
        
    })
    .catch((error)=>{
        console.log("에러발생: ", error);
    })
})

function displayFollower(data){
    const follower = document.querySelector(".content_follower_follower");
    follower.innerHTML = "";
    data.forEach((follow)=>{
        console.log(follower);

        const content_follower_left = document.createElement("div");
        const content_follower_userPhoto = document.createElement("img");
        const content_follower_user = document.createElement("div");
        const content_follower_userId = document.createElement("div");
        const content_follower_userName = document.createElement("div");
        const content_follower_right = document.createElement("div");
        const content_follower_deleteFollower = document.createElement("div");

        content_follower_left.classList.add("content_follower_left");
        content_follower_userPhoto.classList.add("content_follower_userPhoto");
        content_follower_user.classList.add("content_follower_user");
        content_follower_userId.classList.add("content_follower_userId");
        content_follower_userName.classList.add("content_follower_userName");
        content_follower_right.classList.add("content_follower_right");
        content_follower_deleteFollower.classList.add("content_follower_deleteFollower");

        content_follower_userPhoto.src = follow.user2.profileImg;
        content_follower_userId.textContent = follow.user2.userId;
        content_follower_userName.textContent = follow.user2.userName;
        content_follower_deleteFollower.textContent = "삭제";
        content_follower_deleteFollower.addEventListener("click",()=>{
            axios
            .delete("/userFollow", {data:{ id: follow.id }}, {withCredentials: true})
            .then((response) => {
                console.log("데이터: ", response.data);

            })
            .catch((error)=>{
                console.log("에러발생: ", error);
            })
        })

        follower.appendChild(content_follower_left);
        content_follower_left.appendChild(content_follower_userPhoto);
        content_follower_left.appendChild(content_follower_user);
        content_follower_user.appendChild(content_follower_userId);
        content_follower_user.appendChild(content_follower_userName);
        follower.appendChild(content_follower_right);
        content_follower_right.appendChild(content_follower_deleteFollower);
    })
}

//팔로잉 조회
document.querySelector(".content_myFeed_profile_box_numberOfFollowing").addEventListener("click",()=>{
    document.querySelector(".content_myFeed").classList.add("hiden");
    document.querySelector(".content_following").classList.remove("hiden");


    axios
    .post("http://localhost:8080/userFollow/user2", {userId: user.userId}, {withCredentials: true})
    .then((response) => {
        console.log("데이터: ", response.data);
        displayFollowing(response.data);
        
    })
    .catch((error)=>{
        console.log("에러발생: ", error);
    })
})

function displayFollowing(data){
    const following = document.querySelector(".content_following_following");
    following.innerHTML = "";
    data.forEach((follow)=>{
        console.log(following);
        
        const content_following_left = document.createElement("div");
        const content_following_userPhoto = document.createElement("img");
        const content_following_user = document.createElement("div");
        const content_following_userId = document.createElement("div");
        const content_following_userName = document.createElement("div");
        const content_following_right = document.createElement("div");
        const content_following_deleteFollowing = document.createElement("div");

        content_following_left.classList.add("content_following_left");
        content_following_userPhoto.classList.add("content_following_userPhoto");
        content_following_user.classList.add("content_following_user");
        content_following_userId.classList.add("content_following_userId");
        content_following_userName.classList.add("content_following_userName");
        content_following_right.classList.add("content_following_right");
        content_following_deleteFollowing.classList.add("content_following_deleteFollowing");

        content_following_userPhoto.src = follow.user.profileImg;
        content_following_userId.textContent = follow.user.userId;
        content_following_userName.textContent = follow.user.userName;
        content_following_deleteFollowing.textContent = "삭제";
        content_following_deleteFollowing.addEventListener("click",()=>{
            axios
            .delete("/userFollow", {data:{ id: follow.id }}, {withCredentials: true})
            .then((response) => {
                console.log("데이터: ", response.data);

            })
            .catch((error)=>{
                console.log("에러발생: ", error);
            })
        })

        following.appendChild(content_following_left);
        content_following_left.appendChild(content_following_userPhoto);
        content_following_left.appendChild(content_following_user);
        content_following_user.appendChild(content_following_userId);
        content_following_user.appendChild(content_following_userName);
        following.appendChild(content_following_right);
        content_following_right.appendChild(content_following_deleteFollowing); 
    })
}