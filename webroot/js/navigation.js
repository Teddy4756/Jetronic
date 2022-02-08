// NAV ANIMATION
const nav = document.querySelector("#nav")
window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
        nav.classList.add("navFixed")
    } else {
        nav.classList.remove("navFixed")
    }
})