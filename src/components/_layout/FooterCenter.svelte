<script>
  import FooterBtnIcon from '_components/_layout/FooterBtnIcon.svelte';
  import BtnThemeToggle from '_components/_commons/BtnThemeToggle.svelte';

  import IconTwitter from '_static/images/icon_twitter.svg';
  import IconGithub from '_static/images/icon_github.svg';
</script>

<div>
  <FooterBtnIcon href="https://twitter.com/doro_nyong_art">
    <IconTwitter />
  </FooterBtnIcon>
  <FooterBtnIcon href="https://github.com/O-Kreator/Nyong-Commission_front">
    <IconGithub />
  </FooterBtnIcon>
  <BtnThemeToggle />
</div>

<style lang="scss">
  @import '../../styles/mixin';

  div {
    margin-top: var(--space-s);
    margin-bottom: var(--space-r);
    
    text-align: center;
    line-height: 1;

    @include media-not-mobile {
      margin-top: 0;
      margin-bottom: 0; 
      text-align: right;
    }

    @include media-desktop-small {
      text-align: center;
    }

    & > :global(*:not(:first-child)) {
      margin-left: var(--space-l);
    }
  }
</style>
