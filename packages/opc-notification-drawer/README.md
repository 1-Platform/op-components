# opc-notification-drawer Component 👋

![Version](https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000)
![Build Status](https://travis-ci.org/dwyl/esta.svg?branch=master)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/1-Platform/op-components/graphs/commit-activity)

Web component based on lit-html

## Prerequisites
<!-- Add if any -->

## Usage
<!-- Add usage here -->

```html
<opc-notification-drawer></opc-notification-drawer>
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

### Install opc-notification-drawer

```sh
npm install --save @one-platform/opc-notification-drawer 
```

### For VanillaJS
- Import component
```js
import '@one-platform/opc-notification-drawer/dist/opc-notification-drawer';
```
- Add component in html
```html
<opc-notification-drawer>
</opc-notification-drawer>
```

### For Angular
- In your app.module include the `CUSTOM_ELEMENTS_SCHEMA` and import the component
```js
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import '@one-platform/opc-notification-drawer/dist/opc-notification-drawer';

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
<opc-notification-drawer>
</opc-notification-drawer>
```

### For React
- Import the component in App.js
```js
import '@one-platform/opc-notification-drawer/dist/opc-notification-drawer';
```

- Add component in any component html render
```html
<opc-notification-drawer>
</opc-notification-drawer>
```

### Development server

- Run development server

```sh
npm run dev opc-notification-drawer
```

### Build

```sh
npm run build opc-notification-drawer
```

## Run tests

```sh
npm run test
```

## 🤝 Contributors

👤 **akhilmhdh**
