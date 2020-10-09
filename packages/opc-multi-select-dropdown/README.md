# opc-multi-select-dropdown Component 👋

![Version](https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000)
![Build Status](https://travis-ci.org/dwyl/esta.svg?branch=master)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/1-Platform/op-components/graphs/commit-activity)

multi-select dropdown web component based on lit element will be used in another application as multiselect dropdown.

## Prerequisites
<!-- Add if any -->

## Usage
<!-- Add usage here -->

```html
<opc-multi-select-dropdown></opc-multi-select-dropdown>
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

### Install opc-multi-select-dropdown

```sh
npm install --save @one-platform/opc-multi-select-dropdown 
```

### For VanillaJS
- Import component
```js
import '@one-platform/ opc-multi-select-dropdown/dist/ opc-multi-select-dropdown';
```
- Add component in html
```html
< opc-multi-select-dropdown>
</ opc-multi-select-dropdown>
```

### For Angular
- In your app.module include the `CUSTOM_ELEMENTS_SCHEMA` and import the component
```js
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import '@one-platform/ opc-multi-select-dropdown/dist/ opc-multi-select-dropdown';

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
< opc-multi-select-dropdown>
</ opc-multi-select-dropdown>
```

### For React
- Import the component in App.js
```js
import '@one-platform/ opc-multi-select-dropdown/dist/ opc-multi-select-dropdown';
```

- Add component in any component html render
```html
< opc-multi-select-dropdown>
</ opc-multi-select-dropdown>
```

### Development server

- Run development server

```sh
npm run dev opc-multi-select-dropdown
```

### Build

```sh
npm run build opc-multi-select-dropdown
```

## Run tests

```sh
npm run test
```

## 🤝 Contributors

👤 **Anjnee K Sharma**
