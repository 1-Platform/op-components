# opc-footer component 👋

![Version](https://img.shields.io/badge/version-0.0.2-blue.svg?cacheSeconds=2592000)
![Build Status](https://travis-ci.org/dwyl/esta.svg?branch=master)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/1-Platform/op-components/graphs/commit-activity)

A standardized web component based on Lit Element for Red Hat One Platform Footer.

# Usage
### Footer with links:
* The links needs to have following data type which is defined in `./types.d.ts` file. Below is the mock data example.
* use the `opcLinkCatagories` setter function to add links.
```js
const links = [
  { "category":"Group name 1",
    "links":[
      { "text":"Lorem ipsum", "href":"https://example.com" },
      { "text":"Lorem ipsum" },
    ]},
  { "category":"Group name 2",
    "links":[
      { "text":"Lorem ipsum", "href":"https://example.com" },
      { "text":"Lorem ipsum" },
      { "text":"Lorem ipsum" },
  ]},
];

const myFooterEl = document.querySelector('opc-footer');
myFooterEl.opcLinkCatagories = links;
```

* The Links with no path fires the custom event called `opc-footer-link:click`, so the user can add custom behavior. for example 
```js
  const myFooterElement = document.querySelector('opc-footer');
  myFooterElement.addEventListener('opc-footer-link:click', (e) => {
    console.log(e);
    /// custom behaviors.
  });
```

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

# Slot
The `opc-footer` component supports the slot for foot note which is reserved for copyright text. By default it shows the text as Copyright **All Rights Reserved.**
You can use `copyright` slot to provide custom text as shown in below example

```html
<opc-footer>
  <span slot="copyright">My Company Rights Reserved</span>
</opc-footer>
```

# Attributes

**`theme`**

| Theme name |  Value  |
| ----------------- | ------- | 
| `light` |  #FFF |
| `dark` |  #000 |

**`link-catagories`**

We recommend to provide the links via js API but if you want to implement `data goes down and events go up` pattern then you can use the `link-catagories` attribute.

**`flat`**

The flat attribute removes the background cubes illustration from the footer component. By Default the value is `false`

for example:

```html 
<opc-footer flat="true"></opc-footer>
```

`recommended`
```html
<opc-footer> 
</opc-footer>
```
```js
const myFooterEl = document.querySelector('opc-footer');
myFooterEl.opcLinkCatagories = MockLinkData;
```

`not recommended`
```html
<opc-footer link-catagories="${MockLinkData}"> 
</opc-footer>
```

# CSS Variables

| CSS Variable name |  Value  |
| ----------------- | ------- | 
| `--opc-header--BackgroundColor` |  #FFF |
| `--opc-header--TextColor` |  #000 |

# Development server

Install packages
```sh
npm run install
```

Run development server
```sh
npm run dev opc-footer
```

OR
```sh
npm run start opc-footer
```

Build
```sh
npm run build opc-footer
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
