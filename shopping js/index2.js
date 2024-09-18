const womenWear = document.getElementById("women-wear"),
      sareeCatogary = document.getElementById('saree-catogary');

if(womenWear){
  womenWear.addEventListener('click', () =>  {
    window.location.href = 'women wear catogary.html';
  });
}
if(sareeCatogary){
  sareeCatogary.addEventListener('click', () =>  {
    window.location.href = "saree's.html";
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const minPriceInput = document.getElementById('min-price');
  const maxPriceInput = document.getElementById('max-price');
  const filterButton = document.getElementById('sub-btn');

  if (filterButton) {
    filterButton.addEventListener('click', () => {
      // Get the min and max price values
      const minPrice = parseFloat(minPriceInput.value) || 0;
      const maxPrice = parseFloat(maxPriceInput.value) || Infinity;
      
      // Get all item elements
      const items = document.querySelectorAll('.item');
  
      items.forEach(item => {
        // Get the price from data-value attribute
        const price = parseFloat(item.getAttribute('data-value'));
  
        // Check if the price is within the range
        if (price >= minPrice && price <= maxPrice) {
          item.style.display = ''; // Show item
        } else {
          item.style.display = 'none'; // Hide item
        }
      });
    });
  }
}); 