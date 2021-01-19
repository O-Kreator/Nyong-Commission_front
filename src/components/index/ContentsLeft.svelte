<script>
  import Bullet from '_components/_commons/Bullet.svelte';
  import Btn from '_components/_commons/Btn.svelte';
  import BtnLanguageToggle from '_components/_commons/BtnLanguageToggle.svelte';

  import LogoSymbol from '_static/images/logo_symbol.svg';
  import IconPaperplane from '_static/images/icon_paperplane.svg';

  import {_} from 'svelte-i18n';
</script>

<div class="container">
  <LogoSymbol class="logo-symbol" />
  <h1><Bullet />{$_('index.catchphrase')}</h1>
  <Btn class="index-btn index-btn-commission" onClick={() => {}}>
    <IconPaperplane />{$_('index.btn-commission-me')}
  </Btn>
  <Btn class="index-btn" onClick={() => {}} styleType="secondary">{$_('index.btn-see-info')}</Btn>
  <BtnLanguageToggle class="index-btn-language-toggle" />
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

    & > :global(.index-btn-language-toggle) {
      margin: var(--space-r) auto 0;
    }
  }
</style>
