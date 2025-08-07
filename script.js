document.addEventListener('DOMContentLoaded', function() {
  
    const hamburger = document.createElement('div');
    hamburger.className = 'hamburger';
    
    for (let i = 0; i < 3; i++) {
      const line = document.createElement('div');
      line.className = 'hamburger-line';
      hamburger.appendChild(line);
    }
    
  
    const header = document.querySelector('.header');
    header.appendChild(hamburger);
    
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar a');
    const hamburgerLines = document.querySelectorAll('.hamburger-line');
    
    // Toggle mobile menu in view
    hamburger.addEventListener('click', function() {
      navbar.classList.toggle('active');
      

      hamburgerLines[0].classList.toggle('rotate-down');
      hamburgerLines[1].classList.toggle('hide');
      hamburgerLines[2].classList.toggle('rotate-up');
      
      document.body.classList.toggle('no-scroll');
    });
    
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navbar.classList.remove('active');
        hamburgerLines[0].classList.remove('rotate-down');
        hamburgerLines[1].classList.remove('hide');
        hamburgerLines[2].classList.remove('rotate-up');
        document.body.classList.remove('no-scroll');
      });
    });
      document.addEventListener('click', function(event) {
      if (!navbar.contains(event.target) && !hamburger.contains(event.target)) {
        navbar.classList.remove('active');
        hamburgerLines[0].classList.remove('rotate-down');
        hamburgerLines[1].classList.remove('hide');
        hamburgerLines[2].classList.remove('rotate-up');
        document.body.classList.remove('no-scroll');
      }
    });

  // Music player and glitter effect
  const music = document.getElementById('bg-music');
  const toggleBtn = document.getElementById('music-toggle');
  const glitterContainer = document.getElementById('glitter');
  let isPlaying = false;

  function createGlitter() {
    glitterContainer.innerHTML = '';
    for (let i = 0; i < 100; i++) {
      const dot = document.createElement('div');
      dot.classList.add('glitter-dot');
      dot.style.top = `${Math.random() * 100}%`;
      dot.style.left = `${Math.random() * 100}%`;
      dot.style.animationDelay = `${Math.random() * 2}s`;
      glitterContainer.appendChild(dot);
    }
  }

  toggleBtn.addEventListener('click', () => {
    if (!isPlaying) {
      music.play();
      toggleBtn.textContent = '⏸️';
      glitterContainer.style.display = 'block';
      createGlitter();
    } else {
      music.pause();
      toggleBtn.textContent = '▶️';
      glitterContainer.style.display = 'none';
      glitterContainer.innerHTML = '';
    }
    isPlaying = !isPlaying;
  });
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});
