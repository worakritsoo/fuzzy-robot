<script>
  // your script goes here

  import Login from '$lib/components/Login.svelte';
  import { user } from '$lib/user';
</script>

{#if $user}
  <div
    class="animate container  transition-all grid place-items-center shadow-md mx-4 w-full">
    <h1>
      {$user['username']}
    </h1>
    {$user['displayName']}

    {#each $user['profile'].split(',') as item}
      <p>{item}</p>
      <br />
    {/each}
  </div>
{:else}
  <Login />
{/if}

<!-- Button to open the modal login form -->
<style>
  /* Add Zoom Animation */
  .animate {
    -webkit-animation: animatezoom 0.6s;
    animation: animatezoom 0.6s;
  }

  @-webkit-keyframes animatezoom {
    from {
      -webkit-transform: scale(0);
    }
    to {
      -webkit-transform: scale(1);
    }
  }

  @keyframes animatezoom {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
</style>
