// ========================================
// DROPDOWN MENU
// ========================================

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Fecha dropdown ao clicar fora
window.onclick = function(event) {
  if (!event.target.closest('.dropbtn')) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    
    for (let i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// ========================================
// CAROUSEL DE PRODUTOS
// ========================================

let produtosSlide = 0;
const produtosSlides = document.querySelectorAll('.carousel-item');
const totalProdutosSlides = produtosSlides.length;

function showSlide(index) {
  produtosSlides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function moveSlide(direction) {
  if (totalProdutosSlides === 0) return;
  
  produtosSlide = (produtosSlide + direction + totalProdutosSlides) % totalProdutosSlides;
  showSlide(produtosSlide);
}

// ========================================
// CAROUSEL DE VALORES
// ========================================

let valoresSlide = 0;
const valoresSlides = document.querySelectorAll('.valores-slide');
const totalValoresSlides = valoresSlides.length;

function moveValoresSlide(direction) {
  if (totalValoresSlides === 0) return;
  
  valoresSlides[valoresSlide].classList.remove('active');
  
  valoresSlide += direction;
  
  if (valoresSlide >= totalValoresSlides) {
    valoresSlide = 0;
  } else if (valoresSlide < 0) {
    valoresSlide = totalValoresSlides - 1;
  }
  
  valoresSlides[valoresSlide].classList.add('active');
}

// Auto-play do carousel de valores (5 segundos)
if (totalValoresSlides > 0) {
  setInterval(() => {
    moveValoresSlide(1);
  }, 5000);
}