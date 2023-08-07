# Equal (NodeJS)

[![License](https://img.shields.io/badge/License-MIT-808080?style=flat-square "License")](./LICENSE.md)

|  | **Heat** | **Release - Latest** | **Release - Pre** |
|:-:|:-:|:-:|:-:|
| [![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=ffffff&style=flat-square "GitHub")](https://github.com/hugoalh-studio/equal-nodejs) | [![GitHub Stars](https://img.shields.io/github/stars/hugoalh-studio/equal-nodejs?label=&logoColor=ffffff&style=flat-square "GitHub Stars")](https://github.com/hugoalh-studio/equal-nodejs/stargazers) \| ![GitHub Total Downloads](https://img.shields.io/github/downloads/hugoalh-studio/equal-nodejs/total?label=&style=flat-square "GitHub Total Downloads") | ![GitHub Latest Release Version](https://img.shields.io/github/release/hugoalh-studio/equal-nodejs?sort=semver&label=&style=flat-square "GitHub Latest Release Version") (![GitHub Latest Release Date](https://img.shields.io/github/release-date/hugoalh-studio/equal-nodejs?label=&style=flat-square "GitHub Latest Release Date")) | ![GitHub Latest Pre-Release Version](https://img.shields.io/github/release/hugoalh-studio/equal-nodejs?include_prereleases&sort=semver&label=&style=flat-square "GitHub Latest Pre-Release Version") (![GitHub Latest Pre-Release Date](https://img.shields.io/github/release-date-pre/hugoalh-studio/equal-nodejs?label=&style=flat-square "GitHub Latest Pre-Release Date")) |
| [![NPM](https://img.shields.io/badge/NPM-CB3837?logo=npm&logoColor=ffffff&style=flat-square "NPM")](https://www.npmjs.com/package/@hugoalh/equal) | ![NPM Total Downloads](https://img.shields.io/npm/dt/@hugoalh/equal?label=&style=flat-square "NPM Total Downloads") | ![NPM Latest Release Version](https://img.shields.io/npm/v/@hugoalh/equal/latest?label=&style=flat-square "NPM Latest Release Version") | ![NPM Latest Pre-Release Version](https://img.shields.io/npm/v/@hugoalh/equal/pre?label=&style=flat-square "NPM Latest Pre-Release Version") |

A NodeJS module porting the function `equal` from "[Deno - Standard Library - Assert](https://deno.land/std/assert/equal.ts?s=equal)".

## 📓 Documentation

### Getting Started

- NodeJS ^ v12.20.0 \|\| ^ v14.15.0 \|\| >= v16.13.0

```sh
npm install @hugoalh/equal
```

```js
import equal from "@hugoalh/equal";// Default Import
```

### API

```ts
function equal(a: unknown, b: unknown): boolean;
```

### Example

- ```js
  equal([1, 2, 3], [1, 2, 3]);
  //=> true
  ```
- ```js
  equal([1, 2, 3], [1, [2], 3]);
  //=> false
  ```
