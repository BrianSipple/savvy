# Namespaces


Savvy CSS is designed to offer an intuitive syntax based around
the notion of _namespaces_ &mdash; letter-coded prefixes that reflect
the category of a rule's concern.

[This article by Harry Roberts on CSS Wizardry](http://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/)
offers a tremendous breakdown of namespaces. But here's how they're
implemented in Savvy:

- `o`: [Object Patterns](https://github.com/savvy-css/object-patterns)

  - Signifies that something is an Object, and that it may be used
  in any number of unrelated contexts to the one you
  can currently see it in. Modifications to these types of class could
  potentially have knock-on effects in a lot of other
  unrelated places. So tread carefully.

- `u`: [Utilities](https://github.com/savvy-css/utilities)
  - Signifies that this class is a Utility class.
  It has a very specific role (often providing only one declaration)
  and should not be bound onto or changed.
  It can be reused and is not tied to any specific piece of UI.

- `g`: [Garnishes](https://github.com/savvy-css/garnishes)
  - Similar to utilities, but focused on outer- or "skin"-level
  styles as opposed to structural/layout styles. Examples include
  colors and font settings.


## Local App Namespaces

The following namespaces aren't provided by SavvyCSS directly, but we've found
them to be useful alongside the framework for the specific structure of our own
applications:

- `c`: Components
  - See our guide on [Extending Savvy Locally](https://github.com/savvy-css/savvy/doc/guides/extending-locally.md) for more.

- `p`: Pages
  - Styling concerns that are specific to a particular "page" of the applications. Ideally,
  these should only be needed if a style rule doesn't fit the concern of a specific component
  class or Savvy class.