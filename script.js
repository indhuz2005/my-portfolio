
// =====================================
// 1. WAIT FOR HTML TO LOAD
// =====================================

document.addEventListener("DOMContentLoaded", function () {

    // =====================================
    // 2. AUTOMATIC COPYRIGHT YEAR
    // =====================================

    const year = document.getElementById("current-year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    // =====================================
    // 3. ACTIVE NAVIGATION LINK
    // =====================================

    const sections = document.querySelectorAll("main section");
    const navLinks = document.querySelectorAll("nav a[href^='#']");

    const observer = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                navLinks.forEach(function (link) {
                    link.classList.remove("active");
                });

                const activeLink = document.querySelector(
                    `nav a[href="#${entry.target.id}"]`
                );

                if (activeLink) {
                    activeLink.classList.add("active");
                }
            }

        });

    }, {
        threshold: 0.4
    });

    sections.forEach(function (section) {
        observer.observe(section);
    });


    // =====================================
    // 4. REVEAL SECTIONS ON SCROLL
    // =====================================

    const revealElements = document.querySelectorAll(
        "main section, #projects article"
    );

    const revealObserver = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                revealObserver.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.15
    });

    revealElements.forEach(function (element) {
        element.classList.add("reveal");
        revealObserver.observe(element);
    });


    // =====================================
    // 5. BACK TO TOP BUTTON
    // =====================================

    const topButton = document.getElementById("back-to-top");

    if (topButton) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 400) {
                topButton.classList.add("visible");
            } else {
                topButton.classList.remove("visible");
            }

        });

        topButton.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });

    }

});
