
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
