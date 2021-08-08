<script>
  import Elizabot from '$lib/components/bots/Elizabot.svelte';
  import Hoverable from '$lib/components/Hover.svelte';
  import { time } from '$lib/postStore';
  import New from './new.svelte';
</script>

<h1>The time is {$time.toLocaleTimeString()}</h1>
<Hoverable let:hovering={active}>
  <div class:active>
    {#if active}
      <ion-card>
        <ion-card-header>
          <ion-card-subtitle>Awesome Subtitle</ion-card-subtitle>
          <ion-card-title>Awesome Title</ion-card-title>
        </ion-card-header>
        <ion-card-content> Awesome content </ion-card-content>
      </ion-card>
    {:else}
      <p>Hover over me!</p>
    {/if}
  </div>
</Hoverable>
<Elizabot />

<style>
  div {
    padding: 1em;
    margin: 0 0 1em 0;
    background-color: #eee;
  }

  .active {
    @apply bg-purple-400;
  }
</style>
