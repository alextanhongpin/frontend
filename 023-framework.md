# How to build a framework


The common logic for a UI is
- render
- bind on mount 
- unbind on mount

```js
function Component(el, data) {
  const render = () => {
    el.innerHTML = ...
    bind()
  }
  const bind = () => {}
  const unbind = () => {}
  return unbind
}
```
