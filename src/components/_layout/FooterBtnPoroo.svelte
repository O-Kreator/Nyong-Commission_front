<a href={$$props.href ? $$props.href : ''}>
  <img alt="Poroo-mi" src="images/icon_poroo.png" />
</a>

<style lang="scss">
  a {
    display: inline-block;
    width: 24px;
    height: 24px;

    transform: translateY(0);

    & > img {
      height: 100%;

      transform: scale(1);
      transition-duration: var(--time-long);
    }

    &:hover > img,
    &:focus > img {
      transform: scale(2);
    }

    &:active {
      transform: translateY(2px);
    }
  }
</style>
