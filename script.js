
// Select menu elements
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// Mobile menu functionality
menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuBtn.innerHTML = isOpen ? "✕" : "☰";
    menuBtn.setAttribute("aria-expanded", isOpen);

});

// Close menu after clicking navigation links
const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuBtn.innerHTML = "☰";
        menuBtn.setAttribute("aria-expanded", "false");

    });

});

// Automatically update footer year
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();
