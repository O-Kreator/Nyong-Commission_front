<script>
  export let styleType = 'primary';
  export let themeChar = 'nyong';
  export let href = null;
  export let onClick = null;
  export let disabled = false;
</script>

{#if href}
  <a class={`${styleType} ${themeChar} ${$$props.class}`} {href}><slot /></a>
{:else if onClick}
  <button class={`${styleType} ${themeChar} ${$$props.class}`} {onClick} {disabled}><slot /></button
  >
{/if}

<style lang="scss">
  a,
  button {
    --btn-height: 3rem;
    --btn-color: var(--color-nyong);

    display: inline-block;
    padding: 0 var(--space-l);

    text-decoration: none;
    line-height: calc(var(--btn-height) - 2px);

    border: 1px solid var(--btn-color);
    background: transparent;

    transition-duration: var(--time-short);

    & > :global(svg) {
      position: relative;
      top: 0.4rem;
      margin-right: var(--space-xs);
      height: 1.5rem;
    }

    &:not(:disabled) {
      cursor: pointer;

      &:active {
        transform: translateY(2px);
      }
    }
  }

  .primary {
    color: var(--color-dark);
    background-color: var(--btn-color);

    &:not(:disabled) {
      &:hover,
      &:focus {
        background-color: var(--color-background);
      }
    }
  }

  .secondary {
    color: var(--color-text);
    background-color: var(--color-background);

    &:hover,
    &:focus {
      color: var(--color-dark);
      background-color: var(--btn-color);
    }
  }

  .poroo {
    --btn-color: var(--color-poroo);
  }
</style>
