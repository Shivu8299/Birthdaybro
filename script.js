document.addEventListener("DOMContentLoaded", () => {
    const initialMessage = document.getElementById('initialMessage');
    const paiseMessage = document.getElementById('paiseMessage');
    const noButton = document.getElementById('noButton');
    const okButton = document.getElementById('okButton');

    setTimeout(() => {
        initialMessage.style.display = 'none';
        paiseMessage.classList.remove('hidden');
        teleportNoButton(); // Set initial position
    }, 3000);

    function teleportNoButton() {
        const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
        const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
        
        noButton.style.position = 'fixed';
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    }

    window.addEventListener('mousemove', (e) => {
        const rect = noButton.getBoundingClientRect();
        const distance = Math.sqrt(
            Math.pow(e.clientX - (rect.left + rect.width / 2), 2) +
            Math.pow(e.clientY - (rect.top + rect.height / 2), 2)
        );

        if (distance < 100) {
            teleportNoButton();
        }
    });

    okButton.addEventListener('click', () => {
        window.location.href = 'inner_page.html';
    });
});
                          
