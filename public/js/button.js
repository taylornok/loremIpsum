$(".signup").submit( (e)=> {
e.preventDefault();

var x = $("#password-input").val();
var y = $("#email-input").val();
    $.ajax({
        type: "POST",
        url: "/api/signup",
        data: {username: y, password: x},
        success: function(data, textStatus) {
        window.location.replace("/profile");
        }
      });

}
)