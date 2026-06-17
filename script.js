// ===============================
// H2OMG POOL FESTIVAL
// script.js
// ===============================

// ===============================
// COUNTDOWN TIMER
// ===============================

// Event Date
const eventDate = new Date("June 27, 2026 18:00:00").getTime();

const countdown = setInterval(() => {

    const now = new Date().getTime();

    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        /
        1000
    );

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {

        clearInterval(countdown);

        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";

    }

}, 1000);


// ===============================
// BOOK NOW BUTTONS
// ===============================

const bookButtons = document.querySelectorAll(".book-btn");

bookButtons.forEach(button => {

    button.addEventListener("click", () => {

        window.open(
            "https://wa.me/917382610001?text=Hi%20I%20want%20to%20book%20tickets%20for%20H2OMG%20Pool%20Festival",
            "_blank"
        );

    });

});


// ===============================
// STICKY BOOK BUTTON
// ===============================

const stickyButton = document.querySelector(".sticky-book");

if (stickyButton) {

    stickyButton.addEventListener("click", () => {

        document
            .getElementById("tickets")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

}


// ===============================
// NAVBAR SMOOTH SCROLL
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ===============================
// SCROLL ANIMATION
// ===============================

const revealElements = document.querySelectorAll(
    ".ticket-card, .highlight-card, .venue-card, .faq-item"
);

function revealOnScroll() {

    revealElements.forEach(el => {

        const windowHeight = window.innerHeight;

        const elementTop =
            el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            el.style.opacity = "1";
            el.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.7s ease";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// ===============================
// CONSOLE MESSAGE 😎
// ===============================

console.log(
    "🌊 H2OMG Pool Festival Website Loaded Successfully"
);
