# This is opc-header 👋

opc-header contains a header section that is customizable it can be reused. This is based on lit element.


## Install

```sh
npm i @one-platform/opc-header 
```

## Usage
```<html>
  <body>
    <opc-header title="Outages"></opc-header>
    <opc-header>
      <span slot="name">Hello</span>
    </opc-header>
  </body>
</html>
```
To use it in React
```<html>
<script>
require('~/node_modules/@one-platform/opc-header/dist/opc-header);
</script>
<opc-header></opc-header>
<opc-header title="Outages"></opc-header>
<opc-header>
    <span slot="name">Hello</span>
</opc-header>
</html>
```

To use it in Angular
```js
import '@one-platform/opc-header/dist/opc-header';

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

👤 **Anjnee K Sharma** [anjneeksharma] (https://github.com/anjneeksharma)
