
export function initializeAnimations() {
  // Animation on scroll functionality
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.pg-card, .case-preview');
    
    elements.forEach((element, index) => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight * 0.85;
      
      if (elementPosition < screenPosition) {
        setTimeout(() => {
          element.classList.add('animate-fade-in-up');
        }, index * 100); // Staggered animation
      }
    });
  };
  
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Initial check on load
  
  return () => window.removeEventListener('scroll', animateOnScroll);
}
