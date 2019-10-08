const showButton = document.querySelector('.showbutton');
const webButton = document.querySelector('.webbutton');

//Popup trigger for proficiency icons on home page
function scrollAppearProficiencies() {
    const appearingItem1 = document.querySelector('.proficientbox1');
    const itemTop1 = appearingItem1.getBoundingClientRect().top;
    const appearingItem2 = document.querySelector('.proficientbox2');
    const itemTop2 = appearingItem2.getBoundingClientRect().top;
    const appearingItem3 = document.querySelector('.proficientbox3');
    const itemTop3 = appearingItem3.getBoundingClientRect().top;
    const appearingItem4 = document.querySelector('.proficientbox4');
    const itemTop4 = appearingItem4.getBoundingClientRect().top;
    const scrollHeight = window.innerHeight / 1.15;

    if (itemTop1 < scrollHeight) {
        appearingItem1.classList.add('appear');
    };
    if (itemTop2 < scrollHeight) {
        appearingItem2.classList.add('appear');
    };
    if (itemTop3 < scrollHeight) {
        appearingItem3.classList.add('appear');
    };
    if (itemTop4 < scrollHeight) {
        appearingItem4.classList.add('appear');
    };
}

//Smooth scroll to section for future showcase page (currently not implemented)
function smoothScroll(section, duration) {
    let sect = document.querySelector(section);
    let sectPosition = sect.getBoundingClientRect().top;
    let startPosition = window.pageYOffset;
    let distance = sectPosition - startPosition;
    let startTime = null;

    function scrollAnimation(currentTime) {
        if (startTime === null) {
            startTime = currentTime;
        }
        let timeElapsed = currentTime - startTime;
        let animate = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, animate);
        if (timeElapsed < duration) {
            requestAnimationFrame(scrollAnimation);
        }
    };

    //the function below is from http://www.gizma.com/easing/
    function ease(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
    };

    requestAnimationFrame(scrollAnimation);
}

//event listeners triggered per page
if (document.body.classList.contains("homepage")) {
    window.addEventListener('scroll', scrollAppearProficiencies);
}