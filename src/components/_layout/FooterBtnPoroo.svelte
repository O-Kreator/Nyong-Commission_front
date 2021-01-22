<a href={$$props.href ? $$props.href : ''}>
  <img alt="Poroo-mi" src="images/icon_poroo.png" />
</a>

<style lang="scss">
  @keyframes effect-hover {
    from {
      box-shadow: 0 0 0 0 var(--color-poroo);
    }

    to {
      box-shadow: 0 0 0 48px transparent;
    }
  }

  a {
    display: inline-block;
    width: 24px;
    height: 24px;

    border-radius: 100%;
    background: transparent;

    transform: translateY(0);

    transition-duration: var(--time-long);

    & > img {
      height: 100%;

      transform: scale(1);
      transition-duration: var(--time-long);
    }

    &:hover,
    &:focus {
      animation-name: effect-hover;
      animation-duration: var(--time-long);
      animation-iteration-count: infinite;

      & > img {
        transform: scale(2);
        transition-timing-function: cubic-bezier(0, 1, 0.25, 2);
      }
    }

    &:active {
      transform: translateY(2px);
    }
  }
</style>
