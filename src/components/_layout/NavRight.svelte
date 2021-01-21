<script>
  import Btn from '_components/_commons/Btn.svelte';
  import BtnLanguageToggle from '_components/_commons/BtnLanguageToggle.svelte';
  import NavBtnCommissionMe from './NavBtnCommissionMe.svelte';
</script>

<div id="nav-right">
  <BtnLanguageToggle />
  <Btn class="nav-top-right-btn-info" styleType="secondary" onClick={() => {}}>🤔</Btn>
  <NavBtnCommissionMe />
</div>

<style lang="scss">
  @import '../../styles/mixin';

  #nav-right {
    display: flex;
    align-items: center;

    & > :global(:not(:first-child)) {
      margin-left: var(--space-r);

      @include media-mobile-only {
        margin-left: var(--space-s);
      }
    }

    & > :global(.nav-top-right-btn-info) {
      padding: 0;
      width: var(--btn-height);
    }
  }
</style>
