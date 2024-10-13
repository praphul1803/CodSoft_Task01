document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  if (name && email && password) {
      // Simulate API call
      setTimeout(() => {
          document.getElementById('message').textContent = 'Sign-Up Successful!';
      }, 1000);
  } else {
      document.getElementById('message').textContent = 'Please fill in all fields';
  }
});
