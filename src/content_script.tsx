import { html2md } from '@powerfulyang/utils/esm';

window.addEventListener('keydown', async (ev) => {
  if ((ev.ctrlKey && ev.altKey) || (ev.metaKey && ev.altKey)) {
    // Selection to html
    const userSelection = window.getSelection();
    if (userSelection) {
      const range = userSelection?.getRangeAt(0);
      const clonedSelection = range.cloneContents();
      // =================
      // cloneContents will not clone the .katex-mathml element
      if (clonedSelection.querySelector('.katex')) {
        const elements = clonedSelection.querySelectorAll('.katex');
        elements.forEach((element) => {
          document.querySelectorAll('.katex-html').forEach((el) => {
            if (el.textContent === element.querySelector('.katex-html')?.textContent) {
              // eslint-disable-next-line no-param-reassign
              element.innerHTML = el.parentElement?.innerHTML || '';
            }
          });
        });
      }
      // =================
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
