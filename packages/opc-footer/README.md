# opc-footer component 👋

![Version](https://img.shields.io/badge/version-0.0.2-blue.svg?cacheSeconds=2592000)
![Build Status](https://travis-ci.org/dwyl/esta.svg?branch=master)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/1-Platform/op-components/graphs/commit-activity)

A web component based on lit-element which provides themes and an api to show links. 

# Prerequisites

The `opc-footer` component's style are based on [`opc-styles`](https://github.com/1-Platform/op-components/tree/master/packages/opc-styles) package which contains all common styles which are important to get started with any component.

# Usage

Default with light theme: 

```html
<opc-footer></opc-footer>
```

Dark theme:
in `html`
```html
<opc-footer theme="dark"></opc-footer>
```
as well you can change the theme in `js` too by selecting the element reference.
```js
const myFooterEl = document.querySelector('opc-footer');
myFooterEl.theme = 'dark';
```

### Footer with links:
* The links needs to have following data type which is defined the `./types.d.ts` file. below is the mock data example.
* use the `opcLinkCatagories` setter function to add links.
```js
const links = [
  { "name":"Quick Links",
    "links":[
      { "name":"Down For The Count", "path":"https://example.com" },
      { "name":"Between a Rock and a Hard Place" },
      { "name":"Keep Your Eyes Peeled" },
      { "name":"Drawing a Blank" }
    ] },
  { "name":"Related Links",
    "links":[
      { "name":"All Greek To Me", "path":"https://example.com" },
      { "name":"Keep Your Shirt On" },
      { "name":"Go For Broke" },
      { "name":"Head Over Heels" },
      { "name":"Lovey Dovey" },
      { "name":"Raining Cats and Dogs" }
  ]},
];

const myFooterEl = document.querySelector('opc-footer');
myFooterEl.opcLinkCatagories = links;
```

* The Links with no path fires the custom event called `footer-link-click`, so the user can add custom behavior. for example 
```js
  const myFooterElement = document.querySelector('opc-footer');
  myFooterElement.addEventListener('opc-footer-link-click', (e) => {
    console.log(e);
    /// custom behaviors.
  });
```

# Slot
the `opc-footer` supports the slot for foot note which is reserved for copyright text by default it shows the Copyright **All Rights Reserved.**
if you want to change use the slot name as `copyright` for example.

```html
<opc-footer>
  <span slot="copyright">My Company Rights Reserved</span>
</opc-footer>
```

# Attributes

### The `opc-footer` has a optional attribute  `theme` to manage the theme.

| Theme name |  Value  |
| ----------------- | ------- | 
| `light` |  #FFF |
| `dark` |  #000 |

### The `opc-footer` has the optional attribute `link-catagories` to show the links.

* the better way to add the links is via js API but if you want to implementing `data goes down and events go up` pattern in your code then you can use the following attribute

```html
<opc-footer link-catagories="${MockLinkData}"> 
</opc-footer>
```

# CSS Variables

| CSS Variable name |  Value  |
| ----------------- | ------- | 
| `--opc-header-BackgroundColor` |  #FFF |
| `--opc-header-TextColor` |  #000 |

# Development server

Install packages
```sh
npm run install
```

Run development server
```sh
npm run dev
```

OR
```sh
npm run start
```

Build
```sh
npm run build
```

Run tests
```sh
npm run test
```

## 🤝 Contributors
[👤 **Sumeet Ingole**](https://github.com/gisumit)

## Show your support
Give a ⭐️ if this project helped you!

## 📝 License
This project is [MIT](./LICENSE) licensed.
