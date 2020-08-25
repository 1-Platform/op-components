# This is opc-footer 👋

Web component based on lit-html

## Install

```sh
npm install
```

## Usage

The opc-footer component has three slots namely, quick-link, related-sites and help link.
you can use the anchor tag with the relative slot name for example,
```html
  <opc-footer>
    <!-- quick link -->
    <a slot="quick-link" href="#" target="_blank">Crunch time</a>
    <a slot="quick-link" href="#" target="_blank">Off the chain</a>
    <a slot="quick-link" href="#" target="_blank">Rowan</a>

    <!-- related-sites -->
    <a slot="related-sites" href="#" target="_blank">Blown</a>
    <a slot="related-sites" href="#" target="_blank">Freshman 15</a>
    <a slot="related-sites" href="#" target="_blank">Pete</a>

    <!-- help link -->
    <a slot="help-link" href="#" target="_blank">ATH</a>
    <a slot="help-link" href="#" target="_blank">Nrs</a>
    <a slot="help-link" href="#" target="_blank">Gag Gift</a>
    <a slot="help-link" href="#" target="_blank">Kane</a>
  </opc-footer>
```
it also have supports dark theme, by default the light theme is selected.
```html
  <opc-footer theme="dark">
    <!-- links -->
  </opc-footer>
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
