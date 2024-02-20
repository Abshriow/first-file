const imgeslider = document.querySelector("#imgeSelider")
const  privBtn = document.querySelector("#privButton")
const nextBtn = document.querySelector("#nextButton")

const images = [
    "https://i0.wp.com/cms.babbel.news/wp-content/uploads/2017/03/The_35_Weirdest_American_City_Names.png ",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRRw4p-_C1eAoLa1jUxGHSMYJOwQEJIO0Yng&usqp=CAU ",
    "https://upload.wikimedia.org/wikipedia/commons/5/5b/St_Mary%27s_Church%2C_Castle_Street_1.jpg",
    "https://c02.purpledshub.com/uploads/sites/41/2023/04/Beijing-Hero-0915b57.jpg?w=1029&webp=1"
]

let indexImage = 0
function currentImage(){
    imgeslider. src = images[indexImage]
}

// handle next button
nextBtn.addEventListener("click",function(){
    indexImage++;
    if(indexImage > images.length-1){
        indexImage = 0
    }
    currentImage()
})

privBtn.addEventListener("click",function(){
    indexImage--;
    if(indexImage <0){
        indexImage = 0
    }
    currentImage()
})


currentImage()