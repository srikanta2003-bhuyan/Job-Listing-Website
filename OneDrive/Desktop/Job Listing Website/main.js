const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
     navLinks.classList.toggle("open");

     const isOpen = navLinks.classList.contains("open");
     menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
     navLinks.classList.remove("open");
     menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
     distance: "50px",
     origin: "bottom",
     duration: 1000,
};

scrollReveal().reveal(".header__container h2", {
     ...scrollRevealOption,
});

scrollReveal().reveal(".header__container h1", {
     ...scrollRevealOption,
     delay: 500,
});

scrollReveal().reveal(".header__container p", {
     ...scrollRevealOption,
     delay: 1000,
});
scrollReveal().reveal(".header__btns", {
     ...scrollRevealOption,
     delay: 1500,
});

scrollReveal().reveal(".steps__card", {
     ...scrollRevealOption,
     interval: 500,
});

scrollReveal().reveal(".explore__card", {
     duration: 1000,
     interval: 500,
});

scrollReveal().reveal(".job__card", {
     ...scrollRevealOption,
     interval: 500,
});

scrollReveal().reveal(".offer__card", {
     ...scrollRevealOption,
     interval: 500,
});

const swiper = new Swiper(".swiper", {
     loop: true,
})