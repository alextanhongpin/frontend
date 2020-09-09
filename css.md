# Normalize styles

```bash
$ yarn add normalize.css

# In your app.js
# import 'normalize.css'
```

# Box-sizing

Why do we need box-sizing? 

The box-sizing property allows us to include the padding and border in an element's total width and height.

If you set box-sizing: border-box; on an element, padding and border are included in the width and height.

```css
html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

img { box-sizing: content-box; }
```
