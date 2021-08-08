<script>
  import Elizabot from '$lib/components/bots/Elizabot.svelte';

  async function searchTerm() {}
</script>

<!-- markup (zero or more items) goes here -->
<body>
  <!-- markup (zero or more items) goes here -->
  <ion-header>
    <a href="/cube/sandbox">Sandbox</a>
    <a href="/cube">Cube</a>
    <a href="/cube/new">New</a>
    <a href="/" class="fixed right-0">Back Original</a>
  </ion-header>

  <slot><!-- optional fallback --></slot>
</body>

<style>
  /* your styles go here */
</style>
