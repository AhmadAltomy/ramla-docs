# Code StyleGuide

Code style guide for the typescript and React projects.

## Naming Conventions

Naming conventions are important for the readability and maintainability of the code. The following naming conventions
should be followed in the project.

### Files

all files should be named in `camelCase` and should be descriptive for the content of the file.

- **File names** should be in `camelCase` and should be descriptive.
- **File extensions** should be in lowercase.
- **File names** should not contain any special characters or spaces.
- **File names** should not contain any numbers.
- **File names** if the file has default export, the file name should be the same as the default export.

**Bad:**

```typescript
// File name: my-file.ts
```

**Good:**

```typescript
// File name: myFile.ts
```

**Components example:**

**Bad:**

```typescript
// File name: my-component.tsx
```

**Good:**

```typescript
// File name: myComponent.tsx
```

### Variables

- **Variable names** should be in `camelCase`.
- **Variable names** should be descriptive.

**Bad:**

```typescript
let my_variable = 10;
```

**Good:**

```typescript
let myVariable = 10;
```

### Constants

- **Constant names** should be in `UPPER_CASE`.
- **React State** should be in `camelCase`.

**Bad:**

```typescript
const myConstant = 10;
```

**Good:**

```typescript
const MY_CONSTANT = 10;
```

**React State example:**

**Bad:**

```typescript
const [my_state, setMyState] = useState(0);
```

**Good:**

```typescript
const [myState, setMyState] = useState(0);
```

### Functions

- **Function names** should be in `camelCase`.
- **Function names** should be descriptive.
- **Function names** should be verbs ex. `get`, `set`, `fetch`, `update`.

**Bad:**

```typescript
function my_function() {
  // code
}
```

**Good:**

```typescript
function myFunction() {
  // code
}
```

**Good:**

```typescript
function fetchData() {
  // code
}
```

### Components

- **Component names** should be in `PascalCase`.
- **Component names** should be descriptive.
- **Component names** should be nouns ex. `Header`, `Footer`, `Button`.

**Bad:**

```typescript
function my_component() {
  // code
}
```

**Good:**

```typescript
function MyComponent() {
  // code
}
```

### Custom Hooks

- **React Hooks names** should be in `camelCase`.
- **React Hooks names** should be descriptive.
- **React Hooks names** should be start with `use`.

**Bad:**

```typescript
function my_hook() {
  // code
}
```

**Good:**

```typescript
function useMyHook() {
  // code
}
```

### Boolean Variables

- **Boolean variables** should be in `is` or `has` prefix.

**Bad:**

```typescript
let loading = false;
```

**Good:**

```typescript
let isLoading = false;
```

### React Props

- **React Props** should be in `camelCase`.
- **React Props** should be descriptive.

**Bad:**

```typescript
function MyComponent({ myProp }) {
  // code
}
```

**Good:**

```typescript
function MyComponent({ myProp }) {
  // code
}
```

### Parameters

- **Function parameters** should be in `camelCase`.
- **Function parameters** should be descriptive.
- **Function parameters** should be optional if possible.

**Bad:**

```typescript
function myFunction(param1, param2) {
  // code
}
```

**Good:**

```typescript
function myFunction(param1, param2) {
  // code
}
```

### Types

- **Type names** should be in `PascalCase`.
- **Type names** should be descriptive.
- **Type names** should be nouns ex. `User`, `Post`, `Comment`.
- **Type names** should be end with `Type` ex. `UserType`, `PostType`, `CommentType`.
- **Type names** components should be end with `Props` ex. `ButtonProps`, `InputProps`.

**Bad:**

```typescript
type user = {
  // code
}
```

**Good:**

```typescript
type User = {
  // code
}
```

**Good:**

```typescript
type UserType = {
  // code
}
```

**Good:**

```typescript
type ButtonProps = {
  // code
}
```

### Directories

- **Directory names** should be in `kebab-case`.
- **Directory names** should be descriptive.
- **Directory names** should be nouns ex. `components`, `pages`, `hooks`.
- **Directory names** should be singular.
- **Directory names** should be lowercase.
- **Directory names** should not contain any special characters or spaces.

**Bad:**

```typescript
// Directory name: MyComponents
```

**Good:**

```typescript
// Directory name: components
```

**Bad:**

```typescript
// Directory name: my-components
```

**Good:**

```typescript
// Directory name: components
```

