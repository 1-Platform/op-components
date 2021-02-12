# opc-feedback Component 👋

![Version](https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000)
![Build Status](https://travis-ci.org/dwyl/esta.svg?branch=master)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/1-Platform/op-components/graphs/commit-activity)

Feedback Component follows the One Platform design system and can be used as a popup to collect feedback from the end-users.

## Prerequisites
The `opc-footer` component is partially dependent on the Patternfly library for styles. So to avoid any missing styles, add the `patternfly.css` file before the component script tag.

## Install

```sh
npm install --save @one-platform/opc-feedback
```

## Usage
### For VanillaJS
- Import component
```js
import '@one-platform/opc-feedback/dist/opc-feedback';
```
### For Angular
- In your app.module include the `CUSTOM_ELEMENTS_SCHEMA` and import the component
```js
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import '@one-platform/opc-feedback/dist/opc-feedback';

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

### For React
- Import the component in App.js
```js
import '@one-platform/opc-feedback/dist/opc-feedback';
```

#### Inject component to the index of your app.
```html
<opc-feedback id="opc-feedback">
</opc-feedback>
```
## Themes
| Theme Name   | Example |
|---------|------------------------------------------------------------------|
| red (*default and fallback color*) | ```<opc-feedback theme="red"></opc-feedback>``` |
| blue | ```<opc-feedback theme="blue"></opc-feedback>``` |

### Color pallette

| Color   | hex (default-fallback) |
|---------|------------------------------------------------------------------|
| --opc-feedback--BackgroundColor | ```#a30000``` |
| --opc-feedback--TextColor | ```#fff``` |
| --opc-feedback__submit--BackgroundColor |  ```#a30000``` |
| --opc-feedback__submit--TextColor | ```#fff``` |

## Properties
| Name   | value |
|---------|------------------------------------------------------------------|
| ```url``` | ```String``` value is expected ```/feedback``` is the default fallback url. |
| ```theme``` | Refer [themes](https://github.com/1-Platform/op-components/tree/master/packages/opc-feedback/README.md#themes) section. |


### Default Template
When ```opc-feedback``` is launched it is loaded with the following the default template in ui.
```js
{
  title: 'How was your overall experience?.',
  subtitle: 'It will help us to improve platform',
  summary: 'Summary',
  summaryPlaceholder: 'How can we do better?.',
  errorTitle: 'What is wrong?',
  confirmationTitle: 'Thanks for your feedback. Your experience is important to us!',
  confirmationSubTitle: 'Each time a friend submits a experience, it creates a task for our developer team to resolve it with priority.',
  confirmationEventMessage: 'Submitted the feedback.',
  experienceList: [{
    name: 'Excellent',
    assetUrl: './assets/happy.svg',
    errorList: []
  },
  {
    name: 'Good',
    assetUrl: './assets/good.svg',
    errorList: []
  },
  {
    name: 'Sad',
    assetUrl: './assets/sad.svg',
    errorList: [{
      name: 'Slow Loading'
    },
    {
      name: 'App Crashed'
    },
    {
      name: 'Navigation'
    },
    {
      name: 'Not Responsive'
    },
    {
      name: 'Other'
    }]
  }]
}
```

### Custom Template Example
We can override the data with the default template with custom template by passing the custom properties in the following format as per defined structure of default json.

* Use the feedbackTemplate setter function to set the template ui.
```js
document.querySelector('opc-feedback').feedbackTemplate = {
  title: "Custom title?."
};
```

| Template Properties   | Datatype |
|---------|------------------------------------------------------------------|
| title | ```String``` |
| subtitle | ```String``` |
| summary | ```String``` |
| summaryPlaceholder | ```String``` |
| errorTitle | ```String``` |
| confirmationTitle | ```String``` |
| confirmationSubtitle | ```String``` |
| experienceList | ```Array``` |
| experienceList.errorList | ```Array``` |

## Event Handling
### Trigger the modal outside the component.
```js
document.querySelector('opc-feedback').toggle();
```

### ```opc-feedback``` emits an event with submit operation.
 - You can use the data for sending it to backend.

```js
document.querySelector('opc-feedback').addEventListener('opc-feedback:submit', (event) => console.log(event.detail.data) );
```
### Development server
#### Prerequisites
* NodeJS >= 8
* IDE (VSCode/Atom)
* Browser (Mozilla Firefox/Google Chrome)

### Run development server

```sh
npm run dev opc-feedback
```

### Build
```sh
npm run build opc-feedback
```

## Run tests

```sh
npm run test
```

## 🤝 Contributors

👤 **Rigin Oommen**

👤 **Sumeet Ingole**
