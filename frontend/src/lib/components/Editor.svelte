<script>
  import { tick } from 'svelte';
  import marked from 'marked';
  export let content = `
# H1 heading

## H2 heading

### H3 heading

--------

**bold text**

*italicized text*

--------

1. First item
2. Second item
3. Third item

- First item
- Second item
- Third item

[TOC](#H1)
`;
  async function handleKey(event) {
    if (event.ctrlKey && event.key === '.') {
      event.preventDefault();
      // @ts-ignore
      const { selectionStart, selectionEnd, value } = this;
      const selection = value.slice(selectionStart, selectionEnd);
      const replacement = /[a-z]\w+/g.test(selection)
        ? `![link](${selection})`
        : selectionEnd;

      content =
        value.slice(0, selectionStart) +
        replacement +
        value.slice(selectionEnd);

      await tick();
      this.selectionStart = selectionStart;
      this.selectionEnd = selectionEnd;
    }

    if (event.ctrlKey && event.key === '/') {
      event.preventDefault();
      // @ts-ignore
      const { selectionStart, selectionEnd, value } = this;
      const selection = value.slice(selectionStart, selectionEnd);
      const replacement = /[a-z]\w+/g.test(selection)
        ? `[link](${selection})`
        : selectionEnd;

      content =
        value.slice(0, selectionStart) +
        replacement +
        value.slice(selectionEnd);

      await tick();
      this.selectionStart = selectionStart;
      this.selectionEnd = selectionEnd;
    }
    if (event.key === 'Tab') {
      event.preventDefault();
      // @ts-ignore
      const { selectionStart, selectionEnd, value } = this;
      const selection = value.slice(selectionStart, selectionEnd);
      const replacement = /[a-z]/.test(selection)
        ? selection.toUpperCase()
        : selection.toLowerCase();

      content =
        value.slice(0, selectionStart) +
        replacement +
        value.slice(selectionEnd);

      await tick();
      this.selectionStart = selectionStart;
      this.selectionEnd = selectionEnd;
    }
  }

  $: markdown = marked(content);

  // your script goes here
  let color;
  function action(node) {
    node.classList.add('red');
  }
</script>

<div class="mx-12">
  <header class="header">
    <h1 class="header-title">New</h1>
  </header>
  <div class="markdown-editor">
    <div class="left-panel">
      <textarea bind:value={content} class="source" on:keydown={handleKey} />
    </div>

    <div class="right-panel">
      <div class="prose prose-xl">
        <div class="output">{@html markdown}</div>
      </div>
    </div>
  </div>
</div>

<!-- markup (zero or more items) goes here -->
<style lang="postcss">
  .header-title {
    margin: 0;
    color: #fff;
  }
  .markdown-editor {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
  }
  .left-panel,
  .right-panel {
    width: 50%;
    border: solid 1px black;
    height: 85vh;
    background: #ffffff;
  }
  .right-panel {
    overflow: auto;
  }
  .source {
    border: none;
    width: 100%;
    height: 100%;
    background: #001628;
    color: #83ba52;
  }
  .source:focus {
    outline: none;
  }
  .output {
    width: 100%;
    padding: 0 2em;
  }
  /* your styles go here */
</style>
