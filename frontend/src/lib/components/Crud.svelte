<!-- https://eugenkiss.github.io/7guis/tasks#crud -->
<script>
  import { browser } from '$app/env';

  import { API } from '$lib/Env';
  import { jwt, user } from '$lib/user';

  export let items = [];
  console.log(items);
  let prefix = '';
  let name = '';
  let detail = '';
  let content = '';
  let id = '';
  let i = 0;

  $: filteredItems = prefix
    ? items.filter((item) => {
        const name = `${item.detail}, ${item.name}`;
        return name.toLowerCase().startsWith(prefix.toLowerCase());
      })
    : items;

  $: selected = filteredItems[i];

  async function create() {
    let item = { name: name, detail: detail, content: content };
    const res = await fetch(API + '/cubes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
      body: JSON.stringify(item),
    });
    if (res.ok) {
      console.log(await res.json());
      items = items.concat({ name, detail });
      i = items.length - 1;
      name = detail = '';
    }
  }

  function update() {
    selected.name = name;
    selected.detail = detail;
    items = items;
  }

  async function remove() {
    const res = await fetch(API + '/cubes/' + selected.id, {
      method: 'DELETE',
      headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
    });
    if (res.ok) {
      delete items[i];
      items = items.flat();
      console.log(await res.json());
    }
  }

  import marked from 'marked';
  import { onMount } from 'svelte';
  $: mark = marked(content || '');

  function handleKey(e) {
    if (e.key === 'Escape') {
      e.target.value = '';
    }
    if (e.key === '/') {
      e.target.value += 'Hello';
    }
    if (e.key === '1') {
      e.target.value += '[link]()';
    }
  }
</script>

<svelte:head />
<ion-searchbar
  placeholder="Search"
  inputmode="search"
  type="search"
  on:change={(ev) => console.log(ev)}
  debounce="250"
  show-cancel-button="focus" />
<div class="buttons">
  <ion-button on:click={create} disabled={!name || !detail}>create</ion-button>
  <ion-button on:click={update} disabled={!name || !detail || !selected}
    >update</ion-button>
  <ion-button on:click={remove} disabled={!selected}>delete</ion-button>
</div>
<div class="grid grid-cols-3">
  <select bind:value={i} size={5}>
    {#each filteredItems as person, i}
      <option value={i}>{person.name}, {person.detail}</option>
    {/each}
  </select>
  <div class="details">
    <ion-card>
      <input
        type="text"
        bind:value={name}
        class="outline-none border-b-2 w-full focus-within:border-purple-400" />
      <input
        type="text"
        bind:value={detail}
        class="outline-none border-b-2 w-full focus-within:border-purple-400" />
      <textarea
        bind:value={content}
        id=""
        cols="30"
        rows="10"
        class="w-full outline-none" />
    </ion-card>
  </div>
  <div id="editor" />
  <div class="preview prose prose-lg">
    <h1>
      {name}
    </h1>
    {@html mark}
  </div>
</div>

<style>
  * {
    font-family: inherit;
    font-size: inherit;
  }

  input {
    display: block;
    margin: 0 0 0.5em 0;
  }

  select {
    float: left;
    margin: 0 1em 1em 0;
    width: 14em;
  }

  .buttons {
    clear: both;
  }
</style>
