<script>
  import {_, locale, locales} from 'svelte-i18n';

  const onClick = () => {
    const currentLocaleIndex = $locales.indexOf($locale);
    const nextLocaleIndex = currentLocaleIndex === $locales.length - 1 ? 0 : currentLocaleIndex + 1;
    locale.set($locales[nextLocaleIndex]);
  };
</script>

<button
  class={`${$$props.class ? `${$$props.class} ` : ''}${$locale === 'ko-KR' && 'text-en'}`}
  on:click={onClick}>
  {$_(`commons.change-lang`)}
</button>

<style lang="scss">
  button {
    padding: 0;

    border: 0;
    background: none;

    color: var(--color-text);
    font-size: 1rem;
    line-height: 1;
    text-decoration: underline;
    white-space: nowrap;

    transform: translateY(0);

    cursor: pointer;

    transition: color var(--time-long), font-size var(--time-long), transform var(--time-short);

    &:hover,
    &:focus {
      color: var(--color-nyong-bright);
      transition-duration: var(--time-short);
    }

    &:active {
      transform: translateY(2px);
    }
  }
</style>
