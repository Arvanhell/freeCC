const topBtn = document.getElementById("scrollToTopBtn");

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});