<script>
  import {stores} from '@sapper/app';
  import {writable} from 'svelte/store';
  import {isLoading as isLoadingLocale} from 'svelte-i18n';
  import {cubicInOut} from 'svelte/easing';

  import LogoSymbol from '_static/images/logo_symbol.svg';

  let CONST_TRANSITION_DURATION = 500;
  let CONST_DELAY = 1000;

  const transitionOut = () => ({
    duration: CONST_TRANSITION_DURATION,
    delay: 0,
    easing: cubicInOut,
    css: (t) => `opacity: ${t}`,
  });

  const {preloading} = stores();

  const isPreloadingFirst = writable(true);
  const unsubscribePreloadingFirst = preloading.subscribe(() => {
    setTimeout(() => {
      isPreloadingFirst.set($preloading);
    }, CONST_DELAY);
  });
  isPreloadingFirst.subscribe(() => {
    if (!$isPreloadingFirst) {
      unsubscribePreloadingFirst();
    }
  });

  $: isLoaded = !$isLoadingLocale && !$isPreloadingFirst;
</script>

{#if !isLoaded}
  <div out:transitionOut>
    <LogoSymbol />
  </div>
{/if}

<style lang="scss">
  @keyframes spinner {
    from {
      box-shadow: 0 0 0 0 var(--color-nyong);
    }

    to {
      box-shadow: 0 0 0 2rem transparent;
    }
  }

  div {
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    background: var(--color-background);

    & > :global(svg) {
      overflow: visible;
      width: 8rem;
      border-radius: 100%;

      animation-name: spinner;
      animation-duration: var(--time-long);
      animation-iteration-count: infinite;
      animation-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);
    }

    & > :global(svg path) {
      fill: var(--color-nyong);
    }
  }
</style>
