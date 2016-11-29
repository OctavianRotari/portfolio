$(document).ready(function(){
  var queryUrl = "https://api.github.com/users/OctavianRotari";
  $.ajax({
    url: queryUrl,
  }).done(function(data) {
  });
})
