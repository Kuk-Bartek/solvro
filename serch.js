function showSerch(){
    const searchInput = document.querySelector('#searchInput')
    const h2Elements = document.querySelectorAll('.card h2')

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase()

  h2Elements.forEach(h2 => {
    const beerName = h2.textContent.toLowerCase()

    if (beerName.includes(searchTerm)) {
      h2.closest('.card').style.display = 'block'
    } else {
      h2.closest('.card').style.display = 'none'
    }
  })
})
    document.getElementById("serchBox").style.opacity = 1
    document.getElementById("serchBox").style.zIndex = 25
}
function closeSerch(){
    document.getElementById("serchBox").style.opacity = 0
    document.getElementById("serchBox").style.zIndex = -25
}
