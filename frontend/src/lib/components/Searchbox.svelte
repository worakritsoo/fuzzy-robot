<script lang="ts">
  import type { Post } from '$lib/types';
  export let posts: Post[];
  let q = '';
  import Fuse from 'fuse.js';
  import { postStore } from '$lib/postStore';
  const fuse = new Fuse(posts, { keys: ['title', 'content'] });
  $: $postStore = q ? fuse.search(q).map((x) => x.item) : posts;
  let style = true;
</script>

<input
  type="search"
  placeholder="พิมพ์คำเพื่อค้นหา"
  bind:value={q}
  class="items-center text-3xl font-bold outline-none rounded-md shadow-md" />
