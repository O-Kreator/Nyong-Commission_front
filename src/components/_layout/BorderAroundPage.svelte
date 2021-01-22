<script>
  import {stores} from '@sapper/app';

  const {page} = stores();
  $: isIndex = $page.path === '/';
</script>

<div class={`border-hor ${isIndex && 'active'}`} />
<div class={`border-ver ${isIndex && 'active'}`} />

<style lang="scss">
  .border-hor {
    &::before,
    &::after {
      content: '';
      z-index: 1;
      position: fixed;
      left: 0;
      right: 0;
      height: 0;
      background-color: var(--color-border);

      transition-duration: var(--time-long);
    }

    &::before {
      top: 0;
    }

    &::after {
      bottom: 0;
    }

    &.active::before,
    &.active::after {
      height: 1.5rem;
    }
  }

  .border-ver {
    &::before,
    &::after {
      content: '';
      z-index: 1;
      position: fixed;
      top: 0;
      bottom: 0;
      width: 0;
      background-color: var(--color-border);

      transition-duration: var(--time-long);
    }

    &::before {
      left: 0;
    }

    &::after {
      right: 0;
    }

    &.active::before,
    &.active::after {
      width: 1.5rem;
    }
  }
</style>
