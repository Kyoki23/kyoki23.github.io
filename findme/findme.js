const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

let gameStarted = false;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const mouse = {
    x: null,
    y: null,
    radius: 40
};

window.addEventListener('mousemove', (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
});

window.addEventListener('touchmove', (event) => {
    event.preventDefault();
    const touch = event.touches[0];
    mouse.x = touch.clientX;
    mouse.y = touch.clientY;
}, { passive: false });

const particles = [];
const particleCount = 15000;
let isRaining = false;
let fillDuration = 2000;
let startTime = 0;
let staticBackground = null;
let backgroundReady = false;

class RainParticle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.finalX = Math.random() * canvas.width;
        this.finalY = Math.random() * canvas.height;
        this.baseX = this.finalX;
        this.baseY = this.finalY;
        this.size = Math.random() * 3 + 1;
        this.hue = Math.random() * 60 + 270;
        this.alpha = 1;
    }

    update() {
        if (gameStarted && mouse.x != null && mouse.y != null) {
            const dx = mouse.x - this.baseX;
            const dy = mouse.y - this.baseY;
            const distSq = dx * dx + dy * dy;
            const radiusSq = mouse.radius * mouse.radius;

            if (distSq < radiusSq) {
                this.alpha = Math.max(0, distSq / radiusSq);
            } else if (this.alpha < 1) {
                this.alpha = Math.min(1, this.alpha + 0.05);
            }
        }
    }
    draw() {
        if (this.alpha > 0.01) {
            ctx.globalAlpha = this.alpha;
            ctx.beginPath();
            ctx.arc(this.baseX, this.baseY, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `hsl(${this.hue}, 100%, 70%)`;
            ctx.fill();
            ctx.globalAlpha = 1;
        }
    }
}

for (let i = 0; i < particleCount; i++) {
    particles.push(new RainParticle());
}

function createStaticBackground() {
    const offscreen = document.createElement('canvas');
    offscreen.width = canvas.width;
    offscreen.height = canvas.height;
    const offCtx = offscreen.getContext('2d');

    for (let i = 0; i < 100000; i++) {
        const x = Math.random() * offscreen.width;
        const y = Math.random() * offscreen.height;
        const size = Math.random() * 2 + 0.5;
        const hue = Math.random() * 60 + 270;

        offCtx.beginPath();
        offCtx.arc(x, y, size, 0, Math.PI * 2);
        offCtx.fillStyle = `hsl(${hue}, 100%, 70%)`;
        offCtx.fill();
    }

    staticBackground = offscreen;
    backgroundReady = true;
}

function checkRainComplete() {
    if (!gameStarted) return;

    const elapsed = Date.now() - startTime;
    if (isRaining && elapsed >= fillDuration) {
        isRaining = false;
        if (!backgroundReady) {
            createStaticBackground();
        }
        positionLetters();
        showLetters();
    }
}

function animate() {
    ctx.fillStyle = 'rgba(212, 166, 255, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if (staticBackground && !isRaining && gameStarted) {
        ctx.globalAlpha = 0.4;
        ctx.drawImage(staticBackground, 0, 0);
        ctx.globalAlpha = 1;

        if (mouse.x != null && mouse.y != null) {
            ctx.globalCompositeOperation = 'destination-out';
            const gradient = ctx.createRadialGradient(
                mouse.x, mouse.y, 0,
                mouse.x, mouse.y, mouse.radius
            );
            gradient.addColorStop(0, 'rgba(0,0,0,1)');
            gradient.addColorStop(0.7, 'rgba(0,0,0,0.8)');
            gradient.addColorStop(1, 'rgba(0,0,0,0)');

            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(mouse.x, mouse.y, mouse.radius, 0, Math.PI * 2);
            ctx.fill();
            ctx.globalCompositeOperation = 'source-over';
        }
    }

    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });

    if (gameStarted) {
        checkLetterVisibility();
    }

    requestAnimationFrame(animate);
}
animate();

function startGame() {
    const welcomeScreen = document.getElementById('welcomeScreen');
    welcomeScreen.classList.add('hidden');

    setTimeout(() => {
        gameStarted = true;
        canvas.classList.add('visible');
        createStaticBackground();
        positionLetters();
        showLetters();
    }, 800);
}

