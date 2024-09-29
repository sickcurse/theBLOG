const handleSignupForm = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-input-signup').value.trim();
    const password = document.querySelector('#password-input-signup').value.trim();
  
    if (username && password.length >= 8) {
      try {
        const response = await fetch('/api/users', {
          method: 'POST',
          body: JSON.stringify({ username, password }),
          headers: { 'Content-Type': 'application/json' },
        });
  
        if (response.ok) {
          document.location.replace('/');
        } else {
          alert('Failed to sign up. Please try again.');
        }
      } catch (error) {
        console.error('Error during signup:', error);
      }
    } else {
      alert('Please enter a valid username and ensure your password is at least 8 characters long.');
    }
  };
  
  document.querySelector('#signup-form').addEventListener('submit', handleSignupForm);
  