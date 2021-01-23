<script>
  import Bullet from '_components/_commons/Bullet.svelte';
  import SocialMediaLink from './SocialMediaLink.svelte';

  import IconTwitter from '_static/images/icon_twitter.svg';
  import IconPixiv from '_static/images/icon_pixiv.svg';

  import {_, json} from 'svelte-i18n';
</script>

<div id="wrapper">
  <img alt="Profile of Doro-nyong" src="images/profile_doro.jpg" />
  <div>
    <h1>
      <Bullet />{$_('info.introduce.hello')}
    </h1>
    <p>
      {$json('info.introduce.p1')[0]}<br />
      {$json('info.introduce.p1')[1]}
    </p>
    <div id="social-media-links-wrapper">
      <SocialMediaLink
        icon={IconTwitter}
        id={'@doro_nyong_art'}
        href={'https://twitter.com/doro_nyong_art'}
      />
      <SocialMediaLink
        icon={IconPixiv}
        id={'Doro-nyong'}
        href={'https://www.pixiv.net/users/22901382'}
      />
    </div>
    <p>
      {$json('info.introduce.p2')[0]}<br />
      {$json('info.introduce.p2')[1]}
    </p>
    <p>
      {$_('commons.under-construction')}
    </p>
  </div>
</div>

<style lang="scss">
  @import '../../styles/mixin';

  #wrapper {
    font-size: 1rem;

    @include media-tablet {
      text-align: center;
    }

    @include media-desktop-small-only {
      text-align: center;
    }

    @include media-desktop-regular {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: center;
    }

    #social-media-links-wrapper > :global(a:not(:last-child)) {
      @include media-mobile-only {
        display: block;
        margin-bottom: var(--space-s);
      }

      @include media-not-mobile {
        margin-right: var(--space-xl);
      }
    }

    & > img {
      width: 10rem;
      border-radius: 100%;

      transition-duration: var(--time-long);
    }

    & > div {
      @include media-tablet {
        margin-top: var(--space-xl);
      }

      @include media-desktop-small-only {
        margin-top: var(--space-xl);
      }

      & > h1 {
        font-size: 1.5rem;
        margin-bottom: var(--space-s);

        transition-duration: var(--time-long);

        & + p {
          margin-top: var(--space-s);
        }
      }

      & > p {
        margin: var(--space-l) 0;

        transition-duration: var(--time-long);

        &:last-of-type {
          margin-bottom: 0;
        }
      }
    }
  }
</style>
