$(document).ready(function(){
  $('.js--navigation-who-am-i').click(function(){
    $('.summary-who-am-i').addClass('animated fadeOut');
    setTimeout(function() {
      $('.summary-who-am-i').addClass('hidden');
    }, 1500);
    $('.horizontal').addClass('animated fadeIn');
  })
});


