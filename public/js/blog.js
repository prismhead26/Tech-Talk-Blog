const updateFormHandler = async (event) => {
    event.preventDefault();
  
    console.log(event.target.dataset.id)
    const title = document.querySelector('#update-title').value.trim();
    const body = document.querySelector('#update-body').value.trim();
  
    if (event.target.hasAttribute("data-id")) {
      const id = event.target.getAttribute("data-id");
      const response = await fetch(`/api/blogs/${id}`, {
        method: "PUT",
        body: JSON.stringify({ title, body }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to update blog');
      }
    }
  };

  document
  .querySelector('#updateForm')
  .addEventListener('submit', updateFormHandler);
