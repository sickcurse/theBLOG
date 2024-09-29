const postId = document.querySelector('input[name="post-id"]').value;

const handleEditForm = async (event) => {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const body = document.querySelector('textarea[name="post-body"]').value;

  if (title.trim() && body.trim()) {
    try {
      const response = await fetch(`/api/posts/${postId}`, {
        method: 'PUT',
        body: JSON.stringify({ title, body }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to update the post.');
      }
    } catch (error) {
      console.error('Error updating post:', error);
    }
  } else {
    alert('Title and body cannot be empty.');
  }
};

const handleDeletePost = async () => {
  const confirmDelete = confirm('Are you sure you want to delete this post?');

  if (confirmDelete) {
    try {
      const response = await fetch(`/api/posts/${postId}`, { method: 'DELETE' });

      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete the post.');
      }
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  }
};

document
  .querySelector('#edit-post-form')
  .addEventListener('submit', handleEditForm);
document
  .querySelector('#delete-btn')
  .addEventListener('click', handleDeletePost);
