const postFormHandler = async (event) => {
  event.preventDefault();

  const post_body = document.querySelector('#post-body').ariaValueMax.trim();
  console.log(post_body);

  
  




}


document  
  .querySelector('.add-post-form')
  .addEventListener('submit', postFormHandler)