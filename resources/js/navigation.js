$(document).ready(function() {
  'use strict';
  $('.js--main-nav li').click(function(e) {
    // Scroll to index
    var id = parseInt(this.id);
    $(".js--main").moveTo(id);
    e.preventDefault();
    return false;
  });
});

