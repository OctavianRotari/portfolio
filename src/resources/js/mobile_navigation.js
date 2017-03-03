$('#js--navigation').click(function () {
  var nav = $('.js--main-nav');
  var navUl = $('.main-nav');
  var icon = $('#js--navigation i');
  nav.slideToggle(200);

  if (icon.hasClass('ion-navicon')) {
    icon.addClass('ion-android-close');
    navUl.addClass('open');
    icon.removeClass('ion-navicon');
  }
  else {
    icon.removeClass('ion-android-close');
    navUl.removeClass('open');
    icon.addClass('ion-navicon');
  }
});
