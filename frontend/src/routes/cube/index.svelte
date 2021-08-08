<script context="module">
  export async function load({ fetch }) {
    const res = await fetch(API + '/cubes');
    return { props: { cubes: await res.json() } };
  }
</script>

<script>
  export let cubes = [];
  import Crud from '$lib/components/Crud.svelte';
  import { API } from '$lib/Env';
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

<Crud items={cubes} />
