<script>
  import Btn from '_components/_commons/Btn.svelte';

  import IconPaperplane from '_static/images/icon_paperplane.svg';

  import {_} from 'svelte-i18n';
</script>

<div id="wrapper">
  <Btn class="nav-btn-commission-me" onClick={() => {}}>
    <IconPaperplane /><span>{$_('commons.commission-me')}</span>
  </Btn>
</div>

<style lang="scss">
  #wrapper {
    transition-duration: var(--time-long);

    & > :global(button.nav-btn-commission-me) {
      --padding: calc((var(--btn-height) - 1.5rem) / 2 - 0.1rem);

      padding: 0 var(--padding);
      max-width: var(--btn-height);
      overflow-x: hidden;

      white-space: nowrap;
      font-weight: bold;
      text-transform: uppercase;

      @media screen and (min-width: 512px) {
        padding: 0 var(--space-l);
        max-width: 13.5rem;
      }

      @media screen and (max-width: 511px) {
        color: transparent;
      }
    }
  }
</style>
