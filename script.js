document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll(".nav-link");

    function highlightNav() {
        let scrollPos = window.scrollY;
        sections.forEach((section) => {
            if (
                scrollPos >= section.offsetTop - 50 &&
                scrollPos < section.offsetTop + section.offsetHeight
            ) {
                let id = section.getAttribute("id");
                navLinks.forEach((link) => {
                    link.classList.remove("active");
                    if (link.getAttribute("href").substring(1) === id) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }

    window.addEventListener("scroll", highlightNav);
});
