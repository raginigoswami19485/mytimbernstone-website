
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