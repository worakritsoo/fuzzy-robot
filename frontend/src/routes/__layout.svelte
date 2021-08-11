<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit';

  export const load: Load = async ({ fetch }) => {
    const res = await fetch('/posts');
    const data = await res.json();

    return { props: { posts: data } };
  };
</script>

<script>
  import '../app.postcss';
  import { onMount } from 'svelte';
  import { jwt, user } from '$lib/user';
  import { API } from '$lib/Env';
  import { token } from '$lib/postStore';
  import Login from '$lib/components/Login.svelte';
  import Searchbox from '$lib/components/Searchbox.svelte';
  import { goto } from '$app/navigation';
  export let posts = [];
  let loading = true;

  onMount(async () => {
    // Check if 'token' exists in localStorage
    if (!localStorage.getItem('token')) {
      loading = false;
      return { props: { user: null } };
    }

    // Fetch the user from strapi
    const res = await fetch(API + '/auth/me', {
      headers: { Authorization: 'Bearer ' + $jwt },
    });
    loading = false;
    if (res.ok) {
      $user = await res.json();
    }
  });

  async function logout() {
    $user = null;
  }
  function handleKey(e) {
    // console.log(e.code);
    // console.log(e.ctrlKey);
    if (e.code === 'Slash' && e.ctrlKey) {
      goto('/cube');
    }
  }
</script>

<body>
  <nav class="bg-white border-b border-gray-500 py-6 px-4 w-full">
    <div class="flex items-center justify-between mx-auto">
      <a href="/" class="font-bold no-underline">
        <ion-chip color="tertiary" mode="ios" outline="true">
          <ion-label>PBOX</ion-label>
          <ion-icon name="cube" />
        </ion-chip>
      </a>
      <Searchbox {posts} />
      <section>
        {#if !$user}
          <a href="/auth" class="font-mono no-underline">ลงชื่อเข้าใช้</a>
        {:else}
          <div class="md:flex md:flex-cols">
            <a href="/posts/new" class="font-mono no-underline mr-3">สร้าง</a>
            <a href="/auth">
              <ion-chip color="tertiary" mode="ios" outline="true">
                <ion-avatar>
                  <img src={$user['photoURL']} />
                </ion-avatar>
              </ion-chip>
              <span class="font-mono text-gray-500">{$user.username}</span>
            </a>
          </div>
          <button on:click={logout}>🔓</button>
        {/if}
      </section>
    </div>
  </nav>
  <ion-content>
    {#if $user}
      <slot />
    {:else}
      <Login />
    {/if}
  </ion-content>
</body>
<svelte:window on:keydown={handleKey} />
