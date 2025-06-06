function scrollExploreMore(direction, containerId) {
  const container = document.getElementById(containerId);
  const scrollAmount = 320;
  container.scrollBy({
    left: direction === 'left' ? -scrollAmount : scrollAmount,
    behavior: 'smooth'
  });
}

const faqButtons = document.querySelectorAll('.faq-question');

faqButtons.forEach(button => {
  button.addEventListener('click', () => {
    const currentAnswer = button.nextElementSibling;
    const currentPlus = button.querySelector('.plus-sign');
    const isVisible = currentAnswer.classList.contains('show');

    faqButtons.forEach(btn => {
      const answer = btn.nextElementSibling;
      const plusSign = btn.querySelector('.plus-sign');
      answer.classList.remove('show');
      plusSign.textContent = '+';
    });

    if (!isVisible) {
      currentAnswer.classList.add('show');
      currentPlus.textContent = '−';
    }
  });
});

const backToTopButton = document.getElementById("backToTop");

window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

const sliderTrack = document.getElementById('slider-track');
const btnLeft = document.getElementById('btn-left');
const btnRight = document.getElementById('btn-right');

let currentPosition = 0;

// Calculate the width of one card including margin
const card = sliderTrack.querySelector('.testimonial-card');
const cardStyle = window.getComputedStyle(card);
const cardWidth = card.offsetWidth + parseInt(cardStyle.marginLeft) + parseInt(cardStyle.marginRight);

const maxScroll = sliderTrack.scrollWidth - sliderTrack.clientWidth;

btnRight.addEventListener('click', () => {
  currentPosition += cardWidth;
  if (currentPosition > maxScroll) {
    currentPosition = maxScroll; // don't scroll beyond last card
  }
  sliderTrack.style.transform = `translateX(-${currentPosition}px)`;
});

btnLeft.addEventListener('click', () => {
  currentPosition -= cardWidth;
  if (currentPosition < 0) {
    currentPosition = 0; // don't scroll before first card
  }
  sliderTrack.style.transform = `translateX(-${currentPosition}px)`;
});
