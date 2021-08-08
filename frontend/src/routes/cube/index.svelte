<script>
  import { onMount } from 'svelte';

  let time = new Date();

  // these automatically update when `time`
  // changes, because of the `$:` prefix
  $: hours = time.getHours();
  $: minutes = time.getMinutes();
  $: seconds = time.getSeconds();

  onMount(() => {
    const interval = setInterval(() => {
      time = new Date();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  let pomo = 0;
  function start() {}
  let endTime = 30;

  function pomodoro(min) {}
  $: if (seconds) {
    pomo = pomo += 1;
  }
</script>

<button on:click={() => (pomo = 0)}>Start</button>
<header>Cube</header>

<div class="shadow-md grid h-full">
  {pomo}
</div>

<style lang="postcss">
  header {
    @apply text-center p-4 text-2xl font-bold;
  }
</style>
