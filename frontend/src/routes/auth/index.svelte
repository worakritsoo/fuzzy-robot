<script>
  // your script goes here

  import Login from '$lib/components/Login.svelte';
  import { user } from '$lib/user';
  import { children } from 'svelte/internal';
  let routes = { parent: '/', children: ['/page', '/cube'] };
  let navigation = '/page/team';
  navigation.split('/');
</script>

{#if routes.parent}
  {routes.parent}
{/if}
{#if routes.children}
  {routes.children}
  {#each routes.children as child}
    <!-- content here -->
    <a href={child}>{child}</a>
  {/each}
{/if}

<div class="card">
  <details>
    <summary class="list-none shadow-md max-w-max">{navigation} </summary>
  </details>
</div>

{#if $user}
  <div class="grid place-items-center">
    <div
      class="animate text-center transition-all shadow-md max-w-md mt-10 ring-2">
      <h1>
        {$user['username']}
      </h1>
      {$user['displayName']}

      {#each $user['profile'].split(',') as item}
        <p>{item}</p>
        <br />
      {/each}
    </div>
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
