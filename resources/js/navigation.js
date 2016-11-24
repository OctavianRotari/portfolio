$(document).ready(function() {
  'use strict';

  // On click, remove class on active element, add it to the new one
  $('.js--main-nav li').click(function(e) {
    var id = parseInt(this.id);
    $('.js--main-nav li.active').removeClass('active');
    $(this).addClass('active');

    // Scroll to index
    $(".js--main").moveTo(id);
    e.preventDefault();
    return false;
  });

  // On scroll, remove class on active element and add it to the new one
  $(".js--main").onepage_scroll({
    beforeMove: function(index) {
      $('.js--main-nav li.active').removeClass('active');
      var element = document.getElementById(index);
      $(element).addClass('active');
    }
  });
});

