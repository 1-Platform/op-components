# OP Component Code Guideline
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)

## Basic Coding Guidelines:

### Write Readable code:
`"It's not about clever, crafty, pretty code. It's about fast and effective communication"`

- Write meaningful names for variables, functions, arguments. e.g.
```js
function divide ( dividend: number, divisor: number ): number {
 const quotient: number = dividend / divisor;
 return quotient;
}
```

### How to find out if something is not readable?

- If you can't understand the code within 10s after reading, there should be some refactoring or readability issues present.

### Note:

- Consistent Naming and Spelling Matters.
- Smaller functions are more readable. A function should be less than 20 lines.
- Write Dirty code, Then clean it
No file should be bigger than 100 lines of code
- If need be create a new file

### Context is Important:
- People who maintain or collaborate code often lack the author's context.

- "Context is Clarity" So provide clarity throughout the code first and then add the comments.

### For example:
```js
// check if the hero can defeat the villain
if ( hero.powers > villain.powers
  && hero.energy > 10
  && !villain.monsterMode ) {
    ...
}
```

- What if in the future the code changes but the comment stay the same

```js
if ( hero.canDefeat( villain ) ) {
}
```

- Refactoring and abstracting can save more time. 
- Always opt for self describing code over comments to describe a WHAT?

### Comments Must be Readable and Maintained

- Explain Why is this code here and then what it does. Explain the consequences of the code.

- Don't write here's the beginning of the if and here's the end of if

- Remember Code never Lies, comments Do.

- If you are using RegeX; Please add the comment. See the first point.

### Notes:

- 10 Second Rule
- One thing per file
- Small functions
- Well thought names (BEM for css)
- Use comments wisely
- Use Prettier, TSLints, SonarLint and other 3rd party plugins in your code editor.

##  Component Coding Guidelines:
- The component needs to be built using the Lit-element to make sure you know how the library helps you to create a component here is the Guide of Lit-element.

### Which component I am implementing?

- Understand the component is Stateless or Stateful. If the component is just a presentation purpose only? Does it need other components? e.g. child component, what are the dynamic parts of this component?Does this component have any theming options?.

### Ask/Share Information.

- `Note`: Make sure you have a component Specification Design and Documentation which includes all above points and more.

### While Writing a component follow the sequence
```js
@customElement( 'opc-header' )
export_class_Header_extends__LitElement_ {

// 1. Properties, Variables
@property( { attribute:"opc-title"} )
    title ="Header Title";

// 2. Getters, Setters and Life Cycle Methods etc.
_static__get_styles () {
    return [style];
}

// 3. Render function define
render () {
    return html`
    // DOM Here
    `;
}

// 4. Event-emitter function define at last of the class
fireEvent () {
    // DOM Here
}
}
```

## Naming Conventions

### Naming a custom component:

- Make sure you have an opc- as a prefix.
  - Make sure you are not duplicating any Native DOM element.
- Naming a custom attribute:
  - Make sure you are not mutating any Native attributes.
- Styling the Component:
  - Make sure you follow BEM while writing the css/scss.

## Component README Guidelines:

### Read me creation steps:
`Note: The generator will create a template for the following steps, the developer would need to add information accordingly`

- `Step 1:` Add the component name and badges includes version, build status and maintenance status


- `Step 2:` Add component introductory summary for example
`
"A web component based on Lit Element to show a timeline for a specific range"
`

- `Step 3:` Add Usage information for the component which includes for following use cases:
  - Using component in VanillaJS, Angular2+ and React15+ which shows basic example of the component with passing the data to attributes, listing on events, passing light DOM etc.

#### Installing the component for example:
```sh
npm install --save @one-platform/opc-timeline
```

- `Step 4: `Attributes details

  - Write all details of an attribute which includes: Name, default value, value type if there is any, any options of values and their descriptions and example.

- `Step 5:` Event Emitters

  - Write all details of an custom event emitters includes the following details:

  - Name, example if the fired data.

- `Step 6:` Add the Slot details

  - Make sure you mention the names of slots and examples of them, If there are many. 

- `Step 7:` CSS Variables:

  - Add the list of css variables with their default values and fallbacks, and other scss variables.

- `Step 8:` Development Details

  - Add details following points
    - Run development server
    - Build
    - Test

## Package dependency management:

### Testing:

- Basic test:
  - Every component needs test covering basic functionality/behaviour
which includes: testing all attributes and properties are defined and can be updated via js API.

- Accessibility test:
  - The component generator supports the a11y test… which is provided by jest-axe library.

  - Jest-axe: is the wrapper of jest which includes the main axe-core library which is widely used to test.

#### Note: here is the List of rules axe-core supports

- WCAG 2.0 Level A & AA Rules
- WCAG 2.1 Level A & AA Rules
- Best Practices Rules
- Experimental Rules
- Deprecated Rules
- [A long list of rules is here: All Rules in details](https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md)

- The jest-axe is enabled in the generator test file… here is the snippet:
```js
it('has no axe violations', async () => {
    expect( await axe(opcElement)).toHaveNoViolations()
});
```
`Above snippet tests all rules on the component opcElement.`

