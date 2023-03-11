const postFormHandler = async (event) => {
  event.preventDefault();
  console.log('hello there from the post file');
  
  const postTitle = event.target.querySelector('#post-title').value.trim();

  const postBody = event.target.querySelector('#post-body').value.trim();

  // console.log('this is the post title', postTitle);
  // console.log('this is the post body', postBody);
  // ! this is not working  
  


  


    // send a POST request to the API endpoint
    const response = await fetch('/api/blogs/post', {
      method: 'POST',      
      body: JSON.stringify({ 
      postTitle: post,
      postBody: body,
      datecreated: new Date()
    }),
      headers: { 'Content-Type': 'application/json' },
    });     
     
    

    if (response.ok) {
      document.location.reload()
    } else {
      alert(response.statusText);
    }
  }

document  
  .querySelector('.add-post-form')
  .addEventListener('submit', postFormHandler)