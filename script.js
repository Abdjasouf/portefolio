
const buttons = document.querySelectorAll('nav button');
  const sections = document.querySelectorAll('section.content > div');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Retire l'active de tous les boutons
      buttons.forEach(b => b.classList.remove('active'));
      // Active le bouton cliqués
      btn.classList.add('active');

      // Cacher toutes les sections
      sections.forEach(section => section.classList.remove('active'));
      // Afficher la section ciblée
      const target = btn.getAttribute('data-target');
      document.getElementById(target).classList.add('active');
    });
  });

  const swiper1 = new Swiper('.mySwiper1', {
  loop: true,
  navigation: {
    nextEl: '.mySwiper1 .swiper-button-next',
    prevEl: '.mySwiper1 .swiper-button-prev',
  },
  pagination: {
    el: '.mySwiper1 .swiper-pagination',
    clickable: true,
  },
});

const swiper2 = new Swiper('.mySwiper2', {
  loop: true,
  navigation: {
    nextEl: '.mySwiper2 .swiper-button-next',
    prevEl: '.mySwiper2 .swiper-button-prev',
  },
  pagination: {
    el: '.mySwiper2 .swiper-pagination',
    clickable: true,
  },
});

const swiper3 = new Swiper('.mySwiper3', {
  loop: true,
  navigation: {
    nextEl: '.mySwiper3 .swiper-button-next',
    prevEl: '.mySwiper3 .swiper-button-prev',
  },
  pagination: {
    el: '.mySwiper3 .swiper-pagination',
    clickable: true,
  },
});

const swiper4 = new Swiper('.mySwiper4', {
  loop: true,
  navigation: {
    nextEl: '.mySwiper4 .swiper-button-next',
    prevEl: '.mySwiper4 .swiper-button-prev',
  },
  pagination: {
    el: '.mySwiper4 .swiper-pagination',
    clickable: true,
  },
});