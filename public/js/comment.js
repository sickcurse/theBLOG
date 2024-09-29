const handleCommentSubmission = async (event) => {
    event.preventDefault();
  
    const postId = document.querySelector('input[name="post-id"]').value;
    const commentBody = document.querySelector('textarea[name="comment-body"]').value;
  
    if (commentBody.trim()) {
      try {
        const response = await fetch('/api/comments', {
          method: 'POST',
          body: JSON.stringify({ postId, body: commentBody }),
          headers: { 'Content-Type': 'application/json' },
        });
  
        if (response.ok) {
          document.location.reload();  // Refresh the page to display the new comment
        } else {
          document.location.replace('/login');  // Redirect to login if not authenticated
        }
      } catch (error) {
        console.error('Failed to submit comment:', error);  // Log any errors in submission
      }
    } else {
      alert('Comment cannot be empty.');  // Add a simple validation for empty comments
    }
  };
  
  document
    .querySelector('#new-comment-form')
    .addEventListener('submit', handleCommentSubmission);
  