import anime from 'animejs/lib/anime.es.js';

// Add scroll animation for the brand info section
document.addEventListener("DOMContentLoaded", () => {
  const brandInfo = document.querySelector("#brandInfoContainer");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        brandInfo.classList.add("visible"); // Add the visible class when in view
        observer.unobserve(entry.target); // Stop observing once animated
      }
    });
  }, { threshold: 0.2 }); // Trigger when 20% of the element is visible

  observer.observe(brandInfo);

  // Select the headings
  const heading1 = document.querySelector("h1#color2"); // CyberPC
  const heading2 = document.querySelector("h2#color1"); // Best computer brand

  // Function to wrap each character in a span
  const wrapCharactersInSpans = (element) => {
    const text = element.textContent;
    element.innerHTML = text.split('').map(char => `<span>${char}</span>`).join('');
  };

  // Apply the wrapping to both headings
  wrapCharactersInSpans(heading1);
  wrapCharactersInSpans(heading2);

  // Animate the spans in both headings
  anime({
    targets: 'h1#color2 span, h2#color1 span', // Target all spans in both headings
    y: [
      { value: '-2.75rem', easing: 'easeOutExpo', duration: 600 },
      { value: 0, easing: 'easeOutBounce', duration: 800, delay: 100 }
    ],
    rotate: {
      value: '-1turn',
      delay: 0
    },
    delay: (el, i) => i * 50, // Staggered delay for each character
    easing: 'easeInOutCirc',
    loopDelay: 1000,
    loop: true
  });
});

window.addEventListener("load", () => {
  const images = document.querySelectorAll(".imageAnimation");
  images.forEach((image, index) => {
    // Add a delay for each image
    image.style.animationDelay = `${index * 0.3}s`;
  });

  // Add images to centeredImagesContainer
  const container = document.querySelector("#centeredImagesContainer");
  const imageNames = ["image1.jpg", "image2.jpg", "image3.jpg"]; // Replace with your actual image filenames

  imageNames.forEach((imageName, index) => {
    const img = document.createElement("img");
    img.src = imageName; // Assumes images are in the same folder as the HTML file
    img.alt = `Image ${index + 1}`;
    img.classList.add("middleImage"); // Add a specific class for styling
    img.style.animationDelay = `${index * 0.3}s`; // Staggered animation
    container.appendChild(img); // Append directly to the container
  });
});