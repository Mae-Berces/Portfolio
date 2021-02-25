console.log("Astra Child Theme JS is running!");

document.addEventListener("DOMContentLoaded", function () {
    console.log("The DOM is ready!");
    
});
//--------- smooth scroll -----------//
document.querySelector("body").innerHTML += /*html*/
<a id="scroolTop" onclick="scrollToTheTop()" title="Go to top">^</a>
;

window.onscroll = function () {
    scrollFunction();
}
function scrollFunction(){
    if (document.body.scrollTop > 500 
}