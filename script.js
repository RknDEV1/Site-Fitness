// =========================
// MENU MOBILE
// =========================

const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

if (menuToggle && menu) {
    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("active");
    });

    // Fecha o menu ao clicar em um link
    const menuLinks = menu.querySelectorAll("a");

    menuLinks.forEach((link) => {
        link.addEventListener("click", () => {
            menu.classList.remove("active");
        });
    });
}


// =========================
// ANIMAÇÃO AO ROLAR
// =========================

const animatedElements = document.querySelectorAll(
    ".benefit-card, .plan-card, .testimonial, .about-content, .about-image, .contact-card"
);

animatedElements.forEach((element) => {
    element.classList.add("hidden");
});


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


animatedElements.forEach((element) => {
    observer.observe(element);
});


// =========================
// FECHAR MENU AO REDIMENSIONAR
// =========================

window.addEventListener("resize", () => {

    if (window.innerWidth > 900) {
        menu.classList.remove("active");
    }

});


// =========================
// ANO AUTOMÁTICO DO FOOTER
// =========================

const footerText = document.querySelector(".footer p");

if (footerText) {

    const currentYear = new Date().getFullYear();

    footerText.innerHTML =
        `© ${currentYear} Fitness Club. Todos os direitos reservados.`;

}