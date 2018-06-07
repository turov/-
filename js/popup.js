(function () {
  let btn = document.querySelectorAll('.btn--buy');
  let wrapperBlack = document.querySelector('.wrapper-black');
  let popup = document.querySelector('.popup');
  let mobileBtn = document.querySelector('.btn--buy-mobile');
  let navMain = document.querySelector('.header__nav');

  btn.forEach(function (element) {
    element.addEventListener('click', function () {
      wrapperBlack.classList.add('wrapper-black--active');
      popup.classList.add('popup--active');
    })
  });

  mobileBtn.addEventListener('click', function (event) {
    wrapperBlack.classList.add("wrapper-black--active");
    popup.classList.add('popup--active');
    mobileBtn.classList.add('btn--buy-mobile-inactive');
  });

  wrapperBlack.addEventListener('click', function (event) {
    wrapperBlack.classList.remove("wrapper-black--active");
    popup.classList.remove('popup--active');
    mobileBtn.classList.remove('btn--buy-mobile-inactive');
    navMain.classList.remove('nav--opened');
  });

  window.addEventListener('keydown', function(event) {
    if (event.keyCode === 27) {
      if (popup.classList.contains("popup--active")) {
        popup.classList.remove("popup--active");
        wrapperBlack.classList.remove("wrapper-black--active");
        mobileBtn.classList.remove('btn--buy-mobile-inactive');
      }
    }
  });


})();