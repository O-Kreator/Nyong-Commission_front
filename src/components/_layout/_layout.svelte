<script>
  import {onMount} from 'svelte';
  import {stores} from '@sapper/app';
  import {initTheme} from '_services/theme.js';

  import Preloader from '_components/_layout/Preloader.svelte';
  import BorderAroundPage from '_components/_layout/BorderAroundPage.svelte';
  import BackgroundGrid from '_components/_layout/BackgroundGrid.svelte';
  import Nav from '_components/_layout/Nav.svelte';
  import Footer from '_components/_layout/Footer.svelte';

  const {page} = stores();
  $: isIndex = $page.path === '/';

  onMount(initTheme);
</script>

<Preloader />
<BorderAroundPage />
<BackgroundGrid />
<main class={isIndex ? 'fix-height' : ''}>
  <Nav />
  <div id="slot-wrapper">
    <slot />
  </div>
  <Footer />
</main>

<style lang="scss">
  @import '../../styles/config';

  :global(body) {
    --color-background: var(--color-bright);
    --color-text: var(--color-dark);
    --color-nyong: var(--color-nyong-bright);
    --color-poroo: var(--color-poroo-bright);

    --color-hover: var(--color-nyong-bright);
    --color-border: var(--color-nyong);

    transition: background var(--time-long);

    overflow-x: hidden;
    overflow-y: overlay;

    &.char-poroo {
      --color-hover: var(--color-poroo-bright);
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

  :global(a) {
    color: var(--color-text);

    transition-duration: var(--time-long);

    &:hover,
    &:focus {
      color: var(--color-hover);

      transition-duration: var(--time-short);
    }
  }

  main {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    min-height: calc(100% - var(--height-footer));

    transition: min-height var(--time-long);

    &.fix-height {
      @include media-not-mobile {
        min-height: min(120vw, 640px);
      }
      @include media-mobile-only {
        min-height: 480px;
      }
    }

    #slot-wrapper {
      flex-grow: 1;
      flex-shrink: 0;
    }
  }
</style>
