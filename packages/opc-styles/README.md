# Welcome to OPC Style Library 👋

This packages contains the all common styles which are important to get
started with any component which includes global variables, colors, common mixin etc.

![Version](https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/1-Platform/op-components/graphs/commit-activity)


## Usage:

Import the opc-style.scss into your style file 

```
  @import "/opc-styles.scss";

```

adding color theme to component with local css custom property use opc-get-var function
Note: see function/_custom-properties.scss for full function documentation.

opc-button.scss
```
  op-button.soft {
    background-color: #{opc-get-var(BackgroundColor, $opc-color--blue-50, soft)};
    color: #{opc-get-var(TextColor, $opc-color--blue-400, soft)};
    border-color: #{opc-get-var(BorderColor, $opc-color--blue-400, soft)};
  }

  op-button.flat {
    background-color: #{opc-get-var(BackgroundColor, $opc-color--blue-50, flat)};
    color: #{opc-get-var(TextColor, $opc-color--blue-400, flat)};
    border-color: transparent;
  }

```

opc-button.scss
```
  op-button.soft {
    background-color: var(--opc-button__soft--BackgroundColor, #E7F1FA);
    color: var(--opc-button__soft--TextColor, #0066CC);
    border-color: var(--opc-button__soft--BorderColor, #0066CC); 
  }

  op-button.flat {
    background-color: var(--opc-button__flat--BackgroundColor, #E7F1FA);
    color: var(--opc-button__flat--TextColor, #0066CC);
    border-color: transparent; 
  }
  
```

## 🤝 Contributors

👤 **Sumeet Ingole** [@gisumit](https://github.com/gisumit)

👤 **Deepesh Nair** [@hybridx](https://github.com/hybridx)
