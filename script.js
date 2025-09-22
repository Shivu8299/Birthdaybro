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

    // Make the "NO" button teleport when the mouse hovers over it
    noButton.addEventListener('mouseover', () => {
        const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
        const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
        
        noButton.style.position = 'fixed'; 
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    });

    // Redirect to the inner page when "OK" is clicked
    okButton.addEventListener('click', () => {
        window.location.href = 'inner_page.html';
    });
});
