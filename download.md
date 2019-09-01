## Downloading data as json

Creates a invisible link to trigger downloading data as json.

```js
const a = document.createElement('a')
a.setAttribute('href', 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(data)))
a.setAttribute('download', 'data.json')
a.onclick = () => $(a).remove()
a.click()
```
