document.addEventListener("DOMContentLoaded", () => {
    const initialMessage = document.getElementById('initialMessage');
    const paiseMessage = document.getElementById('paiseMessage');
    const noButton = document.getElementById('noButton');
    const okButton = document.getElementById('okButton');

    // Wait for the initial message animation to finish, then show the next message
    setTimeout(() => {
        initialMessage.style.display = 'none';
        paiseMessage.classList.remove('hidden');
    }, 3000); // 3 seconds total duration of initial message

    // Make the "NO" button teleport
    function teleportNoButton() {
        const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
        const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    }

    // Add an event listener to the entire window that listens for 'mousemove'.
    // This allows the button to teleport when the user tries to move their mouse toward it,
    // not just when the mouse hovers over the button itself.
    window.addEventListener('mousemove', (e) => {
        // Get the position of the noButton
        const rect = noButton.getBoundingClientRect();
        
        // Calculate the distance from the mouse to the center of the button
        const distance = Math.sqrt(
            Math.pow(e.clientX - (rect.left + rect.width / 2), 2) +
            Math.pow(e.clientY - (rect.top + rect.height / 2), 2)
        );

        // If the mouse gets within a certain range (e.g., 80px), teleport the button
        if (distance < 80) {
            teleportNoButton();
        }
    });

    // Redirect to the inner page when "OK" is clicked
    okButton.addEventListener('click', () => {
        window.location.href = 'inner_page.html';
    });
});
