document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section');
  const navbar = document.getElementById('navbar');
  let lastScrollTop = 0;

  // Show/hide navbar on scroll
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      // Scroll down
      navbar.style.top = '-80px'; // Adjust based on your navbar height
    } else {
      // Scroll up
      navbar.style.top = '0';
    }
    lastScrollTop = scrollTop;
  });

  // Hide navbar when a link is clicked
  const navLinks = document.querySelectorAll('.navbar a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navbar.style.top = '-80px'; // Adjust based on your navbar height
    });
  });

  sections.forEach(section => {
    section.addEventListener('mouseover', () => {
      section.style.transform = 'translateY(-10px)';
    });
    section.addEventListener('mouseout', () => {
      section.style.transform = 'translateY(0)';
    });
  });

  const stickers = document.querySelectorAll('.sticker');
  stickers.forEach(sticker => {
    sticker.addEventListener('mouseover', () => {
      sticker.style.transform = 'scale(1.2)';
    });
    sticker.addEventListener('mouseout', () => {
      sticker.style.transform = 'scale(1)';
    });
  });
});

function toggleMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');

  // Save the mode to localStorage
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('mode', 'dark');
  } else {
    localStorage.setItem('mode', 'light');
  }
}

// Load the saved mode from localStorage
window.addEventListener('load', () => {
  const savedMode = localStorage.getItem('mode');
  if (savedMode) {
    document.body.classList.add(savedMode + '-mode');
  } else {
    document.body.classList.add('light-mode'); // Default to light mode
  }
});