document.addEventListener("DOMContentLoaded", () => {
    const tapBoxCard = document.getElementById('tapBoxCard');
    const tapBox = document.getElementById('tapBox');
    const mainContent = document.getElementById('mainContent');
    const openedMessage = document.getElementById('openedMessage');
    const animationArea = document.getElementById('animationArea');

    tapBox.addEventListener('click', () => {
        tapBoxCard.style.display = 'none';
        mainContent.classList.remove('hidden'); 
        openedMessage.textContent = 'A Surprise for You';
        
        loadPhotoSlider();
        loadSongSlider();
        startAnimation();
    });

    const loadPhotoSlider = () => {
        const photoSlider = document.getElementById('photoSlider');
        // Corrected paths
        const photos = ['me1.png', 'me2.png', 'me3.png', 'me4.png', 'me5.png'];
        
        photos.forEach(photo => {
            const photoItem = document.createElement('div');
            photoItem.className = 'photo-item';
            const img = document.createElement('img');
            img.src = photo;
            photoItem.appendChild(img);
            photoSlider.appendChild(photoItem);
        });
    };

    const loadSongSlider = () => {
        const songSlider = document.getElementById('songSlider');
        // Corrected paths
        const songs = [
            { src: 'song15.mp3', cover: 'songcover15.jpg', title: 'Song 1' },
            { src: 'song16.mp3', cover: 'songcover16.jpg', title: 'Song 2' },
            { src: 'song17.mp3', cover: 'songcover17.jpg', title: 'Song 3' },
            { src: 'song18.mp3', cover: 'songcover18.jpg', title: 'Song 4' },
            { src: 'song19.mp3', cover: 'songcover19.jpg', title: 'Song 5' },
            { src: 'song20.mp3', cover: 'songcover20.jpg', title: 'Song 6' }
        ];

        songs.forEach(song => {
            const songItem = document.createElement('div');
            songItem.className = 'song-item';
            
            const img = document.createElement('img');
            img.src = song.cover;
            
            const audio = document.createElement('audio');
            audio.src = song.src;
            audio.controls = true;

            const title = document.createElement('p');
            title.textContent = song.title;
            
            songItem.appendChild(img);
            songItem.appendChild(title);
            songItem.appendChild(audio);
            songSlider.appendChild(songItem);
        });
    };

    const startGameButton = document.getElementById('startGameButton');
    const gamePlayArea = document.getElementById('gamePlayArea');
    const scoreElement = document.getElementById('score');
    const timerElement = document.getElementById('timer');

    let score = 0;
    let timer = 30;
    let gameInterval;
    let specialImageInterval;

    startGameButton.addEventListener('click', () => {
        startGameButton.classList.add('hidden');
        gamePlayArea.classList.remove('hidden');
        score = 0;
        timer = 30;
        scoreElement.textContent = score;
        timerElement.textContent = timer;
        
        gameInterval = setInterval(createGameImage, 1000);
        specialImageInterval = setInterval(createSpecialImage, 4000);
        
        const countdown = setInterval(() => {
            timer--;
            timerElement.textContent = timer;
            if (timer <= 0) {
                clearInterval(countdown);
                endGame();
            }
        }, 1000);
    });

    const createGameImage = () => {
        const img = document.createElement('img');
        img.src = 'game1.jpg'; // Corrected path
        img.className = 'game-image';
        img.style.left = `${Math.random() * (gamePlayArea.offsetWidth - 50)}px`;
        img.style.top = `${Math.random() * (gamePlayArea.offsetHeight - 50)}px`;
        gamePlayArea.appendChild(img);
        
        img.addEventListener('click', () => {
            score++;
            scoreElement.textContent = score;
            img.remove();
        });
        
        setTimeout(() => {
            img.remove();
        }, 2000);
    };

    const createSpecialImage = () => {
        const img = document.createElement('img');
        img.src = 'game2.jpg'; // Corrected path
        img.className = 'game-image special';
        img.style.left = `${Math.random() * (gamePlayArea.offsetWidth - 50)}px`;
        img.style.top = `${Math.random() * (gamePlayArea.offsetHeight - 50)}px`;
        gamePlayArea.appendChild(img);
        
        img.addEventListener('click', () => {
            score += 4;
            scoreElement.textContent = score;
            img.remove();
        });
        
        setTimeout(() => {
            img.remove();
        }, 2000);
    };

    const endGame = () => {
        clearInterval(gameInterval);
        clearInterval(specialImageInterval);
        gamePlayArea.innerHTML = `
            <h3>Game Over!</h3>
            <p>Your Final Score: ${score}</p>
            <p class="final-message">You are the best brother!</p>
        `;
    };
    
    const startAnimation = () => {
        // Corrected paths
        const imageFiles = ['animation1.jpg', 'animation2.jpg'];
        
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
});
                
