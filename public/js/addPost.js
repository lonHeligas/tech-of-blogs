const postFormHandler = async (event) => {
  event.preventDefault();

  const post_body = document.querySelector('#post-body').ariaValueMax.trim();
  console.log(post_body);
  const blog_id = event.target.getAttribute("data-attribute")
  console.log(blog_id) // ! not this.

  if ( post_body ) {
    // send a POST request to the API endpoint
    const resposne = await fetch('/api/blogs', {
      method: 'POST',
      body: JSON.stringify({ post_body, })
    })
  }

  




}


document  
  .querySelector('.add-post-form')
  .addEventListener('submit', postFormHandler)