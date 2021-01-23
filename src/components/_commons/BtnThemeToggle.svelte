<script>
  import {onMount} from 'svelte';

  import IconSun from '_static/images/icon_sun.svg';
  import IconMoon from '_static/images/icon_moon.svg';

  let isThemeDark = false;

  const setIsThemeDark = () => {
    return window.document.body.classList.contains('theme_dark');
  };

  const toggleTheme = () => {
    window.document.body.classList.toggle('theme_dark');
    isThemeDark = !isThemeDark;
  };

  onMount(setIsThemeDark);
</script>

<button class={$$props.class ? `${$$props.class}` : ''} on:click={toggleTheme}>
  {#if isThemeDark}
    <IconMoon />
  {:else}
    <IconSun />
  {/if}
</button>

<style>
  button {
    padding: 0;
    width: 24px;
    height: 24px;
    line-height: 0;

    border: 0;
    background: transparent;

    transform: translateY(0);
    transition: transform var(--time-short);

    cursor: pointer;

    &:active {
      transform: translateY(2px);
    }

    & > :global(svg) {
      fill: var(--color-text);
      transition: fill var(--time-long);
    }

    &:hover > :global(svg),
    &:focus > :global(svg) {
      fill: var(--color-nyong-bright);
      transition-duration: var(--time-short);
    }
  }
</style>
