  const popup = document.getElementById('popup');
  const openBtn = document.querySelector('.main__button');
  const closeBtn = document.getElementById('popup-close');

  openBtn.addEventListener('click', () => {
    popup.classList.add('active');
    document.body.style.overflow = 'hidden'; 
  });

  closeBtn.addEventListener('click', () => {
    popup.classList.remove('active');
    document.body.style.overflow = '';
  });

  popup.addEventListener('click', (e) => {
    if (e.target === popup) {
      popup.classList.remove('active');
      document.body.style.overflow = '';
    }
  });