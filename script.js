// Music Player
const musicBtn = document.getElementById('music-btn');
const bgMusic = document.getElementById('bg-music');
let isPlaying = false;

musicBtn.addEventListener('click', () => {
    isPlaying = !isPlaying;
    musicBtn.style.background = isPlaying ? '#ff69b4' : '#fff';
    musicBtn.style.color = isPlaying ? '#fff' : '#ff69b4';
    isPlaying ? bgMusic.play() : bgMusic.pause();
});

// Slide Logic
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.dots-container');

// Create dots
slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if(index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function goToSlide(slideIndex) {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    currentSlide = (slideIndex + slides.length) % slides.length;
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

// Navigation
document.querySelector('.prev-btn').addEventListener('click', () => {
    goToSlide(currentSlide - 1);
    createHearts();
});

document.querySelector('.next-btn').addEventListener('click', () => {
    goToSlide(currentSlide + 1);
    createHearts();
});

// Heart Animation
function createHearts() {
    for(let i = 0; i < 5; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        document.querySelector('.hearts-container').appendChild(heart);
        
        setTimeout(() => heart.remove(), 3000);
    }
}

// CTA Button
document.querySelector('.cta-btn')?.addEventListener('click', () => {
    alert("Yay! 🎉 Let's create beautiful memories together!");
    for(let i = 0; i < 50; i++) {
        setTimeout(createHearts, i * 50);
    }
});

// Auto-create some hearts
setInterval(createHearts, 3000);
