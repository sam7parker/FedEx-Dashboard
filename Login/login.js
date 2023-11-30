function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var userType = document.getElementById("userType").value;

  // Check if entered credentials are correct
  if (email === "abc@gmail.com" && password === "12345") {
    // Redirect user based on userType
    //hello
    switch (userType) {
      case "courier":
        window.location.href = "CourierFiles/courier_dashboard.html";
        break;
      case "manager":
        window.location.href = "manager_dashboard.html";
        break;
      case "executive":
        window.location.href = "executive_dashboard.html";
        break;
      default:
        alert("Invalid user type");
    }
  } else {
    alert("Invalid credentials. Please try again.");
  }
}
