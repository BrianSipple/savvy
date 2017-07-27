# Extending Locally

## Creating Component Classes

## Overriding Variables

The base Savvy CSS package provides  a collection of CSS variables that you can use for your own needs. But you're free to override them as needed.

Some are meant as a reference -- and for easy portability into your own application.


## Setting up a Base Typography

SavvyCSS offers a base set of font-sizes within its [`typography-variables` module](https://github.com/savvy-css/typography-variables/blob/master/lib/typography-variables.css). However,
outside of a few rules defined in the [`normalize` module](https://github.com/savvy-css/normalize), it remains un-opinionated about how your
typography is actually implemented.

Every application tends to have its own [hierarchy of font sizes and appearances](https://material.io/guidelines/style/typography.html#typography-styles) based upon the elements
it expects to present, and there's often no single system that can be scaled up or down to cover everything.

That said, here's the approach we've found to be the most useful:

First, develop a "core" typographic hierarchy around the sizing of each heading and your body text. This can be done by targeting the `body` and the `h*` tags directly in a file such as `_typography.css`.

From there, if you expect to have larger or smaller elements as part of your design, try to determine what patterns these elements represent (for example, a [_caption_](http://www.newyorker.com/cartoons), a [_headline_](https://img.huffingtonpost.com/asset/581b42ac150000b700531761.jpeg?ops=scalefit_600_noupscale), or a set of [footer links](https://d1avok0lzls2w.cloudfront.net/img_uploads/footer-links-3.gif)) and define this pattern with a component style. The idea here is that these are _special_ parts of your design that are _supposed_ to break free from the standard typographic rhythm of headings and paragraphs. Trust in semantic HTML by default, but take more control with classes where it's appropriate.
