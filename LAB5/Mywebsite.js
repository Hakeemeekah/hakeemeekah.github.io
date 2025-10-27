document.getElementById("regForm").addEventListener("submit", function (e) 
{
  e.preventDefault();

  
  let user = 
  {
    firstName: document.getElementById("firstName").value.trim(),
    lastName: document.getElementById("lastName").value.trim(),
    email: document.getElementById("email").value.trim(),
    password: document.getElementById("password").value,
    dob: document.getElementById("dob").value
  };


  if (!user.firstName || !user.lastName || !user.email || !user.password || !user.dob) 
    {
    showResult("Registration Failed: All fields are required.", false);
    return;
  }

  if (!user.password.includes("!") && !user.password.includes("?")) 
    {
    showResult("Registration Failed: Password must contain '!' or '?'.", false);
    return;
  }


  let maskedPass = "*".repeat(user.password.length);
  user.password = maskedPass;


  showResult(`
    <h4 class="text-success">Registration Successful!</h4>
    <p><strong>First Name:</strong> ${user.firstName}</p>
    <p><strong>Last Name:</strong> ${user.lastName}</p>
    <p><strong>Email:</strong> ${user.email}</p>
    <p><strong>Password:</strong> ${user.password}</p>
    <p><strong>Date of Birth:</strong> ${user.dob}</p>
  `, true);
});

function showResult(message, success) 
{
  const output = document.getElementById("output");
  output.className = success ? "p-3 border rounded bg-light" : "p-3 border rounded bg-danger text-white";
  output.innerHTML = message;
}
