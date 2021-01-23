<script>
  import CopyrightText from '_components/_commons/CopyrightText.svelte';
</script>

<div>
  <CopyrightText />
</div>

<style lang="scss">
  @import '../../styles/mixin';

  div {
    @include media-mobile-only {
      text-align: center;
    }

    @include media-not-mobile {
      position: absolute;
      top: 0;
      left: var(--space-l);
    }
  }
</style>
