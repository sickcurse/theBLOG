const handleLoginForm = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-input-login').value.trim();
    const password = document.querySelector('#password-input-login').value.trim();
  
    if (username && password) {
      try {
        const response = await fetch('/api/users/login', {
          method: 'POST',
          body: JSON.stringify({ username, password }),
          headers: { 'Content-Type': 'application/json' },
        });
  
        if (response.ok) {
          document.location.replace('/');
        } else {
          alert('Failed to login. Please check your username and password.');
        }
      } catch (error) {
        console.error('Error logging in:', error);
      }
    } else {
      alert('Please enter both a username and password.');
    }
  };
  
  document
    .querySelector('#login-form')
    .addEventListener('submit', handleLoginForm);
  