const validCodes = {
    LEYCOD: 'LEYCOD',
    LEYHKS: 'LEYHKS',
    LEYSNR: 'LEYSNR',
    ALERPM: 'ALERPM',
    ALETRI: 'ALETRI',
    BLEHFL: 'BLEHFL'
};

const foundLetters = [];
const userWord = ['', '', '', '', '', ''];
let selectedSlot = 0;

const letterContainer = document.getElementById('letterContainer');
const gamePanel = document.getElementById('gamePanel');
const collectedLettersDiv = document.getElementById('collectedLetters');
const wordSlots = document.querySelectorAll('.word-slot');
const checkButton = document.getElementById('checkButton');
const modalOverlay = document.getElementById('modalOverlay');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalMessage = document.getElementById('modalMessage');
const modalButton = document.getElementById('modalButton');
const progressBar = document.getElementById('progressBar');
const screenLetters = [
    'Y', 'I', 'D', 'L', 'M', 'E',
    'A', 'F', 'C', 'G', 'H', 'N',
    'K', 'L', 'O', 'P', 'R', 'S',
    'T', 'B'
];
const defaultProgressText = 'Encuentra las letras';
const hoverProgressText = '¿Lista para adivinar la palabra? Da clic aquí';
let isProgressHover = false;


function positionLetters() {
    letterContainer.innerHTML = '';

    const positions = [
        { top: '12%', left: '18%' },
        { top: '18%', left: '42%' },
        { top: '24%', left: '68%' },
        { top: '32%', left: '30%' },
        { top: '38%', left: '55%' },
        { top: '45%', left: '20%' },
        { top: '52%', left: '40%' },
        { top: '60%', left: '62%' },
        { top: '68%', left: '28%' },
        { top: '16%', left: '75%' },

        { top: '28%', left: '12%' },
        { top: '42%', left: '78%' },
        { top: '55%', left: '72%' },
        { top: '65%', left: '15%' },
        { top: '72%', left: '48%' },
        { top: '80%', left: '68%' },
        { top: '22%', left: '58%' },
        { top: '48%', left: '10%' },
        { top: '58%', left: '85%' },
        { top: '35%', left: '85%' }
    ];

    screenLetters.forEach((letter, index) => {
        const letterEl = document.createElement('div');
        letterEl.className = 'hidden-letter';
        letterEl.textContent = letter;
        letterEl.dataset.letter = letter;
        letterEl.dataset.collected = 'false';

        Object.assign(letterEl.style, positions[index]);

        letterEl.addEventListener('click', () => collectLetter(letterEl));

        letterContainer.appendChild(letterEl);
    });
}


function showLetters() {
    setTimeout(() => {
        const hiddenLetters = document.querySelectorAll('.hidden-letter');
        hiddenLetters.forEach(letter => {
            letter.classList.add('visible');
        });
    }, 2500);
}

function checkLetterVisibility() {
    if (!mouse.x || !mouse.y) return;

    const hiddenLetters = document.querySelectorAll('.hidden-letter.visible:not(.found)');
    hiddenLetters.forEach(letterEl => {
        const rect = letterEl.getBoundingClientRect();
        const letterCenterX = rect.left + rect.width / 2;
        const letterCenterY = rect.top + rect.height / 2;

        const dx = mouse.x - letterCenterX;
        const dy = mouse.y - letterCenterY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius * 0.7) {
            letterEl.classList.add('revealed');
        } else {
            letterEl.classList.remove('revealed');
        }
    });
}

function collectLetter(element) {
    if (element.dataset.collected === 'true') return;
    element.dataset.collected = 'true';

    const letter = element.dataset.letter;
    element.classList.add('found');
    foundLetters.push(letter);
    renderProgressText();

    setTimeout(() => {
        element.remove();
        updateCollectedLetters();
    }, 600);
}


function updateCollectedLetters() {
    collectedLettersDiv.innerHTML = '';
    foundLetters.forEach((letter, index) => {
        const letterEl = document.createElement('div');
        letterEl.className = 'collected-letter';
        letterEl.textContent = letter;
        letterEl.dataset.index = index;

        const isUsed = Array.from(wordSlots).some(slot =>
            slot.dataset.letterIndex === String(index)
        );
        if (isUsed) {
            letterEl.classList.add('used');
        }

        letterEl.addEventListener('click', () => placeLetter(letter, index, letterEl));
        collectedLettersDiv.appendChild(letterEl);
    });
}

