<script>
</script>

<main class="border-on">
  <div class="border" />
  <div class="border" />
  <div class="border" />
  <div class="border" />
  <slot />
</main>

<style lang="scss">
  @import '../styles/config';

  main {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    & > div.border {
      z-index: 10;
      position: fixed;
      background: var(--color-nyong);
      width: 0;
      height: 0;

      transition-duration: 0.5s;

      &:nth-child(1) {
        top: 0;
        left: 0;
        width: 100%;
      }
      &:nth-child(2) {
        bottom: 0;
        left: 0;
        width: 100%;
      }
      &:nth-child(3) {
        top: 0;
        left: 0;
        height: 100%;
      }
      &:nth-child(4) {
        top: 0;
        right: 0;
        height: 100%;
      }
    }

    &.border-on > div.border {
      &:nth-child(1),
      &:nth-child(2) {
        height: 1.5rem;
      }
      &:nth-child(3),
      &:nth-child(4) {
        width: 1.5rem;
      }
    }
  }
</style>
