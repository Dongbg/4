function upDate(previewPic) {

    console.log("Event triggered");
    console.log(previewPic.alt);
    console.log(previewPic.src);

    let imageDiv = document.getElementById("image");

    imageDiv.innerHTML = previewPic.alt;
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {

    let imageDiv = document.getElementById("image");

    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Hover over or focus on an image below to display here.";
}

function addTabFocus() {

    console.log("Page loaded – adding tabindex");

    let images = document.querySelectorAll(".gallery img");

    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
    }
}
