
```css
<style>
@scope {
  :scope {
    container-type: inline-size;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-column-gap: 1rem;
    align-items: center;
  }

    /* container query is not usable here. use media query instead. */
  @media (width < 480px) {
    :scope {
      grid-template-columns: 1fr;
      grid-row-gap: 1rem;
      justify-items: center;
      text-align: center;
    }
  }
}
</style>
```
