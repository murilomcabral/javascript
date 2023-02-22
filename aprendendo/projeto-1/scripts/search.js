const searchInput = document.querySelector('[search-input]')

function showSearchInput() {
   if (searchInput.style.display === 'none') {
      searchInput.style.display = 'inline-block'
      searchInput.focus()
   } else {
      searchInput.style.display = 'none'
      searchInput.value = ''
   }
}