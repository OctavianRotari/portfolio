$(document).ready(function(){
  $(".brief-introduction-header h2").blast({ delimiter: "word" });
  $(".brief-introduction-header span").mouseover(
    function() {
      $(this).animateCss( "animated swing" );
    }
  );
})
