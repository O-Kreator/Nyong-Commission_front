<script>
  import {writable} from 'svelte/store';
  import {getTheme, toggleTheme} from '_services/theme.js';

  import IconSun from '_static/images/icon_sun.svg';
  import IconMoon from '_static/images/icon_moon.svg';

  const isThemeDark = writable(false);
 
  const onClick = () => {
    toggleTheme();
    isThemeDark.set(getTheme() === 'dark');
  }
</script>

<button class={$$props.class ? `${$$props.class}` : ''} on:click={onClick}>
  {#if $isThemeDark}
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
