function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
const roles = ["Frontend Developer", "Python Programmer", "UI/UX Designer", "Problem Solver"];
let currentIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

const dynamicText = document.getElementById("dynamic-text");

function typeEffect() {
    const currentRole = roles[currentIndex];

    if (isDeleting) {
        currentCharIndex--; // Remove characters
        if (currentCharIndex === 0) {
            // Finish deletion and move to the next role
            isDeleting = false;
            currentIndex = (currentIndex + 1) % roles.length;
        }
    } else {
        currentCharIndex++; // Add characters
    }

    // Update text content
    dynamicText.textContent = currentRole.substring(0, currentCharIndex);

    // Add or remove cursor styles
    dynamicText.classList.toggle("typing", !isDeleting);
    dynamicText.classList.toggle("deleting", isDeleting);

    if (!isDeleting && currentCharIndex === currentRole.length) {
        // Pause before deleting
        isDeleting = true;
        setTimeout(typeEffect, 100);
    } else {
        // Continue typing or deleting
        const speed = isDeleting ? 50 : 150;
        setTimeout(typeEffect, speed);
    }
}

// Start the typing animation
typeEffect();
