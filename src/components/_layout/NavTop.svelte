<script>
  import NavTopLeft from './NavTopLeft.svelte';
  import NavTopRight from './NavTopRight.svelte';

  import {_} from 'svelte-i18n';
</script>

{#if $$props.isShown}
  <div id="nav-wrapper">
    <nav>
      <NavTopLeft />
      <NavTopRight />
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
    height: 7rem;

    border-bottom: 1px solid transparent;

    transition-duration: var(--time-long);

    animation-name: slide-in;
    animation-duration: var(--time-long);
    animation-iteration-count: once;

    & {
      background: var(--color-background);
      border-bottom: 1px solid var(--color-nyong);
    }

    @include media-mobile-only {
      height: 5rem;
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
