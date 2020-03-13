# Disable auto-scroll

```js
if ('scrollRestoration' in history) {
  // Back off, browser, I got this...
  history.scrollRestoration = 'manual';
}
```


## Apply smooth scrolling

Css:
```css
  scroll-behavior: smooth;
```

Js:
```js
// Horizontal scrolling example.
document.body.scrollTo({
  behaviour: 'smooth',
  left,
  top: 0
})
```
Html:
```html
&laquo;
&raquo;
```

