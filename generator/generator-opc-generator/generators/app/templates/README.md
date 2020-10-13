# <%= componentName %> Component 👋

![Version](https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000)
![Build Status](https://travis-ci.org/dwyl/esta.svg?branch=master)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/1-Platform/op-components/graphs/commit-activity)

<%= componentDescription %>

## Prerequisites
<!-- Add if any -->

## Usage
<!-- Add usage here -->

```html
<<%= componentName %>></<%= componentName %>>
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

### Install <%= componentName %>

```sh
npm install --save @one-platform/<%= componentName %> 
```

### For VanillaJS
- Import component
```js
import '@one-platform/<%= componentName %>/dist/<%= componentName %>';
```
- Add component in html
```html
<<%= componentName %>>
</<%= componentName %>>
```

### For Angular
- In your app.module include the `CUSTOM_ELEMENTS_SCHEMA` and import the component
```js
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import '@one-platform/<%= componentName %>/dist/<%= componentName %>';

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
<<%= componentName %>>
</<%= componentName %>>
```

### For React
- Import the component in App.js
```js
import '@one-platform/<%= componentName %>/dist/<%= componentName %>';
```

- Add component in any component html render
```html
<<%= componentName %>>
</<%= componentName %>>
```

### Development server

- Run development server

```sh
npm run dev <%= componentName %>
```

### Build

```sh
npm run build <%= componentName %>
```

## Run tests

```sh
npm run test
```

## 🤝 Contributors

👤 **<%= authorName %>**
