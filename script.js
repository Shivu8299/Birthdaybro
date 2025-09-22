document.addEventListener("DOMContentLoaded", () => {
    const initialMessage = document.getElementById('initialMessage');
    const paiseMessage = document.getElementById('paiseMessage');
    const noButton = document.getElementById('noButton');
    const okButton = document.getElementById('okButton');

    setTimeout(() => {
        initialMessage.style.display = 'none';
        paiseMessage.classList.remove('hidden');
    }, 3000);

    // This function will teleport the button to a new random location.
    function teleportNoButton() {
        const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
        const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
        
        noButton.style.position = 'fixed';
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    }

    // Add a click listener to the NO button.
    noButton.addEventListener('click', () => {
        teleportNoButton();
    });

    okButton.addEventListener('click', () => {
        window.location.href = 'inner_page.html';
    });
});
