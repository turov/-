$(document).ready(function () {
  $('.js-example-basic-single').select2({
    placeholder: 'Выберите размер',
    minimumResultsForSearch: Infinity
  });
  $('.js-example-basic-multiple').select2({
    placeholder: 'Выберите топпинги'
  });
});

$(document).ready(function(){
  $('.slider').slick({
    dots: true
  });
});
