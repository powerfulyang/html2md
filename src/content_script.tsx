import { html2md } from '@powerfulyang/utils/esm';

window.addEventListener('keydown', async (ev) => {
  if ((ev.ctrlKey && ev.altKey) || (ev.metaKey && ev.altKey)) {
    // Selection to html
    const userSelection = window.getSelection();
    if (userSelection) {
      const range = userSelection?.getRangeAt(0);
      const clonedSelection = range.cloneContents();
      const div = document.createElement('div');
      div.appendChild(clonedSelection);
      const html = div.innerHTML;
      const md = await html2md(html);
      // Copy to clipboard, don't use navigator.clipboard.writeText
      const textarea = document.createElement('textarea');
      textarea.value = md;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
  }
});
