const slide = document.getElementById("slide");
let slides = document.querySelectorAll("#slide li");
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.id = "first-clone";
lastClone.id = "last-clone";
slide.appendChild(firstClone);
slide.insertBefore(lastClone, slides[0]);
slides = document.querySelectorAll("#slide li");
const next = document.getElementById("next");
const previous = document.getElementById("prev");

let index = 1;
const width = document.querySelector("#slide li").clientWidth;

slide.style.transform = `translateX(-${width * index}px)`

next.addEventListener("click", () => {
    if (index >= slides.length - 1) return;
    index++;
    slide.style.transition = "transform 0.9s ease";
    slide.style.transform = `translateX(-${width * index}px)`;
});

previous.addEventListener("click", () => {
    if (index <= 0) return;
    index--;
    slide.style.transition = "transform 0.9s ease";
    slide.style.transform = `translateX(-${width * index}px)`;
});

slide.addEventListener("transitionend", () => {
    if (slides[index].id === "first-clone") {
        slide.style.transition = "none";
        index = 1;
        slide.style.transform = `translateX(-${width * index}px)`;
    }

    if (slides[index].id === "last-clone") {
        slide.style.transition = "none";
        index = slides.length - 2;
        slide.style.transform = `translateX(-${width * index}px)`;
    }
});

