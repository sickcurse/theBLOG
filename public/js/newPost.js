const handleNewPost = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value.trim();
    const body = document.querySelector('textarea[name="post-body"]').value.trim();
  
    if (title && body) {
      try {
        const response = await fetch(`/api/posts`, {
          method: 'POST',
          body: JSON.stringify({ title, body }),
          headers: { 'Content-Type': 'application/json' },
        });
  
        if (response.ok) {
          document.location.replace('/dashboard');  // Redirect to dashboard after successful post creation
        } else {
          alert('Failed to create post. Please try again.');
        }
      } catch (error) {
        console.error('Error creating new post:', error);
      }
    } else {
      alert('Title and body cannot be empty.');
    }
  };
  
  document
    .querySelector('#new-post-form')
    .addEventListener('submit', handleNewPost);
  