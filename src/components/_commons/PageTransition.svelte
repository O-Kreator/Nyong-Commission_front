<script>
  import {cubicInOut} from 'svelte/easing';

  let CONST_DURATION = 500;

  const transitionIn = () => ({
    duration: CONST_DURATION,
    delay: 0,
    easing: cubicInOut,
    css: (t) => `opacity: ${t}`,
  });

  const transitionOut = () => ({
    duration: CONST_DURATION,
    delay: 0,
    easing: cubicInOut,
    css: (t) => `opacity: ${t}`,
  });
</script>

<div in:transitionIn out:transitionOut>
  <slot />
</div>
