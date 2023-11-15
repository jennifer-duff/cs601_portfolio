const ACCENT_COLOR = '#CC5E67';

let allImages = document.getElementsByTagName('img');

for (let i = 0; i < allImages.length; i++) {
    allImages[i].addEventListener("error", function (event) {
        console.log("ERROR");
        event.target.src = ""
        event.target.style.backgroundColor = ACCENT_COLOR;
        event.onerror = null
    });
}