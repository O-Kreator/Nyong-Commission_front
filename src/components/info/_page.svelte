<script>
  import Container from '_components/_commons/Container.svelte';
  import Bullet from '_components/_commons/Bullet.svelte';

  import {_} from 'svelte-i18n';
</script>

<svelte:head>
  <title>Info - Doro-nyong's Commission</title>
</svelte:head>

<Container hasMarginTop={true} hasMarginBottom={false}>
  <h1><Bullet />{$_('commons.under-construction')}</h1>
</Container>

<style lang="scss">
  @import '../../styles/mixin';

  h1 {
    text-align: center;
    margin-bottom: 0;

    transition-duration: var(--time-long);

    @include media-mobile-only {
      font-size: 1.5rem;
    }
  }
</style>
