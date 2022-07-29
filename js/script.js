
let spacing = document.getElementById("spacing");
let blur = document.getElementById("blur");
let bgColor = document.getElementById("base");
let image = document.getElementById("image");
let rootEle = document.querySelector(":root");

console.log(getComputedStyle(rootEle).getPropertyValue("--img-blur"));

// change the width of image
spacing.addEventListener("change", function () {
    // image.style.width = (spacing.value * 5) + "px";
    rootEle.style.setProperty("--wd-image", (spacing.value * 5) + "px");
});


// change the blur of image
blur.addEventListener("change", function () {
    // image.style.filter = "blur(" + blur.value + "px)";
    rootEle.style.setProperty("--img-blur", blur.value + "px");
});

// change the border,of image
bgColor.addEventListener("change", function () {
    rootEle.style.setProperty("--clr-bg", bgColor.value);
});