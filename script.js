// Preloader
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.preloader').style.opacity = '0';
        setTimeout(() => {
            document.querySelector('.preloader').style.display = 'none';
        }, 500);
    }, 2000);
});

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

// Card Animations
const cards = document.querySelectorAll('.card');

const cardObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.5 });

cards.forEach(card => cardObserver.observe(card));

// Interactive Elements
document.getElementById('message-btn').addEventListener('click', () => {
    const messages = [
        "You're awesome! 🌟",
        "Have a magical day! ✨",
        "You're doing great! 💪",
        "Stay pawsitive! 🐾",
        "You're purr-fect! 😻"
    ];
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById('secret-message').innerHTML = `
        <div class="message-bubble">${randomMsg}</div>
    `;
});

// Floating Hearts Effect
document.addEventListener('click', (e) => {
    const heart = document.createElement('div');
    heart.className = 'float-heart';
    heart.innerHTML = '❤️';
    heart.style.left = `${e.clientX}px`;
    heart.style.top = `${e.clientY}px`;
    document.body.appendChild(heart);
    
    setTimeout(() => heart.remove(), 2000);
});

// Add confetti effect
function createConfetti() {
    for(let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animation = `float ${Math.random() * 3 + 2}s linear`;
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 50%)`;
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 5000);
    }
}

// Initialize
document.querySelector('.cute-btn').addEventListener('click', createConfetti);