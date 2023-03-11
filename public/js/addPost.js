const postFormHandler = async (event) => {
  event.preventDefault();
  console.log('hello there from the post file');
  
  const postTitle = document.querySelector('#post-title').value.trim();

  const postBody = document.querySelector('#post-body').value.trim();


  console.log(post_body);


    // send a POST request to the API endpoint
    const response = await fetch('/api/blogs', {
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