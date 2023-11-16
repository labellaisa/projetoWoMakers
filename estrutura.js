document.addEventListener('DOMContentLoaded', function () {
    const boxes = document.querySelectorAll('.box.anime');
  
    function handleScroll() {
      boxes.forEach(box => {
        const boxPosition = box.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
  
        if (boxPosition < windowHeight * 0.75) {
          box.style.opacity = 1;
          box.style.transform = 'translateX(0)';
        }
      });
    }
  
    window.addEventListener('scroll', handleScroll);
  
    handleScroll();
  });
