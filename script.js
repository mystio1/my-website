// Get Started Button Event Listener
const getStartedBtn = document.getElementById('getStartedBtn');
const registrationSection = document.getElementById('registration');
const homeSection = document.getElementById('home');

getStartedBtn.addEventListener('click', () => {
    homeSection.style.display = 'none';
    registrationSection.style.display = 'block';
});

// Back Button Event Listener
const backBtn = document.getElementById('backBtn');

backBtn.addEventListener('click', () => {
    registrationSection.style.display = 'none';
    homeSection.style.display = 'block';
});

// Modal Event Listeners (existing code unchanged)
const learnMoreButtons = document.querySelectorAll('.learn-more');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close-btn');

learnMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        document.getElementById(modalId).style.display = 'flex';
    });
});

closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.parentElement.parentElement.style.display = 'none';
    });
});

window.addEventListener('click', event => {
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
