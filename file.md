# Save as JSON

```js
function saveAsJSON(filename = 'data.json', dataObjToWrite) {
  const blob = new Blob([JSON.stringify(dataObjToWrite, null, 2)], {
    type: 'text/json',
  });
  const link = document.createElement('a');

  link.download = filename;
  link.href = window.URL.createObjectURL(blob);
  link.dataset.downloadurl = ['text/json', link.download, link.href].join(':');

  const evt = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true,
  });

  link.dispatchEvent(evt);
  link.remove();
}
```
