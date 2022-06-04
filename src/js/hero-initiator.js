const HeroInitiatior = {
  init: () => {
    if (window.location.pathname === '/') {
      HeroInitiatior.initHero();
    }
  },

  initHero: () => {
    const heroSliderContainer = document.querySelector('.hero-slider--container');
    const sliderContents = document.querySelectorAll('.hero-slider--content') || null;
    const sliderIndicatorContainer = document.querySelector('.hero-slider--indicator');

    if (!heroSliderContainer || !sliderContents || sliderContents.length < 2) {
      return;
    }

    const sliderLength = sliderContents.length - 1;
    let currentSlide = 0;
    let handler;

    const sliderIndicators = [];
    const sliderIndicatorTemplate = document.querySelector('.hero-slider--indicator > .indicator');

    sliderContents.forEach((sliderContent, index) => {
      const sliderIndicator = sliderIndicatorTemplate.cloneNode(true);
      sliderIndicator.dataset.index = index;
      sliderIndicator.classList.remove('template');
      sliderIndicatorContainer.appendChild(sliderIndicator);
      sliderIndicators.push(sliderIndicator);
    });

    sliderIndicators[currentSlide].classList.add('active');

    const resetIndicators = () => {
      sliderIndicators.forEach((sliderIndicator) => {
        sliderIndicator.classList.remove('active');
      });

      sliderIndicators[currentSlide].classList.add('active');
    };

    const nextSlide = () => {
      currentSlide = currentSlide === sliderLength ? 0 : currentSlide + 1;
      heroSliderContainer.scrollTo({
        top: 0,
        left: currentSlide * heroSliderContainer.offsetWidth
      });

      resetIndicators();
    };

    const prevSlide = () => {
      currentSlide = currentSlide === 0 ? sliderLength : currentSlide - 1;
      heroSliderContainer.scrollTo({
        top: 0,
        left: currentSlide * heroSliderContainer.offsetWidth
      });

      resetIndicators();
    };

    const resetHandler = () => {
      clearInterval(handler);
      handler = setInterval(() => {
        nextSlide();
      }, 5000);
    };

    const autoSlide = () => {
      handler = setInterval(() => {
        nextSlide();
      }, 5000);
    };

    autoSlide();

    sliderIndicators.forEach((sliderIndicator) => {
      sliderIndicator.addEventListener('click', () => {
        currentSlide = parseInt(sliderIndicator.dataset.index, 10);
        heroSliderContainer.scrollTo({
          top: 0,
          left: currentSlide * heroSliderContainer.offsetWidth
        });

        resetIndicators();
        resetHandler();
      });
    });

    heroSliderContainer.addEventListener('swiped-left', () => {
      nextSlide();
      resetHandler();
    });

    heroSliderContainer.addEventListener('swiped-right', () => {
      prevSlide();
      resetHandler();
    });
  }
};

export default HeroInitiatior;
