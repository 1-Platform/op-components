# opc-menu-drawer Component 👋

![Version](https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000)
![Build Status](https://travis-ci.org/dwyl/esta.svg?branch=master)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/1-Platform/op-components/graphs/commit-activity)

Web component based on lit-html

## Prerequisites
<!-- Add if any -->

## Usage
<!-- Add usage here -->

```html
<opc-menu-drawer></opc-menu-drawer>
```

## Slots
<!-- Add Slots here -->

## Attributes
<!-- Add attributes here -->

## Themes
<!-- Change colors here -->

| color   | hex                                                              |
|---------|------------------------------------------------------------------|
| default | <span class="readme-color-preview" style="--bg:#ffffff"></span> #ffffff |

## Install

```sh
npm install
```

## Usage

### Install opc-menu-drawer

```sh
npm install --save @one-platform/opc-menu-drawer 
```

### For VanillaJS
- Import component
```js
import '@one-platform/opc-menu-drawer/dist/opc-menu-drawer';
```
- Add component in html
```html
<opc-menu-drawer>
</opc-menu-drawer>
```

### For Angular
- In your app.module include the `CUSTOM_ELEMENTS_SCHEMA` and import the component
```js
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import '@one-platform/opc-menu-drawer/dist/opc-menu-drawer';

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
<opc-menu-drawer>
</opc-menu-drawer>
```

### For React
- Import the component in App.js
```js
import '@one-platform/opc-menu-drawer/dist/opc-menu-drawer';
```

- Add component in any component html render
```html
<opc-menu-drawer>
</opc-menu-drawer>
```

### Development server

- Run development server

```sh
npm run dev opc-menu-drawer
```

### Build

```sh
npm run build opc-menu-drawer
```

## Run tests

```sh
npm run test
```

## 🤝 Contributors

👤 **akhilmhdh**
