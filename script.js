/**
 * ===============================
 * SWIPER GLOBAL (FIX PROPRE)
 * ===============================
 */

document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll('.swiper').forEach((container) => {

        const nextBtn = container.querySelector('.swiper-button-next');
        const prevBtn = container.querySelector('.swiper-button-prev');
        const pagination = container.querySelector('.swiper-pagination');

        new Swiper(container, {
            loop: true,

            navigation: (nextBtn && prevBtn) ? {
                nextEl: nextBtn,
                prevEl: prevBtn,
            } : false,

            pagination: pagination ? {
                el: pagination,
                clickable: true,
            } : false,
        });

    });

});


/**
 * ===============================
 * MENU ACTIF (NAVIGATION SCROLL)
 * ===============================
 */

const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav .menu li');

if (sections.length > 0 && navLi.length > 0) {
    window.addEventListener('scroll', () => {

        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;

            if (window.pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLi.forEach(li => {
            li.classList.remove('active');

            const link = li.querySelector('a').getAttribute('href');

            if (current && link.includes(current)) {
                li.classList.add('active');
            }
        });

    });
}


/**
 * ===============================
 * DRAWER (PAGE PROJETS UNIQUEMENT)
 * ===============================
 */

const toggleButtons = document.querySelectorAll(".btn-toggle-details");

if (toggleButtons.length > 0) {
    toggleButtons.forEach(btn => {

        btn.addEventListener("click", () => {

            const drawer = btn.nextElementSibling;

            if (!drawer) return;

            document.querySelectorAll(".project-details-drawer").forEach(d => {
                if (d !== drawer) {
                    d.classList.remove("open");
                }
            });

            drawer.classList.toggle("open");

        });

    });
}