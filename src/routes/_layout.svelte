<script context="module">
  import {waitLocale} from 'svelte-i18n';

  export async function preload() {
    return waitLocale();
  }
</script>

<script>
  import Layout from '_components/_layout/_layout.svelte';
</script>

<Layout>
  <slot />
</Layout>
