/**
 * GESTION DES CARROUSELS SWIPER
 * Utilisation d'une configuration commune pour plus de clarté
 */
const commonConfig = (selector) => ({
    loop: true,
    navigation: {
        nextEl: `${selector} .swiper-button-next`,
        prevEl: `${selector} .swiper-button-prev`,
    },
    pagination: {
        el: `${selector} .swiper-pagination`,
        clickable: true,
    },
    // Important pour que le slider se recalcule quand l'accordéon s'ouvre
    observer: true,
    observeParents: true,
});

// Initialisation des instances pour chaque projet
new Swiper('.mySwiper1', commonConfig('.mySwiper1'));
new Swiper('.mySwiper2', commonConfig('.mySwiper2'));
new Swiper('.mySwiper3', commonConfig('.mySwiper3')); // Congrès
new Swiper('.mySwiper4', commonConfig('.mySwiper4')); // Séminaire API
new Swiper('.mySwiper5', commonConfig('.mySwiper5')); // Symfony (si utilisé)
new Swiper('.mySwiper6', commonConfig('.mySwiper6')); // Projet National ACC
new Swiper('.mySwiperStage', commonConfig('.mySwiperStage'));

/**
 * GESTION DE L'ACCORDÉON
 */
const items = document.querySelectorAll('.accordion-item');

items.forEach(item => {
    const btn = item.querySelector('.accordion-title');
    const content = item.querySelector('.accordion-content');

    btn.addEventListener('click', () => {
        const isOpen = btn.classList.contains('active');

        // Fermer tous les autres accordéons
        document.querySelectorAll('.accordion-title').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.accordion-content').forEach(c => {
            c.style.maxHeight = null;
            c.classList.remove('open');
        });

        // Si l'élément cliqué n'était pas ouvert, on l'ouvre
        if (!isOpen) {
            btn.classList.add('active');
            // scrollHeight permet d'adapter la hauteur au contenu réel
            content.style.maxHeight = content.scrollHeight + "px";
            content.classList.add('open');
            
            // Petit bonus : après l'animation, on passe en 'max-height: none' 
            // pour que le Swiper puisse s'afficher sans être coupé
            setTimeout(() => {
                if(content.classList.contains('open')) {
                    content.style.maxHeight = "none";
                }
            }, 400); 
        }
    });
});

/**
 * BONUS : MISE EN SURBRILLANCE DU MENU ACTIF
 */
const sections = document.querySelectorAll('main section');
const navLi = document.querySelectorAll('header nav .menu li');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 100) { 
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