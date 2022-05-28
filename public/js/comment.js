const commentFormHandler = async function (event) {
  event.preventDefault();

  const blog_id = document.querySelector('.createdBy');
  const comment_description = document
    .querySelector('#comment_description')
    .value.trim();
  const Project = document.querySelector('#commentList');

  if (comment_description) {
    await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        blog_id,
        comment_description,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  console.log(comment_description);

  Project.append(comment_description);
  comment_description.append(blog_id);
};

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', commentFormHandler);
