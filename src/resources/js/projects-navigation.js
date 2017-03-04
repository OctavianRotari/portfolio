$(document).ready(function(){
  $('.js--navigation-projects').click(function(e){
    // Scroll to index
    var id = parseInt(this.id);
    $.fn.fullpage.silentMoveTo('projects', id);
    e.preventDefault();
  })
});
