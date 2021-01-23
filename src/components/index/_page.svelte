<script>
  import ContentsLeft from './ContentsLeft.svelte';
  import ImageSlide from './ImageSlide.svelte';
  import CopyrightText from '_components/_commons/CopyrightText.svelte';
  import BtnThemeToggle from '_components/_commons/BtnThemeToggle.svelte';

  import LogoSymbol from '_static/images/logo_symbol.svg';
  import LogoText from '_static/images/logo_text.svg';
</script>

<svelte:head>
  <title>Doro-nyong's Commission</title>
</svelte:head>

<div id="container-left">
  <LogoSymbol class="index-logo-symbol-background" />
  <LogoText class="index-logo-text" />
  <ContentsLeft />
  <CopyrightText class="index-copyright-text" />
  <BtnThemeToggle class="index-btn-theme-toggle" />
</div>
<div id="container-right">
  <ImageSlide />
</div>

<style lang="scss">
  @import '../../styles/mixin';

  #container-left {
    position: absolute;
    top: 0rem;
    left: 2.5rem;
    right: 2.5rem;
    bottom: 0rem;
    padding: var(--space-l);
    display: flex;
    justify-content: center;
    align-items: center;

    transition-duration: var(--time-long);

    @include media-mobile-only {
      padding: 0;
    }

    @include media-desktop-regular {
      left: 3rem;
      right: 50%;
    }

    & > :global(svg.index-logo-text) {
      --logo-text-width: calc(var(--grid-width-each-full) + 3rem);

      z-index: -1;
      position: absolute;
      top: calc(1.5rem - 2px);
      left: 50%;
      width: var(--logo-text-width);
      transform: translateX(calc(var(--logo-text-width) / 2 * -1));

      opacity: 1;

      transition-property: top, left, opacity;
      transition-duration: var(--time-long);

      & :global(path) {
        fill: var(--color-nyong);

        transition-duration: var(--time-long);
      }

      @include media-mobile-only {
        --logo-text-width: calc(var(--grid-width-each-full));

        @media screen and (max-height: 575px) {
          top: -1.5rem;
          opacity: 0;
        }
      }

      @include media-desktop-regular {
        --logo-text-width: calc(var(--grid-width-each-full) + 1.5rem);

        left: -1.5rem;
        right: 50%;
        transform: translateX(0);
      }
    }

    & > :global(.index-copyright-text) {
      position: absolute;
      left: 0;
      bottom: 2.5rem;
      line-height: 1.2;

      transition-property: left, bottom;
      transition-duration: var(--time-short);

      @include media-desktop-regular {
        left: -0.5rem;
      }
    }

    & > :global(.index-btn-theme-toggle) {
      position: absolute;
      right: 0;
      bottom: 2.5rem;

      @include media-desktop-regular {
        right: 1rem;
      }
    }
  }

  :global(.index-logo-symbol-background) {
    z-index: -10;
    position: fixed;
    top: 50%;
    left: 50%;
    width: 512px;
    transform: translate(-50%, -50%);

    transition-duration: var(--time-long);

    & :global(path) {
      fill: transparent;
      stroke: var(--color-nyong-bright);
      stroke-width: 0.125px;
      opacity: 1;

      transition: opacity var(--time-long);

      :global(body.theme_dark) & {
        opacity: 0.5;
      }
    }

    @include media-desktop-regular {
      left: -3rem;
      transform: translate(0, -50%);
    }
  }

  #container-right {
    position: fixed;
    top: 0;
    left: 100%;
    right: 1.5rem;
    bottom: 0;

    transition-duration: var(--time-long);

    @include media-desktop-regular {
      left: 50%;
    }
  }
</style>
