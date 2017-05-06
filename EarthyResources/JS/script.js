var getData = $.ajax({
  url: "",
  type: "GET",
});



request.done(function(msg) {
  $("#log").html( msg );
});

request.fail(function(jqXHR, textStatus) {
  alert( "Request failed: " + textStatus );
});