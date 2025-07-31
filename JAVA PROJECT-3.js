// Show/Hide Ingredients and Instructions
document.querySelectorAll('.toggle-btn').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.previousElementSibling;
    const isVisible = content.style.display === 'block';
    content.style.display = isVisible ? 'none' : 'block';
    button.textContent = isVisible ? 'Show More' : 'Show Less';
  });
});

// Filter by Cuisine
document.getElementById('cuisineFilter').addEventListener('change', (e) => {
  const selectedCuisine = e.target.value;
  document.querySelectorAll('.recipe-card').forEach(card => {
    const cuisine = card.getAttribute('data-cuisine');
    if (selectedCuisine === 'all' || selectedCuisine === cuisine) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});
