var swiper = new Swiper('.mySwiper', {
  navigation: {
      nextEl: '.custom-next',
      prevEl: '.custom-prev',
  },
  pagination: {
      el: '.custom-swiper-pagination',
      type: 'progressbar',
  },
  on: {
      init: function() {
          updateNavButtons(this);
      },
      slideChange: function() {
          updateNavButtons(this);
      }
  }
});

function updateNavButtons(swiper) {
  const prevButton = document.querySelector('.custom-prev');
  const nextButton = document.querySelector('.custom-next');

  if (swiper.isBeginning) {
      prevButton.classList.add('inactive');
  } else {
      prevButton.classList.remove('inactive');
  }

  if (swiper.isEnd) {
      nextButton.classList.add('inactive');
  } else {
      nextButton.classList.remove('inactive');
  }
}
