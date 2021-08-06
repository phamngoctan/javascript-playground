
# Getting started

- The term vanilla script is used to refer to the pure JavaScript :)
- jQuery
- Low dash (lo_)
- VueJS
- Understand other Parts of the JavaScript World
    - Other versions of Javascript (ES6, ES5, TypeScript (TS) developed by Microsoft, base on Javascript)
    - Build tool (Webpack, Babel) minimize, optimise code, bundle, enable features, turn ES6 codes into ES5 codes and make sure it run successfully on browser only supporting ES5
    - Libraries (jQuery, LowDash)
    - Frameworks (VueJS, ReactJS, AngularJS)
- Detail about the ES6 and TypeScript, Webpack
    - ES6: next version of JS, add new features (classes, arrow functions, ...), not supported by all browsers.
        - Babel: transplier ES6 => ES5
    - TypeScript: superset to Javascript => needs to be compiled to Javascript, added features like Types, Interfaces, Generics, ...
    - Webpact: Bundler => allows you to split JS code over multiple Files and ship one bundle in the end. (not so clear for me)

# VueJS
Developed by Evan You, written in TypedScript, intial release in 2014

- v-model= two ways binding to input field
- v-for=
- v-on:click=
- v-bind:class=
- Vue component
- npm
- Webpack
  - entry (root directory)
  - output (output file with directory)
- Deployment for different platforms

Last feeling, the deployment for PROD environment is quite easy to setup. I really like it.

# ReactJS
Developed by Facebook, written in Javascript, intial release in 2013

- JSX: recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript
- React re-render the components. Not the same idea as VueJS. When you want to update the value of a variable, we need to call re-render again while VueJS, just change the variable value - done.
- Component in React

### Compare the props vs the state in React component
In a React component, props are variables passed to it by its parent component. State on the other hand is still variables, but directly initialized and managed by the component. The state can be initialized by props.

### How React updates the DOM
React follows the observable pattern and listens for state changes. When the state of a component changes, React updates the virtual DOM tree. Once the virtual DOM has been updated, React then compares the current version of the virtual DOM with the previous version of the virtual DOM. This process is called “diffing”.


# Notes
Learn some more course about Javascript, DOM access, events, ...

Learning ES6: ES6 simply is the next-gen version of JavaScript
The important features are the following:

- let  and const : You declare variables (let ) and constants (const , variables which never change). Use it instead of var .
- class : Create classes, which could be described as "reusable blueprints for creating JS objects".
- import / export : Split your code over multiple files and use export  to provide content to other files and import  to import such content.

Important: When using ES6 features, you typically need a build workflow (e.g. Webpack + appropriate loaders like babel) to compile your ES6 to ES5 code as ES6 WON'T run in the browser.

