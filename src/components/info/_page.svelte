<script>
  import Container from '_components/_commons/Container.svelte';
  import Bullet from '_components/_commons/Bullet.svelte';

  import {_} from 'svelte-i18n';
</script>

<svelte:head>
  <title>Information - Doro-nyong's Commission</title>
</svelte:head>

<Container hasMarginTop={true}>
  <h1><Bullet />{$_('commons.under-construction')}</h1>
</Container>

<style>
  h1 {
    text-align: center;
  }
</style>
