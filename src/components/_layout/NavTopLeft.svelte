<script>
  import LogoSymbol from '_static/images/logo_symbol.svg';
  import LogoText from '_static/images/logo_text.svg';
</script>

<div id="nav-top-left">
  <LogoSymbol class="logo-symbol" />
  <div id="nav-logo-text-wrapper">
    <LogoText class="logo-text" />
  </div>
</div>

<style lang="scss">
  @import '../../styles/mixin';
  
  #nav-top-left {
    display: flex;
    align-items: center;

    & :global(svg) {
      opacity: 1;
      transition-duration: var(--time-long);
    }

    & :global(svg.logo-symbol) {
      width: 4rem;

      @include media-mobile-only {
        width: 3rem;
      }
    }

    :global(body.theme_dark) & :global(svg) {
      opacity: 0.5;
    }
  }

  #nav-logo-text-wrapper {
    width: 0;
    transform: translateX(calc(-1 * var(--space-r)));
    opacity: 0;

    transition-duration: var(--time-regular);

    @include media-desktop-small {
      transform: translateX(0);
      opacity: 1;

      transition-duration: var(--time-long);
    }

    & > :global(svg.logo-text) {
      height: 2.5rem;
      margin-left: var(--space-r);
    }
  }
</style>