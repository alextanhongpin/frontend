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

## Change text color based on brightness of the covered background area


Depending on the brightness of the background color, the text color will either be black or white.

```html
<h1>Hello world</h1>
<script>
  const rgb = [255, 0, 0];

  // Randomly change to showcase updates
  setInterval(setContrast, 1000);

  function setContrast() {
    // Randomly update colours
    rgb[0] = Math.round(Math.random() * 255);
    rgb[1] = Math.round(Math.random() * 255);
    rgb[2] = Math.round(Math.random() * 255);

    // http://www.w3.org/TR/AERT#color-contrast
    const brightness = Math.round(
      (parseInt(rgb[0]) * 299 +
        parseInt(rgb[1]) * 587 +
        parseInt(rgb[2]) * 114) /
        1000
    );
    const textColour = brightness > 125 ? "black" : "white";
    const backgroundColour =
      "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")";

    document.body.style.color = textColour;
    document.body.style.backgroundColor = backgroundColour;
  }
</script>
```
