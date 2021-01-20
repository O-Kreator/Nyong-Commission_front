<script context="module">
  import {isLoading, waitLocale} from 'svelte-i18n';

  export async function preload() {
    return waitLocale();
  }
</script>

<script>
  import {stores} from '@sapper/app';
  import BorderAroundPage from '_components/_layout/BorderAroundPage.svelte';
  import BackgroundGrid from '_components/_layout/BackgroundGrid.svelte';
  import NavTop from '_components/_layout/NavTop.svelte';

  const {page} = stores();
  $: isIndex = $page.path === '/';
</script>

<BorderAroundPage active={isIndex} />
<BackgroundGrid width={isIndex ? 'full' : 'container'} />

{#if $isLoading}
  Loading...
{:else}
  <main>
    <NavTop isShown={!isIndex} />
    <slot />
  </main>
{/if}

<style lang="scss">
  @import '../styles/config';

  :global(body) {
    --color-background: var(--color-bright);
    --color-text: var(--color-dark);
    --color-nyong: var(--color-nyong-bright);
    --color-poroo: var(--color-poroo-bright);

    transition: background var(--time-long);

    --color-border: var(--color-nyong);

    &.char-poroo {
      --color-border: var(--color-poroo);
    }
  }

  :global(body.theme_dark) {
    --color-background: var(--color-dark);
    --color-text: var(--color-bright);
    --color-nyong: var(--color-nyong-dark);
    --color-poroo: var(--color-poroo-dark);
  }

  main {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>
