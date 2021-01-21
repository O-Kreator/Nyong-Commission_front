<script>
  import {_} from 'svelte-i18n';
</script>

<div id="footer-right">
  <div>
    <a href="/">{$_('commons.conditions-of-use')}</a><a href="/">{$_('commons.privacy-notice')}</a>
  </div>
</div>

<style lang="scss">
  @import '../../styles/mixin';

  #footer-right {
    transition: font-size var(--time-long), color 0;

    @include media-mobile-only {
      text-align: center;
    }

    @include media-desktop-small {
      position: absolute;
      top: 0;
      right: var(--space-l);
    }

    & > div {
      margin: 0;

      & > a {
        font-size: 1rem;

        &:not(:first-child) {
          margin-left: 1rem;
        }
      }
    }
  }
</style>
