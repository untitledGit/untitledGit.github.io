document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById("searchButton");
    const searchInput = document.getElementById("searchInput");
  
    // Predefined search terms
    const searchTerms = ["contact", "order", "social media", "products and services"];
  
    // Add event listener for the search button
    searchButton.addEventListener("click", () => {
      const query = searchInput.value.toLowerCase().trim();
      if (searchTerms.includes(query)) {
        alert(`Result found: ${query}`);
      } else {
        alert("No results found.");
      }
    });
  });