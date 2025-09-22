document.addEventListener("DOMContentLoaded", () => {
    const initialMessage = document.getElementById('initialMessage');
    const paiseMessage = document.getElementById('paiseMessage');
    const noButton = document.getElementById('noButton');
    const okButton = document.getElementById('okButton');

    // Step 1: Fade out the initial message
    setTimeout(() => {
        initialMessage.classList.add('fade-out');
        setTimeout(() => {
            initialMessage.style.display = 'none';
            paiseMessage.classList.remove('hidden');
        }, 2000);
    }, 3000);

    // Step 2: Make the "NO" button teleport
    noButton.addEventListener('mouseover', () => {
        const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
        const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    });

    // Step 3: Redirect to the inner page on "OK"
    okButton.addEventListener('click', () => {
        window.location.href = 'inner_page.html';
    });
});
