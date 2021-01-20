<script context="module">
  import {waitLocale} from 'svelte-i18n';

  export async function preload() {
    return waitLocale();
  }
</script>

<script>
  import {stores} from '@sapper/app';
  import {writable} from 'svelte/store';
  import {isLoading as isLoadingLocale} from 'svelte-i18n';

  import Preloader from '_components/_layout/Preloader.svelte';
  import BorderAroundPage from '_components/_layout/BorderAroundPage.svelte';
  import BackgroundGrid from '_components/_layout/BackgroundGrid.svelte';
  import NavTop from '_components/_layout/NavTop.svelte';

  const CONST_PRELOAD_TIME_MIN = 1000;

  const {page, preloading} = stores();

  const isPreloadingFirst = writable(true);
  const unsubscribePreloadingFirst = preloading.subscribe(() => {
    setTimeout(() => {
      isPreloadingFirst.set($preloading);
    }, CONST_PRELOAD_TIME_MIN);
  });
  isPreloadingFirst.subscribe(() => {
    if (!$isPreloadingFirst) {
      unsubscribePreloadingFirst();
    }
  });

  $: isIndex = $page.path === '/';
  $: isLoaded = !$isLoadingLocale && !$isPreloadingFirst;
</script>

<Preloader {isLoaded} />
<BorderAroundPage active={isIndex} />
<BackgroundGrid width={isIndex ? 'full' : 'container'} />
<main>
  <NavTop isShown={!isIndex} />
  <slot />
</main>

<style lang="scss">
  @import '../styles/config';

  :global(body) {
    --color-background: var(--color-bright);
    --color-text: var(--color-dark);
    --color-nyong: var(--color-nyong-bright);
    --color-poroo: var(--color-poroo-bright);

    transition: background var(--time-long);

    --color-border: var(--color-nyong);

    &.char-poroo {
      --color-border: var(--color-poroo);
    }
  }

  :global(body.theme_dark) {
    --color-background: var(--color-dark);
    --color-text: var(--color-bright);
    --color-nyong: var(--color-nyong-dark);
    --color-poroo: var(--color-poroo-dark);
  }

  @keyframes main-transition {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  #layout-wrapper {
    animation-name: main-transition;
    animation-duration: var(--time-long);
    animation-iteration-count: once;
  }

  main {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>
