const commentFormHandler = async (event) => {
  event.preventDefault();
  console.log('hello there from the comment file');

  // Collect values from the login form
  const comment_body = document.querySelector('#comment-body').value.trim();
  console.log(` this is the comment_body ${comment_body}`)
  const blog_id = event.target.getAttribute("data-attribute")
  console.log(blog_id)
  

  if (comment_body && blog_id) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ comment_body, blog_id }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.reload()
    } else {
      alert(response.statusText);
    }
  }
};



document
  .querySelector('.add-comment-form')
  .addEventListener('submit-comment', commentFormHandler);


