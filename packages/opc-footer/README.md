# This is opc-footer 👋

![Version](https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000)
![Build Status](https://travis-ci.org/dwyl/esta.svg?branch=master)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/1-Platform/op-components/graphs/commit-activity)

opc-footer is a web component based on lit-element. By default it has the light theme and text for copyright.

## Install

```sh
npm install
```

## Usage

the opc-footer have supports dark theme, by default the light theme is selected. for example
footer with default theme:

```html
<opc-footer></opc-footer>
```

![Demo Footer light with no links](demo/images/Footer-light-no-links.png)

here's another with dark

```html
<opc-footer theme="dark"></opc-footer>
```

![Demo Footer dark no links](demo/images/Footer-dark-no-links.png)

To add the links it has a attribute called opc-links-groups. this supports the Array folloing is the structure.

```js
[
  {
    name: "Example Group Link",
    links: [
      {
        name: "Crunch time",
        path: "https://example.com",
      },
      {
        name: "Lorem ipsum Link",
      },
    ],
  },
  ...
];
```
For a demo example see the
![Demo Footer light with no links](demo/images/Footer-light-no-links.png)
![Demo Footer dark with links](demo/images/Footer-dark-with-links.png)

The Links with no path fires the custom event called footer-link-click, so the user can add
custom behaviors.

for example 
```js
  const myFooterElement = document.querySelector('opc-footer');
  myFooterElement.addEventListener('opc-footer-link-click', (e) => {
    console.log(e);
    /// custom behaviors.
  });
```

### Development server

- Install packages

```sh
npm run install
```

- Run development server

```sh
npm run dev
```

OR

```sh
npm run start
```

### Build

```sh
npm run build
```

## Run tests

```sh
npm run test
```

## 🤝 Contributors

👤 **Sumeet Ingole**

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

This project is [MIT](./LICENSE) licensed.

