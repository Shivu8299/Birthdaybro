document.addEventListener('DOMContentLoaded', () => {
    const touchDot = document.getElementById('touch-dot');
    const treeContainer = document.getElementById('tree-container');
    const magazine = document.getElementById('magazine');
    const confettiColors = ['#ff69b4', '#ff1493', '#ffa07a', '#ff4500', '#ee82ee', '#da70d6'];

    function createHeart(x, y, color) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.backgroundColor = color;
        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;
        treeContainer.appendChild(heart);
        return heart;
    }

    function drawHeartTree() {
        const treeWidth = treeContainer.offsetWidth;
        const treeHeight = treeContainer.offsetHeight;

        for (let i = 0; i < 360; i += 5) {
            const angle = i * Math.PI / 180;
            const r = 2.5 * (1 - Math.sin(angle));
            const x = r * Math.cos(angle) * 30 + treeWidth / 2;
            const y = r * Math.sin(angle) * 30 + treeHeight / 2 - 100;

            const color = confettiColors[Math.floor(Math.random() * confettiColors.length)];
            createHeart(x, y, color);
        }
    }

    function makeHeartsFall() {
        const hearts = document.querySelectorAll('.heart');
        hearts.forEach(heart => {
            const startX = heart.offsetLeft;
            const startY = heart.offsetTop;
            const endX = startX + (Math.random() - 0.5) * 500;
            const endY = window.innerHeight - heart.offsetHeight;

            heart.style.setProperty('--start-x', `${startX}px`);
            heart.style.setProperty('--start-y', `${startY}px`);
            heart.style.setProperty('--end-x', `${endX}px`);
            heart.style.setProperty('--end-y', `${endY}px`);
            heart.classList.add('falling');
        });
    }

    touchDot.addEventListener('click', () => {
        touchDot.style.display = 'none';
        treeContainer.style.display = 'block';

        setTimeout(() => {
            drawHeartTree();

            setTimeout(() => {
                makeHeartsFall();
                
                setTimeout(() => {
                    treeContainer.style.transform = 'translateX(-50%) translateX(25vw) scale(0.8)';
                    magazine.classList.add('show');
                }, 3000);
            }, 500);
        }, 500);
    });
});
