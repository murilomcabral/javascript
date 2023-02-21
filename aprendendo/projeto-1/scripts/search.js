const searchInput = document.querySelector('.search-input')

function showSearchInput() {
   if (searchInput.style.display === 'none') {
      searchInput.style.display = 'inline-block'
   } else {
      searchInput.style.display = 'none'
   }
}