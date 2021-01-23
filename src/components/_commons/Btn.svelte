<script>
  export let styleType = 'primary';
  export let themeChar = 'nyong';
  export let href = null;
  export let onClick = null;
  export let disabled = false;
</script>

{#if href}
  <a class={`${$$props.class ? `${$$props.class} ` : ''}${styleType} ${themeChar}`} {href}
    ><slot /></a
  >
{:else if onClick}
  <button
    class={`${$$props.class ? `${$$props.class} ` : ''}${styleType} ${themeChar}`}
    on:click={onClick}
    {disabled}>
    <slot />
  </button>
{/if}

<style lang="scss">
  a,
  button {
    --btn-height: 3rem;
    --btn-color: var(--color-nyong-bright);

    display: inline-block;
    margin: 0;
    padding: 0 var(--space-l);

    font-size: 1rem;
    text-decoration: none;
    line-height: calc(var(--btn-height) - 2px);

    border: 1px solid var(--btn-color);
    background: transparent;

    transition-duration: var(--time-long);

    & > :global(svg) {
      position: relative;
      top: 0.4rem;
      margin-right: var(--space-xs);
      height: 1.5rem;

      transition: fill var(--time-long), height var(--time-long);
    }

    &:not(:disabled) {
      cursor: pointer;

      &:hover,
      &:focus,
      &:active {
        transition-duration: var(--time-short);

        & > :global(svg) {
          transition-duration: var(--time-short);
        }
      }

      &:active {
        transform: translateY(2px);
      }
    }
  }

  .primary {
    color: var(--color-dark);
    background-color: var(--btn-color);

    & > :global(svg) {
      fill: var(--color-dark);
    }

    &:not(:disabled) {
      &:hover,
      &:focus {
        color: var(--color-text);
        background-color: var(--color-background);

        & > :global(svg) {
          fill: var(--color-text);
        }
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
