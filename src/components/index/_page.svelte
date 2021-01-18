<script>
  import BackgroundGrid from '_components/commons/BackgroundGrid.svelte';
  import ContentsLeft from './ContentsLeft.svelte';
  import ImageSlide from './ImageSlide.svelte';
  import CopyrightText from '_components/commons/CopyrightText.svelte';

  import LogoSymbol from '_static/images/logo_symbol.svg';
  import LogoText from '_static/images/logo_text.svg';
</script>

<svelte:head>
  <title>Doro-nyong's Commission</title>
</svelte:head>

<BackgroundGrid width="full" />
<div id="container-left">
  <LogoSymbol class="index-logo-symbol-background" />
  <LogoText class="index-logo-text" />
  <ContentsLeft />
  <CopyrightText class="index-copyright-text" />
</div>
<div id="container-right">
  <ImageSlide />
</div>

<style lang="scss">
  @import '../../styles/mixin';

  :global(.index-logo-symbol-background) {
    z-index: -10;
    position: absolute;
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

  #container-left {
    position: fixed;
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

      transition-property: left;
      transition-duration: var(--time-long);

      & :global(path) {
        fill: var(--color-nyong);

        transition-duration: var(--time-long);
      }

      @include media-mobile-only {
        --logo-text-width: calc(var(--grid-width-each-full));
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
      bottom: 1.5rem;
      line-height: 1.2;

      transition-property: left, bottom;
      transition-duration: var(--time-short);

      @include media-desktop-regular {
        left: -0.5rem;
      }
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
