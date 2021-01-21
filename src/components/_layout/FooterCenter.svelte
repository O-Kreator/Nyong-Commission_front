<script>
  import BtnThemeToggle from '_components/_commons/BtnThemeToggle.svelte';
</script>

<div>
  <BtnThemeToggle />
</div>

<style lang="scss">
  @import '../../styles/mixin';

  div {
    margin-top: var(--space-s);
    margin-bottom: var(--space-r);
    
    text-align: center;
    line-height: 1;

    @include media-not-mobile {
      margin-top: 0;
      margin-bottom: 0;
      text-align: right;
    }

    @include media-desktop-small {
      text-align: center;
    }
  }
</style>
