
const video = document.getElementById("bgVideo");

video.play().catch(error => {
    console.log(error);
});