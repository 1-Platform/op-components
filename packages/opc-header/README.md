# opc-header component 👋

![Version](https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000)
![Build Status](https://travis-ci.org/dwyl/esta.svg?branch=master)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/1-Platform/op-components/graphs/commit-activity)

A standardized web component based on Lit Element for Red Hat One Platform Header that uses Patternfly Breadcrumb and Links as button HTML component

## Prerequisites
The `op-header` component is partially dependent on the Patternfly library for breadcrumbs and links. So to avoid any missing styles, add the `patternfly.css` file before the component script tags.

## Usage
Plain Header

```html
 <opc-header title="OPC Header"></opc-header>
```

Header with Breadcrumbs and Links
```html
 <opc-header title="OPC Header">
  <opc-header-breadcrumb slot="breadcrumb"></opc-header-breadcrumb>
  <opc-header-links slot="links"></opc-header-links>
 </opc-header>
```
For custom options, 
- use the `opcHeaderBreadcrumb` setter function to set the header breadcrumb
- use the `opcHeaderLinks` setter function to set the header links

```js
  const breadcrumbs = [
    {
      "name":"Section Home",
      "href":"#"
    },
    {
      "name":"Section Landing",
      "href":"#"
    }];

  const links = [
    {
      "name":"Link1",
      "href":"#",
      "icon":"fa-play-circle"
    },
    {
      "name":"Link2",
      "href":"#",
      "icon":"fa-question-circle"
    },
    {
      "name":"Link3",
      "href":"#",
      "icon":"fa-file"
    }];

  document.querySelector("opc-header-breadcrumb").opcHeaderBreadcrumb = breadcrumbs;
  document.querySelector("opc-header-links").opcHeaderLinks = links;
```

Header with color themes
```html
 <opc-header title="OPC Header" theme="dark">
  <opc-header-breadcrumb slot="breadcrumb"></opc-header-breadcrumb>
  <opc-header-links slot="links"></opc-header-links>
 </opc-header>
```

Header with lightDOM
```html
 <opc-header title="OPC Header" theme="red">
  <div slot="breadcrumb" id="breadcrumb">
    <nav class="pf-c-breadcrumb" aria-label="breadcrumb">
      <ol class="pf-c-breadcrumb__list">
        <li class="pf-c-breadcrumb__item">
          <span class="pf-c-breadcrumb__item-divider">
            <i class="fas fa-angle-right" aria-hidden="true"></i>
          </span>
          <a href="#" class="pf-c-breadcrumb__link">Section home</a>
        </li>
        <li class="pf-c-breadcrumb__item">
          <span class="pf-c-breadcrumb__item-divider">
            <i class="fas fa-angle-right" aria-hidden="true"></i>
          </span>
          <a href="#" class="pf-c-breadcrumb__link pf-m-current" aria-current="page">Section landing</a>
        </li>
      </ol>
    </nav>
  </div>
  <div slot="links">
    <a class="pf-c-button pf-m-link" href="" style="--pf-c-button--m-link--Color: var(--opc-header__Links--Color);--pf-c-button--FontSize: var(--pf-global--FontSize--sm);">
      <span class="pf-c-button__icon pf-m-start">
        <i class="fas fa-play-circle" aria-hidden="true"></i>
      </span>Link1
    </a>
    <a class="pf-c-button pf-m-link" href="" style="--pf-c-button--m-link--Color: var(--opc-header__Links--Color);--pf-c-button--FontSize: var(--pf-global--FontSize--sm);">
      <span class="pf-c-button__icon pf-m-start">
        <i class="fas fa-question-circle-o" aria-hidden="true"></i>
      </span>Link2
    </a>
  </div>
 </opc-header>
```

## Slots
There are two optional slots for header breadcrumb and links.

### Default slot
Place the `opc-header-breadcrumb` and `opc-header-links` component here.

## Attributes
<style>
  .readme-color-preview {
    display: inline-block;
    width: 1em;
    height: 1em;
    vertical-align: middle;
    background-color: var(--bg, #ffffff);
    border: 1px solid #444444;
  }
</style>

**`title`**
Adds the title to header component

**`theme`**
Options include default, dark, red, blue, cyan. Please use css variables provided with the component if you want to add more customizations.

| color   | hex                                                              |
|---------|------------------------------------------------------------------|
| default | <span class="readme-color-preview" style="--bg:#ffffff"></span> #ffffff |
| dark    | <span class="readme-color-preview" style="--bg:#000000"></span> #000000 |
| red     | <span class="readme-color-preview" style="--bg:#be0000"></span> #be0000 |
| blue    | <span class="readme-color-preview" style="--bg:#464646"></span> #316DC1 |
| cyan    | <span class="readme-color-preview" style="--bg:#131313"></span> #1B8793 |


## Variable hooks
Available hooks for styling header, breadcrumb and link colors include:

| Variable name                               | Default value                                                              |
| --------------------------------------------| ---------------------------------------------------------------------------|
| `--opc-header--BackgroundColor`             | <span class="readme-color-preview" style="--bg:#ffffff"></span> #ffffff    |
| `--opc-header--Color`                       | <span class="readme-color-preview" style="--bg:#000000"></span> #000000    |
| `--opc-header--Width`                       | 100%                                                                       |
| `--opc-header__BreadcrumbDivider--Color`    | <span class="readme-color-preview" style="--bg:#000000"></span> #000000    |
| `--opc-header__BreadcrumbLink--Color`       | var(--pf-global--link--Color)                                              |
| `--opc-header__Links--Color`                | var(--pf-global--link--Color)                                              |


## Events
None as of yet


### Development server

- Run development server

```sh
npm run dev opc-header
```

OR

```sh
npm run start opc-header
```

### Build

```sh
npm run build opc-header
```

## Run tests

```sh
npm run test
```

## 🤝 Contributors

👤 **Diwanshi Pandey**
