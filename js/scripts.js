// Toggle mobile navigation
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelector('.nav-links');
    const toggleButton = document.createElement('button');

    toggleButton.innerText = '☰';
    toggleButton.classList.add('nav-toggle');

    // Insert toggle button in the navigation
    const nav = document.querySelector('nav');
    nav.insertBefore(toggleButton, navLinks);

    // Toggle the navigation menu on button click
    toggleButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

// Smooth scrolling to sections (optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add simple animations for course cards
document.addEventListener('scroll', () => {
    const courseCards = document.querySelectorAll('.course');
    courseCards.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (cardPosition < windowHeight) {
            card.classList.add('visible');
        } else {
            card.classList.remove('visible');
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const textToType = "Know your coding journey just by clicking the button below!";
    const typingEffectElement = document.getElementById("typing-effect");
    let charIndex = 0;

    function typeEffect() {
        if (charIndex < textToType.length) {
            typingEffectElement.textContent += textToType[charIndex];
            charIndex++;
            setTimeout(typeEffect, 100); // Adjust typing speed here (100ms per character)
        } else {
            setTimeout(resetTypingEffect, 1000); // Wait 1 second before resetting
        }
    }

    function resetTypingEffect() {
        typingEffectElement.textContent = ""; // Clear the text
        charIndex = 0; // Reset the character index
        typeEffect(); // Start typing again
    }

    typeEffect();
});

 


// Get the elements
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Toggle the menu when the button is clicked
menuToggle.addEventListener('click', function(event) {
    event.stopPropagation();  // Prevent the click from bubbling up to document
    navLinks.classList.toggle('active');  // Toggle the active class to show/hide the menu
});

// Close the menu when clicking outside of it
document.addEventListener('click', function(event) {
    // Check if the clicked area is outside the menu and the toggle button
    if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
        navLinks.classList.remove('active');  // Close the menu
    }
});

// Prevent the menu from closing when clicking inside the menu itself
navLinks.addEventListener('click', function(event) {
    event.stopPropagation();  // Prevent the click event from bubbling up to the document
});
