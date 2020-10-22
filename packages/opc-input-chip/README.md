# opc-input-chip Component 👋

![Version](https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000)
![Build Status](https://travis-ci.org/dwyl/esta.svg?branch=master)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/1-Platform/op-components/graphs/commit-activity)

Web component based on Lit Element for input chip filed

## Usage

### Install opc-input-chip
```sh
npm install --save @one-platform/opc-input-chip 
```

### For VanillaJS
- Import component
```js
  import '@one-platform/opc-input-chip';
```

- Add component in html
```html
  <opc-input-chip id="myInputChip"></opc-input-chip>
```

- Using the default chips in js using the attribute ```chips```
```js
  const myInputChipRef = document.querySelector('#myInputChip'); 
  myInputChipRef.chips = [
    { id: 1, name: 'Test chip', isRemovable: true }
  ];
```

### For Angular
- In your app.module include the `CUSTOM_ELEMENTS_SCHEMA` and import the component
```js
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import '@one-platform/opc-input-chip';

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
  <opc-input-chip chips="{{ MockChips }}"></opc-input-chip>
```

### For React
- Import the component in App.js
```js
  import '@one-platform/opc-input-chip';
```

- Add component in any component html render
```html
  <opc-input-chip chips={this.state.MockChips}></opc-input-chip>
```
---

## Attributes
### chips
- Input: Array of Object with type signature as ```{ id: number, name: string, isRemovable: Boolean }```
  - Example
  ```js
  const myInputChipRef = document.querySelector('#myInputChip'); 
  myInputChipRef.chips = [
    { id: 1, name: 'Test chip', isRemovable: true }
  ];
  ```

## Event Emitters
### opc-input-chip:added
- `opc-input-chip:added` event is fired when the a chip is added to the component. e.g.
```js
  myInputChipRef.addEventListener('opc-input-chip:added', (e) => {
    console.log(e)
  });
```

### opc-input-chip:removed
- `opc-input-chip:removed` event is fired when the a chip is removed from the component. e.g.
```js
  myInputChipRef.addEventListener('opc-input-chip:removed', (e) => {
    console.log(e)
  });
```

## Themes
- Only default themes

## ### CSS Variables

| CSS Variables   | Value (default) |
|---------|----------------------|
|--opc-input-chip--BorderColor:| $opc-color--black-300, #D2D2D2|
|--opc-input-chip--TextColor:| $opc-color--black-900, #151515|
|--opc-input-chip--TextTransform:| lowercase |
|--opc-input-chip--Color:| $opc-color--blue-400, #0066CC|
|--opc-input-chip--BackgroundColor:| $opc-color--blue-100, #BEE1F4|
|--opc-input-chip--FontWeight:| 400|


## Development server

### Run development server
```sh
  npm run dev opc-input-chip
```

### Build
```sh
  npm run build opc-input-chip
```

## Run tests
```sh
  npm run test
```

## 🤝 Contributors
👤 **[Sumeet Ingole](https://github.com/gisumit)**
