$(document).ready(function(){
  $('.js--navigation-who-am-i').click(function(e){
    // Scroll to index
    var id = parseInt(this.id);
    $.fn.fullpage.moveTo('who-am-i', id);
    e.preventDefault();
  })
  $('.js--who-am-i-back').click(function(e){
    var id = parseInt(this.id);
    $.fn.fullpage.moveTo('who-am-i', id);
    e.preventDefault();
  })
});
