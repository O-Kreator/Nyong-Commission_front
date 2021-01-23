<a href={$$props.href} class="text-en">
  <i><svelte:component this={$$props.icon} /></i><span>{$$props.id}</span>
</a>

<style lang="scss">
  a {
    display: inline-block;

    font-size: initial;
    line-height: 1;

    transition-property: color, font-size;

    & > i {
      vertical-align: middle;
      display: inline-block;
      width: 24px;

      & > :global(svg) {
        fill: var(--color-text);
        transition-duration: var(--time-long);
      }
    }

    & > span {
      margin-left: var(--space-s);
    }

    &:hover,
    &:focus {
      & > i > :global(svg) {
        fill: var(--color-nyong-bright);
        transition-duration: var(--time-short);
      }
    }

    &:active {
      transform: translateY(2px);
    }
  }
</style>
