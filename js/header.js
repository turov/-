(function () {
  let page = document.querySelector('.page');
  let header = document.querySelector('.header');

  window.onscroll = function () {
    if (window.pageYOffset >= 80) {
      header.classList.add('header--active');
      page.classList.add('page--header-active');
    }
    else if (window.pageYOffset < 80) {
      header.classList.remove('header--active');
      page.classList.remove('page--header-active');
    }
  };
})();