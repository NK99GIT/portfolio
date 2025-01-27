
const playPauseButton = document.getElementById('playPauseButton');
const audioPlayer = document.getElementById('audioPlayer');

let isPlaying = false;

playPauseButton.addEventListener('click', () => {
  if (isPlaying) {
    audioPlayer.pause();
    playPauseButton.textContent = '▶'; // Show play icon
  } else {
    audioPlayer.play();
    playPauseButton.textContent = '⏸'; // Show pause icon
  }
  isPlaying = !isPlaying;
});


document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 1200, // Animation duration in milliseconds
    once: true,     // Whether animation should happen only once
    offset: 50,     // Offset for triggering animations
  });
});


// Navbar Scroll Behavior
const navbar = document.getElementById('navbar');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY === 0) {
    // alert(1);

    // When at the top of the page
    navbar.classList.add('nav-visible');
    navbar.classList.remove('nav-hidden');
    navbar.classList.add('nav-color-transparent');
    navbar.classList.remove('nav-color');
  } else if (currentScrollY < 600 && currentScrollY > lastScrollY) {
    // Scrolling down
    // alert(2);
    navbar.classList.add('nav-hidden');
    navbar.classList.remove('nav-visible');
  } else {
    // alert(3);
    // Scrolling up
    navbar.classList.add('nav-visible');
    navbar.classList.add('nav-color')
    navbar.classList.remove('nav-hidden');
  }

  lastScrollY = currentScrollY;
});

// Background Image Slider with Animation
const hero = document.getElementById('hero');
const images = [
  './JON00209.JPG',
  './JON00209.JPG',
]
let currentImageIndex = 0;
function changeBackgroundImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  hero.style.backgroundImage = `url('${images[currentImageIndex]}')`;
}

setInterval(changeBackgroundImage, 5000);

// Typing Effect for Hero Section
const typingEffect = new Typewriter('#typing-effect', {
  loop: true,
  delay: 75,
});

typingEffect.typeString('Full-Stack Web Developer')
  .pauseFor(2000)
  .deleteAll()
  .typeString('UI/UX Designer')
  .pauseFor(2000)
  .deleteAll()
  .start();

// Menu Toggle for Mobile
// Toggle mobile menu
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  // mobileMenu.classList.toggle('translate-y-4');
});


// Intersection Observer for progress bars
const progressBars = document.querySelectorAll('.progress-bar');

const animateProgressBars = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const progress = entry.target.getAttribute('data-progress');
      entry.target.style.width = progress;
      observer.unobserve(entry.target); // Stop observing once animated
    }
  });
};

const observer = new IntersectionObserver(animateProgressBars, {
  threshold: 0.1,
});

progressBars.forEach(bar => observer.observe(bar));

document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.swiper', {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
});


const cursor = document.getElementById("cursor");
let cursorTimeout;

// Variables to store cursor position
let mouseX = 0;
let mouseY = 0;

// Variables for smooth transition
let currentX = 0;
let currentY = 0;
let speed = 0.1; // Adjust the smoothness factor

// Update cursor position
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Smoothly move the cursor
function smoothMove() {
  currentX += (mouseX - currentX) * speed;
  currentY += (mouseY - currentY) * speed;

  cursor.style.left = `${currentX}px`;
  cursor.style.top = `${currentY}px`;

  // Call the smoothMove function again for the next frame
  requestAnimationFrame(smoothMove);
}

// Start the smooth move function
smoothMove();

// Add cursor hover effect
document.querySelectorAll('a, button, .swiper-button-next, .swiper-button-prev').forEach(item => {
  item.addEventListener('mouseenter', () => {
    cursor.classList.remove('cursor-small');
    cursor.classList.add('cursor-big');
  });

  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('cursor-big');
    cursor.classList.add('cursor-small');
  });
}); 
