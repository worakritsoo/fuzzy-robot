<script>
  export let content = '';
  import marked from 'marked';

  $: markdown = marked(content);
</script>

<div class="markdown prose prose-xl">
  {@html markdown}
</div>

<style>
</style>
