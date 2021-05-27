# opc-comment-input 👋

![Version](https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000)
![Build Status](https://travis-ci.org/dwyl/esta.svg?branch=master)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/1-Platform/op-components/graphs/commit-activity)

A standardized web component based on Lit Element for Red Hat One Platform to use as a comment input component.

## Prerequisites
The `opc-comment-input` and `opc-comment-list` component is dependent on the Patternfly library for styling. So to avoid any missing styles, add the `patternfly.css` file before the component script tags.

## Usage
### Install opc-comment-input
```sh
npm install --save @one-platform/opc-comment-input
```
the `opc-comment-list` is a subset of `opc-comment-input` component.
### For VanillaJS
- Import component
```js
  import '@one-platform/opc-comment-input';
```
- Add component in html
```html
<opc-comment-input></opc-comment-input>
```
- In js listen for `opc-comment-button:click` to get the comment text.
```js
const myCommentInput = document.querySelector('opc-comment-input');
myCommentInput.addEventListener('opc-comment-button:click', e => {
  console.log(e);
})
```

- Add component in html
```html
<opc-comment-list></opc-comment-list>
```
- In js provide comments data via comments attribute/property.
```js
const myCommentList = document.querySelector('opc-comment-list');
  myCommentList.comments = [{
      commenter: 'Dave Brown',
      date: 'Friday, May 29, 2020 at 10:59 AM',
      comment: 'Uneasy barton seeing remark happen his has. Am possible offering at contempt mr distance stronger an. Attachment excellence announcing or reasonable am on if indulgence.'},
    {
      commenter: 'Liam Webb',
      date: 'Friday, May 29, 2020 at 10:59 AM',
      comment: ' Exeter talked in agreed spirit no he unable do. Betrayed shutters in vicinity it unpacked in. In so impossible appearance considered mr. Mrs him left find are good.' },
      ];
```

### For Angular
- In your app.module include the `CUSTOM_ELEMENTS_SCHEMA` and import the component
```js
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import '@one-platform/opc-comment-input';

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
<opc-comment-input></opc-comment-input>
<opc-comment-list></opc-comment-list>
```

### For React
- Import the component in App.js
```js
  import '@one-platform/opc-comment-input';
```
- Add component in any component html render
```html
<opc-comment-input></opc-comment-input>
<opc-comment-list></opc-comment-list>
```
## Attributes
### placeholder
- Default value is `Type your comment` and can be changed by passing a text as shown in below example:
```html
<opc-comment-input placeholder="Enter your comment">
</opc-comment-input>
```

### comments
- comments data is mandatory attribute to populate list
```html
<opc-comment-list comments="commentsData"></opc-comment-list>
```
## Event Emitters
### opc-comment-button:click
- `opc-comment-button:click` event is fired when the comment is submitted via the button. Below snippet shows the event lister for component
```js
const myCommentInput = document.querySelector('opc-comment-input');
myCommentInput.addEventListener('opc-comment-button:click', e => {
  console.log(e);
});
```

## Development server
### Run development server
```sh
  npm run dev opc-comment-input
```
### Build
```sh
  npm run build opc-comment-input
```
## Run tests
```sh
  npm run test
```
## 🤝 Contributors
👤 **[Sumeet Ingole](https://github.com/gisumit)**

