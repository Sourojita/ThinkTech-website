function sendFunc() {
  var message = document.getElementById("message").value;
  var email = document.getElementById("email").value;
  var fullName = document.getElementById("name").value;

  var body = "Email: " + email +"<br/> Name:" + fullName + "<br/> Message:" + message;

  Email.send({
    SecureToken: "08e8cd26-1732-44d0-9c78-3e7c99abe52d",
    To: 'devx.264@gmail.com',
    From: "devx.264@gmail.com",
    Subject: "text",
    Body: body
  }).then(
    message =>{
      if(message=='OK'){
        swal("Successful", "Your Data Is Successfully Recieved", "success");
      }
      else{
        swal("Something Went Wrong", "Your Data Is Not Recieved", "error");
      }
    }
  );
}