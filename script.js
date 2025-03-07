document.addEventListener("DOMContentLoaded", function () {
    let navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("mouseenter", function () {
            this.style.color = "#ffcc00";
        });

        link.addEventListener("mouseleave", function () {
            this.style.color = "white";
        });
    });

    let projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach(card => {
        card.addEventListener("mouseover", function () {
            this.style.background = "#b0c4de";
        });

        card.addEventListener("mouseleave", function () {
            this.style.background = "#ddd";
        });
    });
});
