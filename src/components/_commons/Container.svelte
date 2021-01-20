<script>
  export let hasMarginTop = false;
</script>

<div class={`${hasMarginTop ? 'has-margin-top' : ''} ${$$props.class}`}>
  <slot />
</div>

<style lang="scss">
  div {
    margin: 3rem auto;
    max-width: calc(1366px - 9rem);
    width: calc(100% - var(--space-r));

    transition: margin var(--time-long);

    &.has-margin-top {
      margin-top: calc(var(--height-nav) + 3rem);
    }
  }
</style>