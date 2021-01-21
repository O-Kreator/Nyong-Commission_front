<script>
  import Preloader from '_components/_layout/Preloader.svelte';
  import BorderAroundPage from '_components/_layout/BorderAroundPage.svelte';
  import BackgroundGrid from '_components/_layout/BackgroundGrid.svelte';
  import Nav from '_components/_layout/Nav.svelte';
  import Footer from '_components/_layout/Footer.svelte';
</script>

<Preloader />
<BorderAroundPage />
<BackgroundGrid />
<main>
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

    transition: background var(--time-long);

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

  main {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
  }

  #slot-wrapper {
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: auto;
  }
</style>
