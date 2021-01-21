<script>
  import {stores} from '@sapper/app';
  import {cubicInOut} from 'svelte/easing';
  import FooterLeft from '_components/_layout/FooterLeft.svelte';
  import FooterCenter from '_components/_layout/FooterCenter.svelte';
  import FooterRight from '_components/_layout/FooterRight.svelte';

  let CONST_DURATION = 500;

  const transitionIn = () => ({
    duration: CONST_DURATION,
    delay: 0,
    easing: cubicInOut,
    css: (t) => `opacity: ${t}`,
  });

  const transitionOut = () => ({
    duration: CONST_DURATION,
    delay: 0,
    easing: cubicInOut,
    css: (t) => `opacity: ${t}`,
  });

  const {page} = stores();
  $: isIndex = $page.path === '/';
</script>

{#if !isIndex}
  <div id="footer-wrapper" in:transitionIn out:transitionOut>
    <div>
      <FooterLeft />
      <FooterCenter />
      <FooterRight />
    </div>
  </div>
{/if}

<style lang="scss">
  @import '../../styles/mixin';

  #footer-wrapper {
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 0;
    width: 100%;
    min-height: 7.5rem;

    transition-duration: var(--time-long);

    @include media-mobile-only {
      padding: 3rem 0;
    }

    & > div {
      position: relative;
      padding: 0 var(--space-l);
      width: 100%;
      max-width: 1366px;
    }
  }
</style>
