
<h3 align="center">v-goto</h3>

<p align="center">
  A <strong>Vue</strong> plugin make route simple and easier, <br>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/v-goto"><img src="https://img.shields.io/npm/v/v-goto.svg"></a>
  <a href="https://mit-license.org/"><img src="https://img.shields.io/badge/license-MIT-brightgreen.svg"></a>
<a href="https://app.fossa.io/projects/git%2Bgithub.com%2Fhomeranil%2Fv-goto?ref=badge_shield" alt="FOSSA Status"><img src="https://app.fossa.io/api/projects/git%2Bgithub.com%2Fhomeranil%2Fv-goto.svg?type=shield"/></a>
  <a href="https://www.npmjs.com/package/v-goto"><img src="https://img.shields.io/npm/dy/v-goto.svg"></a>
</p>

<br><br><br><br><br>

## Examples and Documentation

## Installation

```
npm i v-goto -S
```

Include and install plugin in your `main.js` file.

```js
import Vue from 'vue'
import goTo from 'v-goto'

// install plugin
Vue.use(goTo)
```

then you can use in the components

```
<button @click="$goto(routeName, Params)">Click!</button>
```