---

## Code Formatting

Code formatting is important for the readability and maintainability of the code. The following code formatting should
be followed in the project.

### Indentation

- **Indentation** should be 2 spaces.
- **Indentation** should be consistent.
- **Indentation** should be used for each block of code.

**Bad:**

```typescript
function myFunction() {
    // code
}
```

**Good:**

```typescript
function myFunction() {
  // code
}
```

### Line Length

- **Line length** should be 80 characters.
- **Line length** should be consistent.

**Bad:**

```typescript
const myLongVariableName = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
```

**Good:**

```typescript
const myLongVariableName = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
```

### Empty Lines

- **Empty lines** should be used to separate blocks of code.
- **Empty lines** should be used to separate logical parts of the code.

**Bad:**

```typescript
function myFunction() {
  // code
}


function myFunction() {
  // code
}
```

**Good:**

```typescript
function myFunction() {
  // code
}

function myFunction() {
  // code
}
```

### Comments

- **Comments** should be used to explain the code.
- **Comments** should be used to explain the logic.
- **Comments** should be used to explain the purpose of the code.

**Bad:**

```typescript
// data
function fetchData() {
  // code
}
```

**Good:**

```typescript
    // Fetch data from the API
    function fetchData() {
        // code
    }
```

### Imports

- **Imports** should be sorted alphabetically.
- **Imports** should be grouped by type.
- **Imports** should be separated by an empty line.

**Bad:**

```typescript
import React from 'react';
import { useState, useEffect } from 'react';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { User } from './types/User';
```

**Good:**

```typescript
import React from 'react';

import { Button } from './components/Button';
import { Input } from './components/Input';

import { User } from './types/User';

import { useState, useEffect } from 'react';
```

### Destructuring

- **Destructuring** should be used for objects.
- **Destructuring** should be used for arrays.

**Bad:**

```typescript
const user = {
  name: 'John Doe',
  age: 30,
};

const name = user.name;
const age = user.age;
```

**Good:**

```typescript
const user = {
  name: 'John Doe',
  age: 30,
};

const { name, age } = user;
```

### Ternary Operator

- **Ternary operator** should be used for simple conditions.
- **Ternary operator** should be used for simple assignments.

**Bad:**

```typescript
let message;
if (isError) {
  message = 'Error';
} else {
  message = 'Success';
}
```

**Good:**

```typescript
const message = isError ? 'Error' : 'Success';
```

### Arrow Functions

- **Arrow functions** should be used for simple functions.
- **Arrow functions** should be used for anonymous functions.

**Bad:**

```typescript
function myFunction() {
  // code
}
```

**Good:**

```typescript
const myFunction = () => {
  // code
}
```

### Object Literals

- **Object literals** should be used for simple objects.
- **Object literals** should be used for simple assignments.

**Bad:**

```typescript
const user = new Object();
user.name = 'John Doe';
user.age = 30;
```

**Good:**

```typescript
const user = {
  name: 'John Doe',
  age: 30,
};
```

### Array Literals

- **Array literals** should be used for simple arrays.
- **Array literals** should be used for simple assignments.

**Bad:**

```typescript
const numbers = new Array();
numbers.push(1);
numbers.push(2);
numbers.push(3);
```

**Good:**

```typescript
const numbers = [1, 2, 3];
```

### Template Literals

- **Template literals** should be used for string interpolation.
- **Template literals** should be used for string concatenation.

**Bad:**

```typescript
const message = 'Hello, ' + name + '!';
```

**Good:**

```typescript
const message = `Hello, ${name}!`;
```

### Spread Operator

- **Spread operator** should be used for copying objects.
- **Spread operator** should be used for merging objects.

**Bad:**

```typescript
const user = {
  name: 'John Doe',
  age: 30,
};

const newUser = Object.assign({}, user);
```

**Good:**

```typescript
const user = {
  name: 'John Doe',
  age: 30,
};

const newUser = { ...user };
```

### Array Methods

- **Array methods** should be used for manipulating arrays.
- **Array methods** should be used for filtering arrays.
- **Array methods** should be used for mapping arrays.
- **Array methods** should be used for reducing arrays.

**Bad:**

```typescript
const numbers = [1, 2, 3];

const newNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  newNumbers.push(numbers[i] * 2);
}
```

**Good:**

