# This is opc-header 👋

Web component based on lit-element, it can be used as a other element of HTML example <opc-header> </opc-header>

https://docs.google.com/document/d/1PoxpPsret2njugkAG_YBmlS3ZNkDd0MTY-JZKDbesrQ/edit#heading=h.w85tasqfwpfc

## Install

```sh
npm i  @one-platform/opc-header 
```

## Usage

import '@one-platform/opc-header/dist/opc-header';

<opc-header header-name="Outages"></opc-header>
<opc-header>
  <span slot="name">Hello</span>
</opc-header>

To use it in React

<script>
require('~/node_modules/@one-platform/opc-header/dist/opc-header);
</script>
<opc-header></opc-header>
<opc-header header-name="Outages"></opc-header>
<opc-header>
    <span slot="name">Hello</span>
</opc-header>

To use it in Angular

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

👤 **Anjnee**
