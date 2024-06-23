const benefitsContainer = document.querySelector('.main__benefits-container');
const benefits = document.querySelectorAll('.main__benefit');


// vaores default 
let containerTop = benefitsContainer.getBoundingClientRect().top;
let defaultTop = benefits[0].getBoundingClientRect().top - containerTop;
defaultTop = String(defaultTop + "px");
const defaultHeight = String(benefits[0].offsetHeight + "px");

benefitsContainer.style.setProperty('--height-pseudo', defaultHeight);
benefitsContainer.style.setProperty('--top-pseudo', defaultTop);

benefitsContainer.addEventListener('click', (event) => {
  // Buscar el main__benefit clicked
  const clickedBenefit = event.target.closest('.main__benefit');

  // Si se hace clic en un main__benefit, llamar a moveLineToBenefit
  if (clickedBenefit) {
    const index = Array.from(benefits).indexOf(clickedBenefit);
    moveLineToBenefit(index);
  }
});

function moveLineToBenefit(index) {
  const benefit = benefits[index];
  
  containerTop = benefitsContainer.getBoundingClientRect().top;
  let benefitTop = benefit.getBoundingClientRect().top;
  benefitTop = String((benefitTop-containerTop) + "px");
  const benefitHeight = String(benefit.offsetHeight + "px");

  benefitsContainer.style.setProperty('--height-pseudo', benefitHeight);
  benefitsContainer.style.setProperty('--top-pseudo', benefitTop);
}