document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector('.steps-wrapper');
  const steps = document.querySelectorAll('.step');
  const prevBtn = document.querySelector('.slider-btn.prev');
  const nextBtn = document.querySelector('.slider-btn.next');
  let currentIndex = 0;

  function updateSlide() {
    wrapper.scrollTo({
      left: currentIndex * wrapper.offsetWidth,
      behavior: 'smooth'
    });
  }

  function checkButtons() {
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === steps.length - 1;
  }

  nextBtn.addEventListener('click', () => {
    if (currentIndex < steps.length - 1) {
      currentIndex++;
      updateSlide();
      checkButtons();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlide();
      checkButtons();
    }
  });

  window.addEventListener('resize', updateSlide);

  checkButtons();
});