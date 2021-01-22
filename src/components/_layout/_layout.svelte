<script>
  import {stores} from '@sapper/app';
  import {slimscroll} from 'svelte-slimscroll';

  import Preloader from '_components/_layout/Preloader.svelte';
  import BorderAroundPage from '_components/_layout/BorderAroundPage.svelte';
  import BackgroundGrid from '_components/_layout/BackgroundGrid.svelte';
  import Nav from '_components/_layout/Nav.svelte';
  import Footer from '_components/_layout/Footer.svelte';

  const slimscrollOptions = {
    width: '100%',
    height: '100%',
    distance: 0,
    opacity: 0.5,
    alwaysVisible: true,
    wrapperClass: 'scroll-wrapper',
    railClass: 'scroll-bg',
    barClass: 'scroll-bar',
    color: 'var(--color-text)',
    borderRadius: 0,
  };

  const {page} = stores();
  $: isIndex = $page.path === '/';
</script>

<Preloader />
<BorderAroundPage />
<BackgroundGrid />
<div id="scroll-root-wrapper" use:slimscroll={slimscrollOptions}>
  <main class={isIndex ? 'fix-height' : ''}>
    <Nav />
    <div id="slot-wrapper">
      <slot />
    </div>
    <Footer />
  </main>
</div>

<style lang="scss">
  @import '../../styles/config';
  @import '../../styles/mixin';

  @mixin fix-height-not-mobile {
    @include media-not-mobile {
      min-height: 640px;
    }
  }
  @mixin fix-height-mobile-only {
    @include media-mobile-only {
      min-height: 480px;
    }
  }

  :global(body) {
    --color-background: var(--color-bright);
    --color-text: var(--color-dark);
    --color-nyong: var(--color-nyong-bright);
    --color-poroo: var(--color-poroo-bright);

    transition: background var(--time-long);
    overflow: hidden;

    --color-hover: var(--color-nyong);
    --color-border: var(--color-nyong);

    &.char-poroo {
      --color-hover: var(--color-poroo);
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

  :global(div.scroll-bg) {
    width: var(--space-xs) !important;
  }

  :global(div.scroll-bar) {
    width: var(--space-xs) !important;
    transition: background var(--time-long);
  }

  main {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;

    & > #slot-wrapper {
      flex-grow: 1;
      flex-shrink: 0;
    }

    &.fix-height {
      @include fix-height-not-mobile;
      @include fix-height-mobile-only;
    }
  }
</style>
