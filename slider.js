var swiper = new Swiper('.mySwiper', {
  navigation: {
    nextEl: '.custom-next',
    prevEl: '.custom-prev',
  },
  pagination: {
    el: '.custom-swiper-pagination',
    type: 'progressbar',
  },
});