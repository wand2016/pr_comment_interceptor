document.addEventListener('click', (e) => {
  if (
    (e.target.matches(
      '#partial-new-comment-form-actions button[type=submit]'
    ) ||
      e.target.matches('.inline-comment-form-container button[type=submit]') ||
      e.target.matches(
        '.inline-comment-form-container button[type=submit] *'
      )) &&
    !window.confirm('オタクくんさァ、それなんの意味があんの？笑')
  ) {
    e.preventDefault()
    e.stopPropagation()
  }
})
