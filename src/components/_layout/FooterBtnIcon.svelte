<a href={$$props.href ? $$props.href : ''} target="_blank">
  <slot />
</a>

<style lang="scss">
  a {
    display: inline-block;
    width: 24px;
    height: 24px;

    transform: translateY(0);

    & > :global(svg) {
      height: 100%;
      fill: var(--color-text);

      transition-duration: var(--time-long);
    }

    &:hover > :global(svg),
    &:focus > :global(svg) {
      fill: var(--color-nyong-bright);

      transition-duration: var(--time-short);
    }

    &:active {
      transform: translateY(2px);
    }
  }
</style>
