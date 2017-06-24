# Using the Grid

A core part of Savvy CSS's layout system is the [Grid Object module](https://github.com/savvy-css/grid-objects).
This provides of set of helpers to easily and declaratively markup grids and nested grid cells using Flexbox.

Savvy's grid helpers integrate many of the concepts outlined in [Phillip Walton's "Solved by Flexbox" grid demo](https://philipwalton.github.io/solved-by-flexbox/demos/grids/) and the demo at [flexboxgrid.com](http://flexboxgrid.com/). 

From a **relationship perspective**, adding the `o-grid` class to an element is analogous to declaring it as a "flex parent", and adding the `o-grid-cell` class is analogous to declaring it as a "flex child" of its container element. (Naturally, these can be even be mixed together to enable nested gridding.). 

From a **sizing perspective** `o-grid-cell`s can have additional modifier classes to control things like `flex-basis` size or offset size. These sizes corresponded to a number of "columns" spanned 
along a 12-column grid. Consider the following example:

```html
<div class="o-flex-grid">
  <div class="o-grid-cell o-grid-cell--3"></div>
  <div class="o-grid-cell o-grid-cell--6"></div>
  <div class="o-grid-cell o-grid-cell"></div>
</div>
```

  - The first `.o-grid-cell` will span `3/12` of the row space
  - The second `.o-grid-cell` will span `6/12` of the row space
  - The third `.o-grid-cell` will span to _at most_ the rest of the remaining space, but
  will start at only spanning the width of its content.


  ---

  **TODO**: Link to Savvy Grid demo