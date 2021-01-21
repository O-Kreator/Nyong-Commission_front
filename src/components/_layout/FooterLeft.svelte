<script>
  import CopyrightText from '_components/_commons/CopyrightText.svelte';
</script>

<div>
  <CopyrightText class="footer-left-copyright-text" />
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

    & > :global(.footer-left-copyright-text) {
      margin: 0;
    }
  }
</style>
