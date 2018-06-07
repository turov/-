(function () {
  let navMain = document.querySelector('.header__nav');
  let navToggle = document.querySelector('.menu-toggle');
  let wrapperBlack = document.querySelector('.wrapper-black');

  navMain.style.paddingRight = navMain.offsetWidth - navMain.clientWidth + "px";

  navToggle.addEventListener('click', function () {
    navMain.classList.toggle('nav--opened');
    wrapperBlack.classList.toggle('wrapper-black--active');
  });
})();