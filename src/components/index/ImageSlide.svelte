<script>
  import {onMount} from 'svelte';

  const CONST_SHOWN_TIME = 8000;
  const CONST_TRANSITION_TIME = 1000;
  const CONST_TRANSITION_DELAY_TIME = CONST_TRANSITION_TIME / 50;
  const CONST_TICK_FREQUENCY = 100;

  const imageNames = ['slide_01', 'slide_02', 'slide_03', 'slide_04'];

  let imageWrapper;
  let progressMs = 0;
  let current = 0;

  const slideImageFunc = {
    _make(imageName) {
      const url = `${process.env.URL_CDN}/${imageName}.jpg`;
      const altText = 'Placeholder text.';

      const imgDOM = document.createElement('img');
      imgDOM.setAttribute('src', url);
      imgDOM.setAttribute('alt', altText);
      return imgDOM;
    },
    makeList(imageNames) {
      const imgDOMList = [];

      for (let imageName of imageNames) {
        imgDOMList.push(this._make(imageName));
      }
      imgDOMList[0].classList.add('displayed', 'shown');
      return imgDOMList;
    },
    appendList(imgDOMList, dest) {
      for (let imageDOM of imgDOMList) {
        dest.appendChild(imageDOM);
      }
    },
    show(image) {
      image.classList.add('displayed');
      setTimeout(() => {
        image.classList.add('shown');
      }, CONST_TRANSITION_DELAY_TIME);
    },
    hide(image) {
      image.classList.remove('shown');
      setTimeout(() => {
        image.classList.remove('displayed');
      }, CONST_TRANSITION_TIME);
    },
    slide(imageWrapperDOM) {
      this.hide(imageWrapperDOM.children[current]);
      current = current === imageWrapperDOM.children.length - 1 ? 0 : current + 1;
      setTimeout(this.show(imageWrapperDOM.children[current]), CONST_TRANSITION_DELAY_TIME);
    },
  };

  const slideTimeFunc = {
    tick() {
      progressMs += CONST_SHOWN_TIME / (CONST_TICK_FREQUENCY - 2);
    },
    reset() {
      progressMs = 0;
    },
  };

  const init = () => {
    slideImageFunc.appendList(slideImageFunc.makeList(imageNames), imageWrapper);

    setInterval(() => {
      slideTimeFunc.tick();
    }, CONST_SHOWN_TIME / CONST_TICK_FREQUENCY);
    setInterval(() => {
      slideImageFunc.slide(imageWrapper);
      slideTimeFunc.reset();
    }, CONST_SHOWN_TIME);
  }

  onMount(init);
</script>

<div id="container">
  <div bind:this={imageWrapper} id="image-wrapper" />
  <progress max={CONST_SHOWN_TIME} value={progressMs} />
</div>

<style lang="scss">
  #container {
    position: relative;
    width: 100%;
    height: 100%;

    progress {
      z-index: 2;
      -webkit-appearance: none;
      position: absolute;
      left: 1.5rem;
      bottom: 3rem;
      width: calc(100% - 3rem);
      height: 6px;

      border: none;
      border-radius: 0;
      background: transparent;

      &::-webkit-progress-bar {
        background: transparent;
      }
      &::-webkit-progress-value {
        background: var(--color-nyong);
        transition-duration: var(--time-long);
      }
      &::-moz-progress-bar {
        background: var(--color-nyong);
        transition-duration: var(--time-long);
      }
    }
  }

  #image-wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;

    & > :global(img) {
      z-index: -1;
      display: none;
      position: absolute;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;

      opacity: 0;
      transition-duration: 1s;

      &.displayed {
        display: block;
      }
      &.shown {
        opacity: 1;
      }
    }
  }
</style>
