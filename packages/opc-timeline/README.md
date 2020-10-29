# opc-timeline Component 👋

![Version](https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000)
![Build Status](https://travis-ci.org/dwyl/esta.svg?branch=master)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/1-Platform/op-components/graphs/commit-activity)

A web component based on Lit Element to show a timeline for a specific range
---
## Usage

### Install opc-timeline

```sh
npm install --save @one-platform/opc-timeline 
```

### For VanillaJS
- Import component
```js
import '@one-platform/opc-timeline';
```
- Add component in html
```html
<opc-timeline id="timeline" current-step-index="2" variant="compact">
    <div slot="timeline-details">
        <h2>Timeline Details</h2>
        The timeline component details go right here, it uses a slot named <strong>timeline-details</strong>. Happy coding :)
    </div>
</opc-timeline>
```
- Using the steps attribute we can add an Array of strings which would be the steps for the timeline component
```js
document.querySelector('#timeline').steps = [ 'Scheduled', 'Loaned', 'Extended', 'Completed'];
```

### For Angular
- In your app.module include the `CUSTOM_ELEMENTS_SCHEMA` and import the component
```js
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import '@one-platform/opc-timeline';

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
<opc-timeline id="timeline" current-step-index="2" variant="compact">
    <div slot="timeline-details">
        <h2>Timeline Details</h2>
        The timeline component details go right here, it uses a slot named <strong>timeline-details</strong>. Happy coding :)
    </div>
</opc-timeline>
```

### For React
- Import the component in App.js
```js
import '@one-platform/opc-timeline';
```

- Add component in any component html render
```html
<opc-timeline id="timeline" current-step-index="2" variant="compact">
    <div slot="timeline-details">
        <h2>Timeline Details</h2>
        The timeline component details go right here, it uses a slot named <strong>timeline-details</strong>. Happy coding :)
    </div>
</opc-timeline>
```
---
## Slots
- There are three optional slots in the opc-timeline as shown below namely
  - <strong>```timeline-details```</strong>: To set the details for the timeline
    - Example
    ```html
    <opc-timeline>
      <div slot="timeline-details" style="color: white;">
        <h2>Timeline Details</h2>
        The timeline component details go right here, it uses a slot named <strong>timeline-details</strong>. Happy coding :)
      </div>
    </opc-timeline>
    ```
  - The timeline label slots
      - <strong>start-label</strong>: The start label on the left side of the timeline 
      - <strong>end-label</strong>: The end label on the right side of the timeline
        - Example code
      ```html
      <opc-timeline>
        <span slot="start-label" style="font-weight: 600; color: white;">Loaned on: Apr 28, 2018</span>
        <span slot="end-label" style="font-weight: 600; color: white;">Expires on: Oct 27, 2018</span>
      </opc-timeline>
      ```
---
## Attributes
### steps
- Input: Array of strings
  - Example
  ```js
  document.querySelector('#timeline').steps = [ 'Scheduled', 'Loaned', 'Extended', 'Completed'];
  ```
- The array would be used as steps. 
- Adding a falsy value would produce an empty step without string
  - Example of falsy values
  ```js
  document.querySelector('#timeline3').steps = [null, undefined, 0];
  ```
  - PS: Adding empty string (e.g. - '') would also create a empty step

### current-step-index
- Input: Number
- Sets the active state to the given number

### variant
- default
  - By default the variant attribute would be set to the string "default" which would have all the steps without the side arrows
- compact
  - The compact view has side arrows which scroll after clicking on them in their respective direction

---
## Themes
- Only default themes

### Color pallet

| color   | hex (default-fallback) |
|---------|------------------------------------------------------------------|
| --opc-timeline--BackgroundColor | <span class="readme-color-preview" style="--bg:#DEDEDE"></span> #DEDEDE |
| --opc-timeline--Color--step | <span class="readme-color-preview" style="--bg:#689B7A"></span> #689B7A |
| --opc-timeline--TextColor | <span class="readme-color-preview" style="--bg:#6C6C6C"></span> #6C6C6C |
| --opc-timeline--Color--active | <span class="readme-color-preview" style="--bg:#0aa521"></span> #0aa521 |
| --opc-timeline--Color--after-active | <span class="readme-color-preview" style="--bg:#b6e4bc"></span> #b6e4bc |

- Style variables to add spacing

| Spacing | Default |
|---|---|
| --opc-timeline--Left--spacing | 0rem |
| --opc-timeline--Right--spacing | 0rem |
| --opc-timeline--MarginTop--timeline-label | 1rem |

---

## Development server

### Run development server

```sh
npm run dev opc-timeline
```

### Build

```sh
npm run build opc-timeline
```

## Run tests

```sh
npm run test
```

## 🤝 Contributors

👤 **[hybridx](https://git.io/dnair)**
