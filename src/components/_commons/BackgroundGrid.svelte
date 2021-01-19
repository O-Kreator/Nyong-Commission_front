<script>
  export let width = 'container';
</script>

<div class={width} />

<style lang="scss">
  div {
    &.container {
      max-width: calc(1366px - 6rem);
      margin: 0 auto;
    }

    --grid-color: var(--color-nyong-bright);

    z-index: -1;

    position: fixed;
    top: 0;
    left: 3rem;
    right: 3rem;
    bottom: 0;
    background: linear-gradient(90deg, var(--grid-color) 1px, transparent 1px) 0 0;
    background-size: calc((100% - 1px) / var(--grid-count)) 1px;

    opacity: 1;
    transition: opacity 0.5s;

    :global(body.theme_dark) & {
      opacity: 0.4;
    }
  }
</style>
