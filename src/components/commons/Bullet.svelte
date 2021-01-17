<script>
  export let themeChar = 'nyong';
</script>

<span class={themeChar} />

<style land="scss">
  span {
    --bullet-size: 1.25rem;
    --bullet-border-size: 1.75rem;
    --bullet-color: var(--color-nyong);

    z-index: -1;
    display: inline-block;
    position: relative;
    top: calc(-0.5em + 5px);
    left: calc(var(--bullet-size) * -0.5);
    width: var(--bullet-size);
    height: var(--bullet-size);
    margin-right: calc(var(--bullet-size) * -1);

    border-radius: 50%;
    background: var(--bullet-color);

    &::before {
      content: '';
      position: absolute;
      top: calc(var(--bullet-size) * -0.25);
      left: calc(var(--bullet-size) * -0.25);
      width: var(--bullet-border-size);
      height: var(--bullet-border-size);

      border-radius: 50%;
      border: 1px solid var(--bullet-color);
    }

    &.poroo {
      --bullet-color: var(--color-poroo);
    }
  }
</style>
