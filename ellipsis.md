## Ellipsis in Chrome

```css
.ellipsis {
  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
```

## CSS Single line safari

For Safari, the approach above does not work. One solution is to override the CSS when the browser detects that it is Safari (through media query) and apply the following styling:

```css
.ellipsis {
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  display: -webkit-box;
   white-space: normal;
}
```

## Media query for Safari only
```css
@media screen and (min-color-index:0) and(-webkit-min-device-pixel-ratio:0)
{ @media {
    /*
      Define here the CSS styles applied only to Safari browsers
      (any version and any device)
     */
}}
```

Working example:

```css
  @media screen and (min-color-index: 0) and(-webkit-min-device-pixel-ratio:0) {
    @media {
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      display: -webkit-box;
      white-space: normal;
    }
  }
  @media not all and (min-resolution: 0.001dpcm) {
    @media {
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      display: -webkit-box;
      white-space: normal;
    }
  }
```

## Multiline ellipsis
```css
.multine-ellipsis {
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
}
```
