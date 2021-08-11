<script>
  import Editor from '$lib/components/Editor.svelte';
  import Reviews from '$lib/components/Reviews.svelte';
  import { tick } from 'svelte';
  let content;
  var myRe = new RegExp('d(b+)d', 'g');
  var myArray = myRe.exec('cdbbdbsbz');
  console.log(myArray);
  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
  }

  const regpass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
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
      const replacement = /[*]\w+/g.test(selection)
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
</script>

<Editor />
<div class="m-4">
  <!-- markup (zero or more items) goes here -->
  <div class="prose prose-sm flex w-full">
    <textarea
      on:keydown={handleKey}
      class="flex-1"
      name="content"
      bind:value={content}
      id=""
      cols="30"
      rows="10" />
    <div class="flex-1">
      <Reviews bind:content />
    </div>
  </div>
</div>
