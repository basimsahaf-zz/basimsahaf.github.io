/* validiateInput() extracts the user input, validiates it and
   dynamically manipulates the HTML using the decision tree. */

function validiateInput() {
  var input = $("#email").val(); /* stores the user input */
  var atIndex = input.indexOf("@");
  var dotIndex = input.lastIndexOf(".");
  if (atIndex < 1 || dotIndex < atIndex + 2 || dotIndex + 2 >= input.length) {
    /* validiates the input */
    $("#error").text("There was an error with your email"); /*error message */
  } else {
    /*dynamically changes the title and subtitle text */
    $("#title").text("Please check your email");
    $("#subtitle").text(
      "If" +
        " " +
        input +
        " " +
        "exists in our database, you should hear from us soon."
    );
    /* hides the textbox */
    $(".email").hide();
    /*hides the submit button */
    $(".button").hide();
    /*hides the text-box title */
    $(".textbox-title").hide();
    /* in case user got error message the first time and re-enters
           the input, the error message disappears */
    $(".error-message").hide();
  }
}