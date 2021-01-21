<script>
  import {stores} from '@sapper/app';
  import {cubicInOut} from 'svelte/easing';
  import NavLeft from './NavLeft.svelte';
  import NavRight from './NavRight.svelte';

  let CONST_DURATION = 500;

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
  <div id="nav-wrapper" out:transitionOut>
    <nav>
      <NavLeft />
      <NavRight />
    </nav>
  </div>
{/if}

<style lang="scss">
  @import '../../styles/mixin';

  @keyframes slide-in {
    from {
      transform: translateY(-100%);
    }

    to {
      transform: translateY(0);
    }
  }

  #nav-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: var(--height-nav);

    border-bottom: 1px solid transparent;

    transition-duration: var(--time-long);

    animation-name: slide-in;
    animation-duration: var(--time-long);
    animation-iteration-count: once;

    & {
      background: var(--color-background);
      border-bottom: 1px solid var(--color-nyong);
    }

    & > nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
      padding: 0 var(--space-l);
      max-width: 1366px;
      height: 100%;

      transition-duration: var(--time-long);

      @include media-mobile-only {
        padding: 0 var(--space-r);
      }
    }
  }
</style>
