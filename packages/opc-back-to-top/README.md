# opc-back-to-top Component 👋

![Version](https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000)
![Build Status](https://travis-ci.org/dwyl/esta.svg?branch=master)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/1-Platform/op-components/graphs/commit-activity)


A standardized web component based on Lit element for Red Hat One Platform back to top.

## Usage
Default back-to-top
```html
<opc-back-to-top></opc-back-to-top>
```
- Back-to-top with reveal-at attribute, It reveals back to top once user scrolls upto specified pixels downwards.
```html
<opc-back-to-top reveal-at="200"></opc-back-to-top>
```

- Back-to-top with reveal-at attribute, It reveals back to top once user scrolls upto specified pixels downwards.
```html
<opc-back-to-top reveal-at="200"></opc-back-to-top>
```

```html
<opc-back-to-top></opc-back-to-top>
```

## Slots
- Back-to-top with default slot (optional) where users can pass icon and text if they like.
```html
<opc-back-to-top>
  <button class="rh-text" tabindex="0">
    <svg xmlns='http://www.w3.org/2000/svg' width='20px' height='20px' viewBox='0 0 512 512'>
    <title>ionicons-v5-a</title>
    <polyline points='112 328 256 184 400 328' style='fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px'/>
    </svg>
    Go to Top
  </button>
</opc-back-to-top>
```

## Attributes
**`reveal-at`**
- It reveals back to top once user scrolls upto specified pixels downwards.


## Install

```sh
npm install
```

## Usage

### Install opc-back-to-top

```sh
npm install --save @one-platform/opc-back-to-top 
```

### For VanillaJS
- Import component
```js
import '@one-platform/opc-back-to-top';
```
- Add component in html
```html
<opc-back-to-top>
</opc-back-to-top>
```

### For Angular
- In your app.module include the `CUSTOM_ELEMENTS_SCHEMA` and import the component
```js
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import '@one-platform/opc-back-to-top';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
- Add component in any component html template
```html
<opc-back-to-top>
</opc-back-to-top>
```

### For React
- Import the component in App.js
```js
import '@one-platform/opc-back-to-top';
```

- Add component in any component html render
```html
<opc-back-to-top>
</opc-back-to-top>
```

### Development server

- Run development server

```sh
npm run dev opc-back-to-top
```

### Build

```sh
npm run build opc-back-to-top
```

## Run tests

```sh
npm run test
```

## 🤝 Contributors

👤 **Anjnee K Sharma**(anjnee.k.sharma@gmail.com)
