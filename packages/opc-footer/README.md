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

The opc-footer defaults to white background a.k.a light theme and supports dark theme as well.

```html
<opc-footer></opc-footer>
```


### Example Dark theme

```html
<opc-footer theme="dark"></opc-footer>
```

### To add the links it has a attribute called opc-links. It supports the following structure.

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

### The Links with no path fires the custom event called footer-link-click, so the user can add custom behavior.

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

