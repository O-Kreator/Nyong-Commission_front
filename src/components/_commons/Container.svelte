<script>
  export let hasMarginTop = false;
  export let hasMarginBottom = false;

  const classes = [];
  if (hasMarginTop) {
    classes.push('has-margin-top');
  }
  if (hasMarginBottom) {
    classes.push('has-margin-bottom');
  }
  if ($$props.class) {
    classes.push($$props.class);
  }
</script>

<div class={classes.join(' ')}>
  <slot />
</div>

<style lang="scss">
  @import '../../styles/mixin';

  div {
    --margin-hor: 3rem;

    margin: var(--margin-hor) auto 0;
    max-width: calc(1366px - 9rem);
    width: calc(100% - 2 * var(--space-l));

    transition-property: margin, width;
    transition-duration: var(--time-long);

    @include media-mobile-only {
      width: calc(100% - 2 * var(--space-r));
    }

    &.has-margin-top {
      margin-top: calc(var(--height-nav) + var(--margin-hor));
    }
    
    &.has-margin-bottom {
      margin-bottom: calc(var(--margin-hor) - 2rem);

      @include media-mobile-only {
        margin-bottom: calc(var(--margin-hor) - var(--space-l));
      }
    }
  }
</style>
