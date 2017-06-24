# Savvy CSS

[![Latest NPM release][npm-badge]][npm-badge-url]
![Download Count All-Time][download-count-badge]
[![License][license-badge]][license-badge-url]
[![Dependencies][dependencies-badge]][dependencies-badge-url]
[![Dev Dependencies][devDependencies-badge]][devDependencies-badge-url]

_A Lightweight & Highly-Composable Modular CSS Framework_.

## Usage 

### Installation

```shell
yarn add --dev @savvy-css/savvy
```

### Getting Started

This project includes _all_ of the modules that comprise Savvy CSS. You can install it using the command above.
(Our examples use [`yarn`](https://yarnpkg.com), but `npm` will also do.)

For more modular usage, you can also install [individual packages](https://www.npmjs.com/org/savvy-css).

```shell
yarn add --dev @savvy-css/utilities @savvy-css/garnishes
```

## Design Goals

The _Savvy_ approach to CSS favors:

- Expressivity: Classes that communicate visual styling.

- Separation of Concerns: Clearly defined ["namespace" prefixes](./doc/architecture/namespaces.md) to indicate the kind of effect a class 
is trying to have.

- Utility: Focused classes that keep CSS [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself).

- Reusability & Maintenance: A common (i.e.: composition-based) approach for styling basic _and_ more-sophisticated components.

- Responsive design: Lightweight styles that assume small-screen (i.e.: mobile) interfaces as their default.

- Learnability: Designing systems that are easy for developers and designers to learn and use.

- Performance: Delivering a super-small amount of CSS to devices, browsers, and users.

- Adherence to the [principles of motion design. (More on this coming soon!)

Check out the[documentation folder](./doc) for more details.

## Benefits

- Smaller, Simpler, DRY CSS... which stays that way thanks to its composability
- Easier layout refactoring and experimentation
- Designed for scalability
- Designed for portability (contribute to the project directly... or fork it as the starting point for your own)
- Clean foundational defaults for HTML elements



[npm-badge]: https://img.shields.io/npm/v/@savvy-css/savvy.svg
[npm-badge-url]: https://www.npmjs.com/package/@savvy-css/savvy
[download-count-badge]: https://img.shields.io/npm/dt/@savvy-css/savvy.svg
[license-badge]: https://img.shields.io/npm/l/@savvy-css/savvy.svg
[license-badge-url]: ./LICENSE
[dependencies-badge]: https://img.shields.io/david/savvy-css/savvy.svg
[dependencies-badge-url]: https://david-dm.org/savvy-css/savvy
[devDependencies-badge]: https://img.shields.io/david/dev/savvy-css/savvy.svg
[devDependencies-badge-url]: https://david-dm.org/savvy-css/savvy#info=devDependencies