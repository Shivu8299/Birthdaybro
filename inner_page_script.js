document.addEventListener("DOMContentLoaded", () => {
    // Tap to Open Box Logic
    const tapBox = document.getElementById('tapBox');
    const mainContent = document.getElementById('mainContent');
    const openedMessage = document.getElementById('openedMessage');
    const openBoxContainer = document.getElementById('openBoxContainer');
    const animationArea = document.getElementById('animationArea');

    tapBox.addEventListener('click', () => {
        openBoxContainer.style.display = 'none';
        mainContent.classList.remove('hidden');
        
        openedMessage.textContent = 'You are the best brother!';
        setTimeout(() => {
            openedMessage.classList.add('show');
        }, 500);

        startAnimation();
        loadSliders();
    });

    // Animation Logic
    const startAnimation = () => {
        const imageFiles = ['file/animation1.jpg', 'file/animation2.jpg'];
        
        setInterval(() => {
            const img = document.createElement('img');
            const randomImage = imageFiles[Math.floor(Math.random() * imageFiles.length)];
            img.src = randomImage;
            img.className = 'animation-item';
            
            img.style.left = `${Math.random() * 100}vw`;
            img.style.animationDuration = `${Math.random() * 3 + 2}s`;
            
            animationArea.appendChild(img);
            
            setTimeout(() => {
                img.remove();
            }, 5000);
        }, 300);
    };

    // Sliders Logic
    const loadSliders = () => {
        // Photo Slider
        const photoSlider = document.getElementById('photoSlider');
        const photos = ['file/me1.png', 'file/me2.png', 'file/me3.png', 'file/me4.png', 'file/me5.png'];
        
        photos.forEach(photo => {
            const img = document.createElement('img');
            img.src = photo;
            photoSlider.appendChild(img);
        });

        // Song Slider
        const songSlider = document.getElementById('songSlider');
        const songs = ['file/song15.mp3', 'file/song16.mp3', 'file/song17.mp3', 'file/song18.mp3', 'file/song19.mp3', 'file/song20.mp3'];
        const albumCovers = ['file/songcover15.jpg', 'file/songcover16.jpg', 'file/songcover17.jpg', 'file/songcover18.jpg', 'file/songcover19.jpg', 'file/songcover20.jpg'];

        songs.forEach((song, index) => {
            const songContainer = document.createElement('div');
            songContainer.className = 'song-item';
            
            const img = document.createElement('img');
            img.src = albumCovers[index];
            
            const audio = document.createElement('audio');
            audio.src = song;
            audio.controls = true;
            
            songContainer.appendChild(img);
            songContainer.appendChild(audio);
            songSlider.appendChild(songContainer);
        });
    };

    // The Game Logic
    const startGameButton = document.getElementById('startGameButton');
    const gamePlayArea = document.getElementById('gamePlayArea');
    const scoreElement = document.getElementById('score');
    const timerElement = document.getElementById('timer');

    let score = 0;
    let timer = 30;
    let gameInterval;
    let specialImageInterval;

    startGameButton.addEventListener('click', () => {
        startGameButton.style.display = 'none';
        gamePlayArea.classList.remove('hidden');
        gamePlayArea.innerHTML = `
            <div class="game-info">
                <p>Score: <span id="score">0</span></p>
                <p>Time: <span id="timer">30</span></p>
            </div>
        `;
        const newScoreElement = document.getElementById('score');
        const newTimerElement = document.getElementById('timer');
        score = 0;
        timer = 30;

        gameInterval = setInterval(createGameImage, 1000);
        specialImageInterval = setInterval(createSpecialImage, 4000);
        
        const countdown = setInterval(() => {
            timer--;
            newTimerElement.textContent = timer;
            if (timer <= 0) {
                clearInterval(countdown);
                endGame();
            }
        }, 1000);
    });

    const createGameImage = () => {
        const img = document.createElement('img');
        img.src = 'file/game1.jpg';
        img.className = 'game-image';
        img.style.left = `${Math.random() * (gamePlayArea.offsetWidth - 50)}px`;
        img.style.top = `${Math.random() * (gamePlayArea.offsetHeight - 50)}px`;
        gamePlayArea.appendChild(img);
        
        img.addEventListener('click', () => {
            score++;
            document.getElementById('score').textContent = score;
            img.remove();
        });
        
        setTimeout(() => {
            img.remove();
        }, 2000);
    };

    const createSpecialImage = () => {
        const img = document.createElement('img');
        img.src = 'file/game2.jpg';
        img.className = 'game-image special';
        img.style.left = `${Math.random() * (gamePlayArea.offsetWidth - 50)}px`;
        img.style.top = `${Math.random() * (gamePlayArea.offsetHeight - 50)}px`;
        gamePlayArea.appendChild(img);
        
        img.addEventListener('click', () => {
            score += 4;
            document.getElementById('score').textContent = score;
            img.remove();
        });
        
        setTimeout(() => {
            img.remove();
        }, 2000);
    };

    const endGame = () => {
        clearInterval(gameInterval);
        clearInterval(specialImageInterval);
        let message = 'You are the best brother!';
        gamePlayArea.innerHTML = `
            <h2>Game Over!</h2>
            <p>Your Final Score: ${score}</p>
            <h3>${message}</h3>
        `;
    };
});
