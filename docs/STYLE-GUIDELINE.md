# OPC Style Guideline

![Version](https://img.shields.io/badge/version-0.0.2-blue.svg?cacheSeconds=2592000)

## Introduction :

- The opc style package includes all common styles which includes the colors variables, theming function, maps and mixins etc. to use.

- Here’s take a look at the main `opc-styles.scss` file 
```
opc-style
   | ---- variables
    	| ---- _1-definitions
	    | ---- _2-crayons
   | ---- maps
	    | ---- _colors
   | ---- functions
	    | ---- _tools
	    | ---- _custom-properties
   | ---- typography
	    | ---- _base
	    | ---- _headings
```

### variables 
- Files in this folder contains the scss variables.
- The `_1-definitions` file contains the global definitions variables for example: 
```scss 
    $prefix: opc;
 ```
- The `_2-crayons` file contains the colors variables names in the shade and weight format.
I.e.
 ```scss 
    $opc-color--black-500: #8A8D90; 
```

### maps
- Files in this folder contain the scss map which hold pairs of keys and values.
- The `_colors` file contains the mapping between the name and colors ( defined in the `_2-crayons` ) as well includes the map of the contextual colors i.e. Success, Danger, Warning etc.

### functions
- This folder contains the reusable functions.
- The `_tools` file contains the utility functions
- The `_custom-properties` file contains the functions that can be used to create css custom properties. More on this can be found in the How to implement the theming section. 

## How can I use color variables :
### Using the scss color variable directly which resolves to hex color
#### Hint: All colors are defined in the `variables/_2-crayons` file

#### my-button.scss
```scss
.my-button.dark {
    background: $opc-color--black-900;
    color: $opc-color--black-200;
}
```
After complied 
#### my-button.css
```css
.my-button.dark {
    background: #F0F0F0;
    color: #151515;
}
```

### Using the functions to create the css custom properties.
- The `opc-get-var` function creates the local scoped the css custom property. This function is defined in the `_custom-properties` file.

```scss
    opc-get-var($cssvar, $fallback, $region)
```
- Where: 
    - ``` $LOCAL ``` - is a string relative to the component itself e.g button
    - ``` $cssvar ``` - color name define in map
    - ``` $fallback ``` [null] - Optional custom fallback value its 👉 best practice to provide the fallback color from `variables/_2-crayons.scss`
    - ```$region ```- [null] - Optional path for region, slot, sub-property etc.

```scss
.my-button {
    background-color: #{opc-get-var(BackgroundColor, $opc-color--blue-50, soft)};
}
```

After compiled: 
```css
.my-element {
    background-color: var(--opc-button__soft--BackgroundColor, #E7F1FA);
}
```

### Creating the Theme using opc-color function:
- If you want to create a global css custom property you can use the `opc-color` function.
This function is defined in the `_custom-properties` file.

- Here the function signature :
```scss 
    opc-color($cssvar, $fallback: null)
```

- Where:
    - ```$cssvar ```:  is the color name(key name) defined in the color map.
    - ```$fallback ``` [null] - Optional custom fallback value its 👉 best practice to provide the fallback color from `variables/_2-crayons.scss`

## How can I use the typography :
- The opc-styles contains the all headings types which are designed over here and have the mixins defined in the `typography/_headings` file

Use the mixin by `@include <mixin-name>` for example:
```scss
.user-name {
    @include heading--four
}
```

### How can I change the font family: 
- By Default the Red Hat Text is applied to the all text excluding All Headings Tags which are from H1 to H6. If you want to change the font family you can do that by changing the global css custom proprietary which is declared in the :root selector in the `_base` file.

```css
:root {
 --opc-global--Heading--Font-Family: 'Red Hat Display';
 --opc-global--Font-Family: 'Red Hat Text';
}
```

- And since it is just a css custom property it make user to change font-family easily by adding in your code base:

```css
my-element {
 --opc-global--Heading--Font-Family: 'Overpass Mono';
 --opc-global--Font-Family: 'Overpass';
}
```
