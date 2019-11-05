//Typing Descriptor Functions
const skills = document.getElementById("skills");
const content = ["HTML", "CSS", "JavaScript", "React.js", "Python", "Git & GitHub", "WordPress", "Adobe XD", "Figma", "Adobe Illustrator", "Photoshop/Gimp/Krita", "Blender 3D", "Prototyping"];
let nextNum = Math.floor(Math.random() * content.length);
let currentNum = nextNum;
let letterIndex = 0;
let currentWord = "";
let letters = "";
let direction = "forwards";


const typeForward = () => {
    letters = currentWord.slice(0, ++letterIndex);
    skills.textContent = letters;
};

const typeBackward = () => {
  letters = currentWord.slice(0, --letterIndex);
  skills.textContent = letters;
};

(function typing() {
    currentNum = nextNum;
    currentWord = content[currentNum];
    if (letters.length < currentWord.length && direction === "forwards") {
        typeForward();
        setTimeout(typing, 80);
    } else if (letters.length === currentWord.length && direction === "forwards") {
        direction = "backwards";
        setTimeout(typing, 1000);
    } else if (letterIndex > 0 && direction === "backwards") {
        typeBackward();
        setTimeout(typing, 80);
    } else if (letterIndex === 0 && direction === "backwards") {
        direction = "forwards";
        nextNum = Math.floor(Math.random() * content.length);
        if (nextNum === currentNum) {
          nextNum = Math.floor(Math.random() * content.length);
        }
        setTimeout(typing, 400);
    }
}());


//Contact Button Functions
const contact = document.querySelector(".contact");
const contactButton = document.querySelector(".contact-button");
const closeButton = document.querySelector(".close-button");
const clickOutside = document.querySelector(".click-outside");

closeButton.addEventListener("click", () => {
  contact.classList.add("hidden");
  clickOutside.classList.add("hidden");
});

clickOutside.addEventListener("click", () => {
    contact.classList.add("hidden");
    clickOutside.classList.add("hidden");
})

contactButton.addEventListener("click", () => {
  contact.classList.remove("hidden");
  clickOutside.classList.remove("hidden");
});


//Portfolio Functions
const showMore = document.querySelector(".portfolio-toggle-button");
const showMoreDown = document.querySelector(".down");
const showMoreUp = document.querySelector(".up");
const portfolio = document.querySelector(".portfolio");
let isContracted = true;
let contracted;
let expanded;
let numRows;
let numColumns;
const portfolioAmount = portfolio.childElementCount;

const getRowsColums = () => {
    const portfolioItemHeight = document.querySelector(".skewbox").clientHeight;
    const portfolioItemWidth = document.querySelector(".skewbox").clientWidth;
    let extraHeight;
    let windowWidth = window.innerWidth;
    numColumns = Math.floor(windowWidth / (portfolioItemWidth + 10));
    numRows = Math.ceil(portfolioAmount / numColumns);
    if (numColumns === 1) {
        extraHeight = 120;
        contracted = `${(portfolioItemHeight + extraHeight) * 3}px`;
    } else if (numColumns === 2) {
        extraHeight = 130;
        contracted = `${(portfolioItemHeight + extraHeight) * 2}px`;
    } else {
        extraHeight = 150;
        contracted = `${portfolioItemHeight + extraHeight}px`;
    }
    expanded = `${numRows * (portfolioItemHeight + extraHeight)}px`;
}

const portfolioToggle = () => {
    if (portfolio.style.height === contracted) {
        portfolio.style.height = expanded;
        isContracted = false;
    } else {
        portfolio.style.height = contracted;
        isContracted = true;
    }
}

/* Startup Sequence for smooth expanding portfolio: */
getRowsColums();
portfolio.style.height = contracted;
/*-------------------------------------*/

showMore.addEventListener("click", () => {
    portfolioToggle();
    showMoreDown.classList.toggle("hidden");
    showMoreUp.classList.toggle("hidden");
})

window.onresize = () => {
    getRowsColums();
    isContracted
      ? (portfolio.style.height = contracted)
      : (portfolio.style.height = expanded);
};