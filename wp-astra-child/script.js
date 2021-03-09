console.log("Astra Child Theme JS is running!");

document.addEventListener("DOMContentLoaded", function () {
    console.log("The DOM is ready!");
  initScrollToTop();
  initTypedJs();
});
// ---------- smooth scroll ---------- //

function initScrollToTop() {
    document.querySelector("body").innerHTML += /*html*/`
        <a id="scrollTop" onclick="scrollToTheTop()" title="Go to top">^</a>
    `;
    window.onscroll = function () {
        scrollFunction();
    };
}

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("scrollTop").style.display = "block";
    } else {
        document.getElementById("scrollTop").style.display = "none";
    }
}

function scrollToTheTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
// ---------- typed.js ---------- //

function initTypedJs() {
    new Typed(".typed", {
        strings: ["MULTIMEMEDIEDESIGNER","VISUEL DESIGNER","UI DESIGNER","UX STRATEGIST"],
        typeSpeed: 75,
        loop: true,
    });
};

