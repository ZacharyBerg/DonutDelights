$(document).ready(function(){
	$("#signUp").validate({
    rules: {
      "name":{
        required: true
      },
      "email": {
        required: true
      }
    },
      messages: {
        "name": {
          required: "Enter your name"
        },
        "email": {
          required: "Enter your email"
        }

      }

  });
});
