document.addEventListener('DOMContentLoaded', () => {
    const heartTreeContainer = document.querySelector('.heart-tree-container');
    const confettiColors = ['#ff69b4', '#ff1493', '#ffa07a', '#ff4500', '#ee82ee', '#da70d6']; // Pink, DeepPink, LightSalmon, OrangeRed, Violet, Orchid

    function createConfettiHeart(x, y, color) {
        const heart = document.createElement('div');
        heart.classList.add('confetti-heart');
        heart.style.backgroundColor = color;
        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;

        // Randomize end position and rotation for floating effect
        const xEnd = Math.random() * 200 - 100; // -100 to 100
        const yEnd = Math.random() * -150 - 50; // -50 to -200 (floats upwards)
        const rotationEnd = Math.random() * 360; // 0 to 360 degrees

        heart.style.setProperty('--x-end', `${xEnd}px`);
        heart.style.setProperty('--y-end', `${yEnd}px`);
        heart.style.setProperty('--rotation-end', `${rotationEnd}deg`);

        heartTreeContainer.appendChild(heart);

        // Remove heart after animation to prevent memory leak
        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }

    // Function to draw the heart shape with confetti
    function drawHeartConfetti() {
        // Approximate heart shape coordinates (relative to container center)
        const center_x = heartTreeContainer.offsetWidth / 2;
        const center_y = heartTreeContainer.offsetHeight / 2;
        const scale = 0.8; // Scale of the heart

        for (let i = 0; i < 360; i += 5) { // Iterate through angles
            const angleRad = i * Math.PI / 180;

            // Heart equation (simplified for distribution)
            const r = scale * (1 - Math.sin(angleRad)); // This creates a cardioid shape
            const x = r * Math.cos(angleRad) * 100 + center_x;
            const y = r * Math.sin(angleRad) * 100 + center_y;

            // Add some randomness for a more natural look
            const randomX = x + (Math.random() - 0.5) * 40;
            const randomY = y + (Math.random() - 0.5) * 40;

            // Get a random color
            const color = confettiColors[Math.floor(Math.random() * confettiColors.length)];

            createConfettiHeart(randomX - 5, randomY - 5, color); // Adjust by half confetti size
        }
    }

    // Call this once to fill the tree
    drawHeartConfetti();

    // Optionally, make it rain more confetti over time
    // setInterval(drawHeartConfetti, 5000); // Rains new confetti every 5 seconds

    // For a continuous "flowing" heart tree, you'd generate particles
    // that constantly move and are replaced, similar to the video.
    // This example fills the tree and optionally adds new ones.
});
