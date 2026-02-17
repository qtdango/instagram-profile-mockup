document.addEventListener('DOMContentLoaded', function() {
  // Screen transitions
  document.querySelectorAll('[data-screen]').forEach(el => {
    el.addEventListener('click', function() {
      const targetScreen = this.getAttribute('data-screen');
      showScreen(targetScreen);
    });
  });

  // Back buttons
  document.querySelectorAll('[data-back]').forEach(btn => {
    btn.addEventListener('click', function() {
      const backScreen = this.getAttribute('data-back');
      showScreen(backScreen);
    });
  });

  // Story navigation
  document.querySelectorAll('.story-nav-left').forEach(navLeft => {
    navLeft.addEventListener('click', function() {
      const storyScreen = this.closest('.screen');
      navigateStory(storyScreen, -1);
    });
  });

  document.querySelectorAll('.story-nav-right').forEach(navRight => {
    navRight.addEventListener('click', function() {
      const storyScreen = this.closest('.screen');
      navigateStory(storyScreen, 1);
    });
  });
});

function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });

  const targetScreen = document.getElementById(screenId);
  if (targetScreen) {
    targetScreen.classList.add('active');
    targetScreen.scrollTop = 0;
  }
}

function navigateStory(storyScreen, direction) {
  const slides = storyScreen.querySelectorAll('.story-slide');
  const bars = storyScreen.querySelectorAll('.story-bar');
  let currentIndex = Array.from(slides).findIndex(slide => slide.classList.contains('active'));

  let newIndex = currentIndex + direction;
  if (newIndex < 0) newIndex = 0;
  if (newIndex >= slides.length) newIndex = slides.length - 1;

  slides.forEach(slide => slide.classList.remove('active'));
  slides[newIndex].classList.add('active');

  bars.forEach((bar, index) => {
    if (index <= newIndex) {
      bar.classList.add('active');
    } else {
      bar.classList.remove('active');
    }
  });
}
