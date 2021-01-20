<script>
  import {onMount, onDestroy} from 'svelte';

  const CONST_SHOWN_TIME = 8000;
  const CONST_TRANSITION_TIME = 1000;
  const CONST_TRANSITION_DELAY_TIME = CONST_TRANSITION_TIME / 50;
  const CONST_TICK_FREQUENCY = 500;

  const imageNames = ['slide_01', 'slide_02', 'slide_03', 'slide_04'];

  let imageWrapper;
  let progressMs = 0;
  let current = 0;

  let finalizeParam;

  const slideImageFunc = {
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

  const initializeFunc = () => {
    finalizeParam = setInterval(() => {
      slideTimeFunc.tick();
      if (progressMs >= CONST_SHOWN_TIME) {
        slideImageFunc.slide(imageWrapper);
        slideTimeFunc.reset();
      }
    }, CONST_SHOWN_TIME / CONST_TICK_FREQUENCY);
  };

  onMount(initializeFunc);
  onDestroy(() => {
    clearInterval(finalizeParam);
  });
</script>

<div id="container">
  <div bind:this={imageWrapper} id="image-wrapper">
    {#each imageNames as imageName, i}
      <img
        src="process.env.URL_CDN/{imageName}.jpg"
        alt="Placeholder text."
        class={i === 0 ? 'displayed shown' : ''}
      />
    {/each}
  </div>
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
        background: var(--color-nyong-bright);
        transition-duration: var(--time-short);
      }
      &::-moz-progress-bar {
        background: var(--color-nyong-bright);
        transition-duration: var(--time-short);
      }
    }
  }

  @keyframes slide-in {
    from {
      opacity: 0;
      transform: translateX(4rem);
    }

    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  #image-wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;

    animation-name: slide-in;
    animation-duration: var(--time-long);
    animation-iteration-count: once;

    & > :global(img) {
      z-index: -1;
      display: none;
      position: absolute;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;

      opacity: 0;
      transition: opacity 1s, filter var(--time-long);

      filter: brightness(1);

      :global(body.theme_dark) & {
        filter: brightness(0.5);
      }

      &.displayed {
        display: block;
      }
      &.shown {
        opacity: 1;
      }
    }
  }
</style>
