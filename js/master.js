window.onscroll = function () {
  var y = window.scrollY;
  var header = $('.js-header');
  var headerNav = $('.js-header-nav');
  if (y > 0) {
    header.addClass('header--stuck');
  } else if (y <= 0 && headerNav.css('display') !== 'block') {
    header.removeClass('header--stuck');
  }
};

$('.js-search-button').click(function (e) {
  var inputContainer = $(this).prev();

  if(inputContainer.hasClass('form-search__hidden')){
    e.preventDefault();
    inputContainer.removeClass('form-search__hidden');
    inputContainer.find('.form-search__input').focus();
  }
});

$('.js-close-button').click(function (e) {
  var inputContainer = $(this).parents('.form-search__input-container');

  inputContainer.addClass('form-search__hidden');
});

$('body').click(function (e) {
  var inputSearch = $('.js-input-search');
  var inputContainer = $('.js-input-container');
  if (!inputSearch.is(':focus')) {
    inputContainer.addClass('form-search__hidden');
  }
  if ($(window).width() < 992) {
    var header = document.querySelector('.js-header');
    var target = e.target.closest('.js-header');
    if (target !== header) {
      $('.js-header-nav').slideUp(function () {
        $(this).removeAttr('style');
        var y = window.scrollY;
        if(y <= 0){
          $('.js-header').removeClass('header--stuck');
        }
      });
    }
  }
});

$('.js-review-carousel').slick({
  lazyLoad: 'progressive',
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  fade: true,
  speed: 600,
  autoplaySpeed: 8000,
  dots: true,
  appendDots: $('.js-review-control'),
  dotsClass: 'custom-dots',
  customPaging: function (slider, i) {
    return '<span class="custom-dots__item" role="button"></span>';
  }
});

function switchTab(nextTab) {
  var idNextTab = $(nextTab).attr('data-tab');

  $('.js-tab [data-tab]').removeClass('tab__active');
  $(nextTab).addClass('tab__active');
  $('.carousel-product__main').hide();
  $('#${idNextTab}').show();

  $('#${idNextTab} .js-carousel-product').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,}
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,}
      },
      {
        breakpoint: 678,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,}
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,}
      }
    ],
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: $('#${idNextTab} .control-next'),
    prevArrow: $('#${idNextTab} .control-prev')
  });
}

$('.js-tab [data-tab]').click(function (e) {
  var idCurrentTab = $('.js-tab .tab__active').attr('data-tab');

  $('#${idCurrentTab} .js-carousel-product').slick('unslick');
  e.preventDefault();
  switchTab(this);
});

switchTab($('.js-tab [data-tab="best-selling-product"]'));
$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget); // Button that triggered the modal
  var recipient = button.data('whatever'); // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this);
  modal.find('.modal-title').text('New message to ' + recipient);
  modal.find('.modal-body input').val(recipient);
});

// Responsive header

$('.js-button-collapse').click(function () {
  $('.js-header-nav').slideToggle(function () {
    if ($(this).css('display') == 'none') {
      $(this).removeAttr('style');
    }
  });

  if (!$('.js-header').hasClass('header--stuck')) {
    $('.js-header').addClass('header--stuck');
  } else if (window.scrollY <= 0) {
    $('.js-header').removeClass('header--stuck');
  }
});

$('[data-dropdown]').click(function (e) {
  e.stopPropagation();
  e.preventDefault();
  $(this).next().toggle(function () {
    if ($(this).css('display') == 'none') {
      $(this).removeAttr('style');
    }
  });
});
