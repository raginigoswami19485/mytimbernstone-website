
const image = document.querySelector("#hero img");
const video = document.querySelector("#bgVideo");

video.style.display = "none";

setInterval(() => {
    image.style.display = "none";
    video.style.display = "block";
    video.play();

    setTimeout(() => {
        video.style.display = "none";
        image.style.display = "block";
    }, 10000);

}, 6000);


window.addEventListener("scroll", function () {

    const firstLogo = document.querySelector(".imagebar");
    const secondLogo = document.querySelector(".second-logo");
    const nav = document.querySelector("#naving");
    const links = document.querySelectorAll(".pro li");

    if (window.scrollY > 50) {

        firstLogo.style.display = "none";
        secondLogo.style.display = "block";

        nav.style.background = "white";

        links.forEach(function(link) {
            link.style.color = "black";
        });

    } else {

        firstLogo.style.display = "block";
        secondLogo.style.display = "none";

        nav.style.background = "transparent";

        links.forEach(function(link) {
            link.style.color = "white";
        });

    }

});


// compalete

const images = [
  "https://timbernstone.in/cdn/shop/files/Gemini_Generated_Image_qohbh8qohbh8qohb_4f8e9d13-27c6-4de4-8c9a-ed4ddbf76a6e.png?v=1759841016&width=800",

  "https://timbernstone.in/cdn/shop/files/Gemini_Generated_Image_s8qx2us8qx2us8qx.png?v=1776425784&width=800",
  
  "https://timbernstone.in/cdn/shop/files/Gemini_Generated_Image_4camsy4camsy4cam.png?v=1775728401&width=1200",

  "https://timbernstone.in/cdn/shop/files/ChatGPT_Image_Dec_31_2025_at_03_05_30_PM.png?v=1767177851&width=1200" 

];

let index = 0;

setInterval(function () {

  index++;

  if (index >= images.length) {
    index = 0;
  }

  document.querySelector("#changeImg").src = images[index];

}, 2000);