document.querySelector(".footer_feedMenu_feedHomeBtn").addEventListener("click", ()=>{
    document.querySelector(".content_feed").classList.remove("hiden");
    document.querySelector(".content_createFeed").classList.add("hiden");
    document.querySelector(".content_myFeed").classList.add("hiden");
    document.querySelector(".content_scrapFeed").classList.add("hiden");
})
document.querySelector(".footer_feedMenu_createFeedBtn").addEventListener("click", ()=>{
    document.querySelector(".content_feed").classList.add("hiden");
    document.querySelector(".content_createFeed").classList.remove("hiden");
    document.querySelector(".content_myFeed").classList.add("hiden");
    document.querySelector(".content_scrapFeed").classList.add("hiden");
})
document.querySelector(".footer_feedMenu_myFeedBtn").addEventListener("click", ()=>{
    document.querySelector(".content_feed").classList.add("hiden");
    document.querySelector(".content_createFeed").classList.add("hiden");
    document.querySelector(".content_myFeed").classList.remove("hiden");
    document.querySelector(".content_scrapFeed").classList.add("hiden");
})
document.querySelector(".footer_feedMenu_scrapFeedBtn").addEventListener("click", ()=>{
    document.querySelector(".content_feed").classList.add("hiden");
    document.querySelector(".content_createFeed").classList.add("hiden");
    document.querySelector(".content_myFeed").classList.add("hiden");
    document.querySelector(".content_scrapFeed").classList.remove("hiden");
})

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
    const feedbody = document.querySelector(".content_body");
    data.forEach((feed)=>{
        console.log(feed);
        //태그 요소 생성
        const content_feed = document.createElement("div");
        const content_feedheader = document.createElement("div");
        const content_feedheader_left = document.createElement("div");
        const content_feedheader_userPhoto = document.createElement("div");
        const content_feedheader_userId = document.createElement("div");
        const content_feedheader_date = document.createElement("div");
        const content_feedheader_moreBtn = document.createElement("div");
        const dot = document.createElement("div");
        const content_feedPhoto = document.createElement("div");
        const content_feedfooter = document.createElement("div");
        const content_feedfooter_left = document.createElement("div");
        const content_feedfooter_text = document.createElement("div");
        const content_feedfooter_right = document.createElement("div");
        const content_feedfooter_likeBtn = document.createElement("div");
        const content_feedfooter_like = document.createElement("div");
        const content_feedfooter_commentBtn = document.createElement("div");
        const content_feedfooter_comment = document.createElement("div");
        const content_feedfooter_scrapBtn = document.createElement("div");
        /*const content_feedMore = document.createElement("div");
        const content_feedMore_delete = document.createElement("div");
        const content_feedMore_likeCheck = document.createElement("div");*/
        //클래스 이름
        content_feed.classList.add("content_feed");
        content_feedheader.classList.add("content_feedheader");
        content_feedheader_left.classList.add("content_feedheader_left");
        content_feedheader_userPhoto.classList.add("content_feedheader_userPhoto");
        content_feedheader_userId.classList.add("content_feedheader_userId");
        content_feedheader_date.classList.add("content_feedheader_date");
        content_feedheader_moreBtn.classList.add("content_feedheader_moreBtn");
        dot.classList.add("dot");
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
        /*content_feedMore.classList.add("content_feedMore");
        content_feedMore_delete.classList.add("content_feedMore_delete");
        content_feedMore_likeCheck.classList.add("content_feedMore_likeCheck");*/
        
       
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
        content_feedheader_userId.textContent = feed.userId;
        content_feedheader_date.textContent = feed.createAt;
        content_feedPhoto.src = feed.image;
        content_feedfooter_text.textContent = feed.text;
        
        
        })
    
}
