// Toggle dropdown menu visibility
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if user clicks outside of it
window.onclick = function(event) {
  if (!event.target.closest('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}