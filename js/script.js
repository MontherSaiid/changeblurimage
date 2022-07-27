
let spacing = document.getElementById("spacing");
let blur = document.getElementById("blur");
let bgColor = document.getElementById("base");
let image = document.getElementById("image");

// change the width of image
spacing.addEventListener("change", function () {
    image.style.width = (spacing.value * 5) + "px";
});

// change the blur of image
blur.addEventListener("change", function () {
    image.style.filter = "blur(" + blur.value + "px)";
});

// change the border,of image
bgColor.addEventListener("change", function () {
    image.style.border = "30px solid " + bgColor.value;
});