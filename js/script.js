document.addEventListener("DOMContentLoaded", function() {
    const words = ["Linux", "DevOps", "BASH", "PHP", "Python", "Cloud", "Tech"];
    const typedTextElement = document.getElementById("typed-text");
    const typingSpeed = 100;
    const erasingSpeed = 100;
    const delayBetweenWords = 2000; // Delay between current and next word

    let wordIndex = 0;
    let charIndex = 0;
    let isErasing = false;

    function type() {
      if (charIndex < words[wordIndex].length) {
        if (!isErasing) {
          typedTextElement.textContent += words[wordIndex].charAt(charIndex);
          charIndex++;
          setTimeout(type, typingSpeed);
        }
      } else {
        isErasing = true;
        setTimeout(erase, delayBetweenWords);
      }
    }

    function erase() {
      if (charIndex > 0) {
        typedTextElement.textContent = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingSpeed);
      } else {
        isErasing = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, typingSpeed);
      }
    }

    type();
  });

//   filter

document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const quizCards = document.querySelectorAll('.quiz-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const filter = this.getAttribute('data-filter');
            quizCards.forEach(card => {
                if (filter === 'all' || card.classList.contains(filter)) {
                    card.classList.add('show');
                } else {
                    card.classList.remove('show');
                }
            });
        });
    });

    // Trigger the "All" button click on page load
    document.querySelector('.filter-btn[data-filter="all"]').click();
});