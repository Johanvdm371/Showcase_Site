const currentUrl = window.location.href;
const header = document.querySelector("header");
const toMenu = document.querySelector(".to-menu");
const toAbout = document.querySelector(".to-about");
const findUs = document.querySelector("#find");
const love = document.querySelector(".love");

const toggleHeaderSize = () => {
    let windowPos = window.pageYOffset;
    if (windowPos > 125 && !header.classList.contains("small")) {
        header.classList.add("small")
    }
    else if (windowPos < 125 && header.classList.contains("small")) {
        header.classList.remove("small");
    }
}

const scrollAppear = (element, elementName, tolerance) => {
    let windowPos = window.innerHeight - tolerance;
    if (windowPos > element.getBoundingClientRect().top) {
        element.classList.remove(`${elementName}hidden`)
    }
}

document.addEventListener("scroll", toggleHeaderSize);
if (currentUrl.includes("nostro")){
    window.setTimeout(() => {
      love.classList.remove("lovehidden");
    }, 300);
     document.addEventListener("scroll", () => {
        scrollAppear(toMenu, "to-menu", Math.floor(window.innerWidth / 8));
        scrollAppear(toAbout, "to-about", Math.floor(window.innerWidth / 8));
        scrollAppear(findUs, "find", Math.floor(window.innerWidth / 8));;
    })
}