function placeLetter(letter, letterIndex, element) {
    if (element.classList.contains('used')) return;

    const slot = wordSlots[selectedSlot];

    if (slot.textContent) {
        userWord[selectedSlot] = '';
    }

    slot.textContent = letter;
    slot.dataset.letterIndex = letterIndex;
    slot.classList.add('filled');
    userWord[selectedSlot] = letter;

    updateCollectedLetters();

    for (let i = 0; i < wordSlots.length; i++) {
        if (!wordSlots[i].textContent) {
            selectedSlot = i;
            updateActiveSlot();
            checkIfComplete();
            return;
        }
    }

    updateActiveSlot();
    checkIfComplete();
}

function checkIfComplete() {
    const allFilled = userWord.every(letter => letter !== '');
    checkButton.disabled = !allFilled;
}

function updateActiveSlot() {
    wordSlots.forEach((slot, index) => {
        slot.classList.remove('active');
        if (index === selectedSlot) {
            slot.classList.add('active');
        }
    });
}

wordSlots.forEach((slot, index) => {
    slot.addEventListener('click', () => {
        if (slot.textContent) {
            slot.textContent = '';
            slot.classList.remove('filled');
            slot.dataset.letterIndex = '';
            userWord[index] = '';

            updateCollectedLetters();
            checkIfComplete();
        }

        selectedSlot = index;
        updateActiveSlot();
    });
});

checkButton.addEventListener('click', () => {
    const word = userWord.join('');

    const nextCode = validCodes[word] || null;
    const isCorrect = !!nextCode;

    showModal(isCorrect, nextCode);
});

function showModal(isCorrect, nextCode) {
    modalOverlay.classList.add('show');

    if (isCorrect) {
        modal.className = 'modal success';
        modalTitle.textContent = 'Bien hecho';
        modalMessage.textContent =
            `Has ingresado un código válido, si aún puedes, mandame un mensaje con el mismo código: ${nextCode}`;
    } else {
        modal.className = 'modal error';
        modalTitle.textContent = 'Quizás te equivocaste en algo...';
        modalMessage.textContent =
            'Ese código no es válido. Revisa las letras e inténtalo de nuevo.';
    }
}

modalButton.addEventListener('click', () => {
    modalOverlay.classList.remove('show');

    if (modal.classList.contains('error')) {
        resetGame();
    }
});

function resetGame() {
    userWord.fill('');
    selectedSlot = 0;
    wordSlots.forEach(slot => {
        slot.textContent = '';
        slot.classList.remove('filled');
        slot.dataset.letterIndex = '';
    });
    updateActiveSlot();
    updateCollectedLetters();
    checkButton.disabled = true;
}

progressBar.addEventListener('click', () => {
    const isNowShown = gamePanel.classList.toggle('show');
    if (isNowShown) {
        updateCollectedLetters();
    }
});

document.addEventListener('click', (event) => {
    if (!gamePanel.classList.contains('show')) return;

    const clickedInsidePanel = gamePanel.contains(event.target);
    const clickedProgressBar = progressBar.contains(event.target);

    if (!clickedInsidePanel && !clickedProgressBar) {
        gamePanel.classList.remove('show');
        renderProgressText();
    }
});

gamePanel.addEventListener('click', (event) => {
    event.stopPropagation();
});

function renderProgressText() {
    const count = foundLetters.length;
    const total = screenLetters.length;

    if (isProgressHover) {
        progressBar.innerHTML = `${hoverProgressText}<br><small style="font-size:0.8em">Letras recogidas: <span id="progressCount">${count}</span>/${total}</small>`;
    } else {
        if (count > 0) {
            progressBar.innerHTML = `Letras recogidas: <span id="progressCount">${count}</span>/${total}`;
        } else {
            progressBar.textContent = defaultProgressText;
        }
    }
}

progressBar.addEventListener('mouseenter', () => {
    isProgressHover = true;
    renderProgressText();
});

progressBar.addEventListener('mouseleave', () => {
    isProgressHover = false;
    renderProgressText();
});

renderProgressText();