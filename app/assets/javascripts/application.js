// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

function validateEmail(email) {
    var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    isValid = re.test(email);
    if (!isValid) {
      $('#email-input-form').focus();
      $('#submit-button').attr("disabled", true);
    } else{
      $('#submit-button').attr("disabled", false);
    }
}

$(document).ready(function(){
  $('#thank-you').hide();
  var typingTimer;                //timer identifier
  var doneTypingInterval = 100;  //time in ms, 5 second for example

  //on keyup, start the countdown
  $('#email-input-form').keyup(function(){
      typingTimer = setTimeout(doneTyping, doneTypingInterval);
  });

  //on keydown, clear the countdown
  $('#email-input-form').keydown(function(){
      clearTimeout(typingTimer);
    if (event.keyCode == 32) {
        event.returnValue = false;
        return false;
    }
  });

  //user is "finished typing," do something
  function doneTyping () {
     email = $('#email-input-form').val();
     validateEmail(email);
     $('#submit-button').click(function(){
        $('#form').fadeOut("slow", function(){
          $('#thank-you').fadeIn("slow", function(){});
        });
     });
  }



});