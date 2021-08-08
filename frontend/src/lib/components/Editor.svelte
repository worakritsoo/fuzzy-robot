<script>
  export let source = `
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

  import marked from 'marked';
  $: markdown = marked(source);

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
      <textarea bind:value={source} class="source" />
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
