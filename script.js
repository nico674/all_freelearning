function updateSlider(slider) {
    const span = slider.nextElementSibling;
    span.textContent = slider.value;
}

document.getElementById('fichaForm').addEventListener('input', () => {
    const form = document.forms['fichaForm'];
    let total = 0;
  
    // Atributos que multiplican x1
    const x1 = ['aroma', 'acidez', 'amargor', 'astringencia', 'posgusto'];
    x1.forEach(attr => {

   
      const qual = parseFloat(form[`${attr}_qual`].value) || 0;
      const scoreField = form[`${attr}_score`];
      if (scoreField){scoreField.value = qual * 1;
      total += qual;}else{ console.warn(`❌ Campo no encontrado: ${attr}_score`);}
    });
});