```typescript
const numbers = [1, 2, 3];

const newNumbers = numbers.map((number) => number * 2);
```

### Object Methods

- **Object methods** should be used for manipulating objects.
- **Object methods** should be used for filtering objects.
- **Object methods** should be used for mapping objects.
- **Object methods** should be used for reducing objects.

**Bad:**

```typescript
const user = {
  name: 'John Doe',
  age: 30,
};

const newUser = {};
for (const key in user) {
  newUser[key] = user[key];
}
```

**Good:**

```typescript
const user = {
  name: 'John Doe',
  age: 30,
};

const newUser = { ...user };
```

### React Hooks

- **React hooks** should be used for managing state.
- **React hooks** should be used for managing side effects.
- **React hooks** should be used for managing context.

**Good:**

```typescript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

### React Components

- **React components** should be used for rendering UI.
- **React components** should be used for managing state.
- **React components** should be used for managing props.

**Good:**

```typescript
import React from 'react';

function MyComponent({ name }) {
  return <h1>Hello, {name}!</h1>;
}
```

### React Props (TypeScript)

- **React props** should be used for passing data to components.
- **React props** should be used for passing functions to components.
- **React props** should be used for passing objects to components.

**Good:**

```typescript
import React from 'react';

function MyComponent({ name, age }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old.</p>
    </div>
  );
}
```

### React State

- **React state** should be used for managing local state.
- **React state** should be used for managing side effects.
- **React state** should be used for managing context.

**Good:**

```typescript
import React, { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

### React Context

- **React context** should be used for managing global state.
- **React context** should be used for managing theme.
- **React context** should be used for managing user authentication.

**Good:**

```typescript
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  return useContext(ThemeContext);
}
```

### React Context (TypeScript)

- **React context** should be used for managing global state.
- **React context** should be used for managing theme.
- **React context** should be used for managing user authentication.
- **React context** should be written in TypeScript.

**Good:**

```typescript
import React, { createContext, useContext, useState } from 'react';

type Theme = 'light' | 'dark';

type ThemeContextType = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
}
```

### React Context with Reducer (TypeScript)

- **React context** should be used for managing global state.
- **React context** should be used for managing theme.
- **React context** should be used for managing user authentication.
- **React context** should be written in TypeScript.
- **React context** should be used with reducer.

**Good:**

```typescript
import React, { createContext, useContext, useReducer } from 'react';

type Theme = 'light' | 'dark';

type ThemeAction = { type: 'SET_THEME'; payload: Theme };

type ThemeState = {
  theme: Theme;
};

type ThemeContextType = {
  state: ThemeState;
  dispatch: React.Dispatch<ThemeAction>;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function themeReducer(state: ThemeState, action: ThemeAction): ThemeState {
  switch (action.type) {
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    default:
      return state;
  }
}

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(themeReducer, { theme: 'light' });

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
}
```

---

## Code Organization

Code organization is important for the readability and maintainability of the code. The following code organization
should be followed in the project.

### Components Directory

Any component that is used more than once should be a separate component.

- **Components** should be in the `components` directory.
- **Components** file name should be in `camelCase`.
- **Components** component name should be in `PascalCase`.
- **Components** should be in the `tsx` extension.
- **Components** should be in the `index.ts` file.

### Views Directory

Any screen that is used more than once should be a separate view.

- **Views** should be in the `views` directory.
- **Views** file name should be in `camelCase`.
- **Views** component name should be in `PascalCase`.
- **Views** should be in the `tsx` extension.
- **Views** should be in the `index.ts` file.

### Hooks Directory

Any custom hook that is used more than once should be a separate hook.

- **Hooks** should be in the `hooks` directory.
- **Hooks** file name should be in `camelCase`.
- **Hooks** hook name should be in `camelCase`.
- **Hooks** should be in the `ts` extension.
- **Hooks** should be in the `index.ts` file.
- **Hooks** should be in the `use` prefix.

### Types Directory

Any type that is used more than once should be a separate type.

- **Types** should be in the `types` directory.
- **Types** file name should be in `camelCase`.
- **Types** type name should be in `PascalCase`.
- **Types** should be in the `ts` extension.
- **Types** should be in the `index.ts` file.

### Services Directory

Any service that is used more than once should be a separate service.

- **Services** should be in the `services` directory.
- **Services** file name should be in `camelCase`.
- **Services** service name should be in `camelCase`.
- **Services** should be in the `ts` extension.
- **Services** should be in the `index.ts` file.

### Utils Directory

Any utility function that is used more than once should be a separate utility function.

- **Utils** should be in the `utils` directory.
- **Utils** file name should be in `camelCase`.
- **Utils** utility function name should be in `camelCase`.
- **Utils** should be in the `ts` extension.
- **Utils** should be in the `index.ts` file.

### Features Directory

Any feature that is used more than once should be a separate feature.

- **Features** should be in the `features` directory.
- **Features** must contain a `components` directory.
- **Features** must contain a `hooks` directory.
- **Features** must contain a `types` directory.
- **Features** must contain a `services` directory.
- **Features** must contain a `utils` directory.
- **Features** must contain a `views` directory.
- **Features** should be in the `camelCase` directory.
- **Features** should be in the `index.ts` file.

### Libs Directory

Any library that is used more than once should be a separate library.

- **Libs** should be in the `libs` directory.
- **Libs** file name should be in `camelCase`.
- **Libs** library name should be in `camelCase`.
- **Libs** should be in the `ts` extension.
- **Libs** should be in the `index.ts` file.

---

## Code Quality (Rules)

Code quality is important for the readability and maintainability of the code. The following code quality should be
followed in the project.

## Complexity

### No banned types (lint/complexity/noBannedTypes)

Disallow primitive type aliases and misleading types.

**Bad:**

```typescript
const n: {} = 0
```

**Good:**

```typescript
let foo: string = "bar";
```

### No empty types parameters (lint/complexity/noEmptyTypeParameters)

Disallow empty type parameters in type aliases and interfaces.

**Bad:**

```typescript
type Foo = Promise<>;
```

**Good:**

```typescript
type Foo = Promise<void>;
```

### No excessive cognitive complexity (lint/complexity/noExcessiveCognitiveComplexity)

Disallow functions that exceed a given Cognitive Complexity score.

### No for each (lint/complexity/noForEach)

Disallow the use of forEach.

**Bad:**

```typescript
els.forEach((el) => {
  f(el);
})
```

**Good:**

```typescript
for (const el of els) {
  f(el);
}
```

### No useless catch (lint/complexity/noUselessCatch)

Disallow catch clauses that only rethrow the error.

**Bad:**

```typescript
try {
    doSomething();
} catch(e) {
    throw e;
}
```

**Good:**

```typescript
try {
    doSomething();
} catch(e) {
    handleError(e);
}
```

### No useless fragments (lint/complexity/noUselessFragment)

Disallow fragments that are useless.

**Bad:**

```typescript
<>
    <Foo />
</>
```

**Good:**

```typescript
<>
    <Foo />
    <Bar />
</>
```

### No useless lone block statements (lint/complexity/noUselessLoneBlockStatements)

Disallow lone block statements that do nothing.

**Bad:**

```typescript
{}
```

**Good:**

```typescript
{
    foo();
}
```

### No useless ternary (lint/complexity/noUselessTernary)

Disallow ternary operators when simpler alternatives exist.

**Bad:**

```typescript
const foo = a ? a : b;
```

**Good:**

```typescript
const foo = a || b;
```

### Use Arrow Functions (lint/complexity/useArrowFunctions)

Use arrow functions over function expressions.

**Bad:**

```typescript
function foo() {
    return 1;
}
```

**Good:**

```typescript
const foo = () => 1;
```

### Use optional chain (lint/complexity/useOptionalChain)

Use optional chaining when accessing properties.

**Bad:**

```typescript
const foo = bar && bar.baz;
```

**Good:**

```typescript
const foo = bar?.baz;
```

## Correctness

### No children prop (lint/correctness/noChildrenProp)

Prevent passing children as props.

**Bad:**

```typescript
<MyComponent children={<div />} />
```

**Good:**

```typescript
<MyComponent>
    <div />
</MyComponent>
```

### No const assign (lint/correctness/noConstAssign)

Prevents from having `const` variables being re-assigned.

**Bad:**

```typescript
const foo = 1;
foo = 2;
```

**Good:**

```typescript
let foo = 1;
foo = 2;
```

### No unsafe optional chaining (lint/correctness/noUnsafeOptionalChain)

Disallow the use of optional chaining in contexts where the undefined value is not allowed.

**Bad:**

```typescript
const foo = bar?.baz;
```

**Good:**

```typescript
const foo = bar.baz;
```

### No unused variables (lint/correctness/noUnusedVariables)

Disallow unused variables.

**Bad:**

```typescript
const foo = 1;
```

**Good:**

```typescript
const foo = 1;
console.log(foo);
```

### No exhaustive dependencies (lint/correctness/noExhaustiveDependencies)

Enforce all dependencies are correctly specified in a React hook.

**Bad:**

```typescript
import { useEffect } from "react";

function component() {
    let a = 1;
    useEffect(() => {
        console.log(a);
    }, []);
}
```

**Good:**

```typescript
import { useEffect } from "react";

function component() {
    let a = 1;
    useEffect(() => {
        console.log(a);
    }, [a]);
}
```

## Style

### No implicit boolean

Disallow implicit true values on JSX boolean attributes

**Bad:**

```typescript
<MyComponent disabled/>
```

**Good:**

```typescript
<MyComponent disabled={true}  />
```

### No parameter assign (lint/style/noParameterAssign)

Prevent parameter reassignment.

**Bad:**

```typescript
function foo(bar) {
    bar = 1;
}
```

**Good:**

```typescript
function foo(bar) {
    const baz = 1;
}
```

### No useless else (lint/style/noUselessElse)

Disallow else block when the if block breaks early.

If an if block breaks early using a breaking statement (return, break, continue, or throw), then the else block becomes
useless. Its contents can be placed outside of the block.

**Bad:**

```typescript
if (foo) {
    return bar;
} else {
    return baz;
}
```

**Good:**

```typescript
if (foo) {
    return bar;
}
return baz;
```

### No var (lint/style/noVar)

Disallow the use of var.

**Bad:**

```typescript
var foo = 1;
```

**Good:**

```typescript
let foo = 1;
```

### Use const (lint/style/useConst)

Require const declarations for variables that are only assigned once.

Variables that are initialized and never reassigned and variables that are only assigned once can be declared as const.

**Bad:**

```typescript
let foo = 1;
```

**Good:**

```typescript
const foo = 1;
```

### Use import type (lint/style/useImportType)

TypeScript allows specifying a type qualifier on an import to indicate that the import doesn’t exist at runtime. This
allows transpilers to safely drop imports of types without looking for their definition. This also ensures that some
modules are not loaded at runtime.

The rule ensures that all imports used only as a type use a type-only import. It also groups inline type imports into a
grouped import type.

**Bad:**

```typescript
import { A } from "./mod.js";
type TypeOfA = typeof A;
let a: A;
```

**Good:**

```typescript
import type { A } from "./mod.js";
type TypeOfA = typeof A;
let a: A;
```

### Use self closing elements (lint/style/useSelfClosingElements)

Prevent extra closing tags for self-closing elements.

**Bad:**

```typescript
<MyComponent></MyComponent>
```

**Good:**

```typescript
<MyComponent />
```

### Use template (lint/style/useTemplate)

Prefer template literals over string concatenation.

**Bad:**

```typescript
const foo = "Hello, " + name + "!";
```

**Good:**

```typescript
const foo = `Hello, ${name}!`;
```

## Suspicious

Rules that detect code that is likely to be incorrect or useless.

### No array index key (lint/suspicious/noArrayIndexKey)

Prevent using array index as key in React components.

**Bad:**

```typescript
{items.map((item, index) => (
    <Item key={index} />
))}
```

**Good:**

```typescript
{items.map((item) => (
    <Item key={item.id} />
))}
```

### No console log (lint/suspicious/noConsoleLog)

Prevent the use of console.log.

**Bad:**

```typescript
console.log("Hello, World!");
```

### No empty block statements (lint/suspicious/noEmptyBlockStatements)

Disallow empty block statements.

**Bad:**

```typescript
{
}
```

**Good:**

```typescript
{
    foo();
}
```

### No explicit any (lint/suspicious/noExplicitAny)

Disallow explicit any types.

**Bad:**

```typescript
let foo: any = 1;
```

**Good:**

```typescript
let foo: number = 1;
```

### Use await (lint/suspicious/useAwait)

Prefer using await over then.

**Bad:**

```typescript
fetch("https://api.example.com")
    .then((response) => response.json())
    .then((data) => console.log(data));
```

**Good:**

```typescript
const response = await fetch("https://api.example.com");
const data = await response.json();
console.log(data);
```
