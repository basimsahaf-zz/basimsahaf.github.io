/* validiateInput() extracts the user input, validiates it and
   dynamically manipulates the HTML using the decision tree. */

function validiateInput() {
  var input = $("#email").val(); /* stores the user input */
  var atIndex = input.indexOf("@");
  var dotIndex = input.lastIndexOf(".");
  if (atIndex < 1 || dotIndex < atIndex + 2 || dotIndex + 2 >= input.length) {
    /* validiates the input */
    $("#error").text("There was an error with your email"); /*error message */
    $("#error").addClass("animated shake"); /* effects on error message*/
  } else {
    /*dynamically changes the title and subtitle text */
    $("#title").text("Please check your email");
    $("#subtitle").text(
      "If" +  " " +
        input +
        " " +
        "exists in our database, you should hear from us soon."
    );
    /* adding some fade effects and hiding elements*/
    $("#title").addClass("animated fadeInDown");
    $("#subtitle").addClass("animated fadeInDown");
    $(".email").addClass("animated fadeOutDown");
    $(".button").addClass("animated fadeOutDown");
    $(".verticalLineTop").addClass("animated pulse");
    $(".textbox-title").addClass("animated fadeOutDown");
    $(".error-message").addClass("animated fadeOutDown");
  }
}

/*checkEnter(event) calls the validiateInput() if user presses the
  enter key while typing in the textbox.*/

function checkEnter(event){
  if(event.keyCode==13){
    validiateInput();
  }
}