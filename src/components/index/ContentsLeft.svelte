<script>
  import Bullet from '_components/commons/Bullet.svelte';
  import Btn from '_components/commons/Btn.svelte';
  import BtnThemeToggle from '_components/commons/BtnThemeToggle.svelte';

  import LogoSymbol from '_static/images/logo_symbol.svg';
  import IconPaperplane from '_static/images/icon_paperplane.svg';
</script>

<div class="container">
  <LogoSymbol class="logo-symbol"/>
  <h1><Bullet />Trust me, I can draw what you want.</h1>
  <Btn class="index-btn index-btn-commission" onClick={() => {}}>
    <IconPaperplane />Commission me
  </Btn>
  <Btn class="index-btn" onClick={() => {}} styleType="secondary">
    See info
  </Btn>
  <BtnThemeToggle class="index-btn-theme-toggle" />
</div>

<style lang="scss">
  div.container {
    text-align: center;

    & > :global(.logo-symbol) {
      width: 8rem;
      margin-bottom: var(--space-xs);

      transition-duration: var(--time-short);
    }

    & > :global(.index-btn) {
      display: block;
      margin: var(--space-xs) auto 0;
      width: 15.625rem;
      
      font-size: 1.125rem;
      text-transform: uppercase;
    }
    & > :global(.index-btn-commission) {
      font-weight: bold;
    }
    & > :global(.index-btn-theme-toggle) {
      margin: var(--space-s) auto 0;
    }
  }
</style>