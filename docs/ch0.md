# Chapter 0: Introducing the app boilerplate

The application is built on the create-react-app boilerplate. Our goal for this section is to create the boilerplate for the application. You will learn how to set up the initial React components, styling in React, and applying linting rules.

Tools needed are a modern browser like Chrome and an account in CodeSanbox.io. 

## Instructions

We are going to be building this project from scratch in Code Sanbox. You will need to create a Code Sandbox account if you do not already have one. CCode Sandbox will import all dependences from npm needed for the app. Note: we will be using ES6 in this workshop. 

## Applying ESLint rules

ESLint is an open source project and tool that identifies and reports patterns found in JavaScript code. It allows you to identify certain rules to ensure use of clear and consistent coding conventions, while automating the application of those rules. 

The dependencies have already been added to the `package.json`. If you'd like to view them, they are all the dependencies that start with `eslint`. 

Create a file named `.eslintrc` and paste the following snippet into the file: 

```
{
  "extends": "react-app"
}
```

If you'd like to override any of the settings from `eslint-config-react-app`, edit the `eslintrc` file.

## Create your first component

We need to create our first component to render on the page. Create a `App.js` file under the `src` folder. Import the React and Component dependencies from the react package. 

```
import React, { Component } from 'react';
```

This allows you to access React in your file and to create a Component. 

We will create a class called 'App' and extend from Component. Inside the 'App' class, we need to include the render function to render our component. All render functions must return a div element. Insert the following code under the `import React, { Component } from 'react';` line.

```
class App extends Component {
  render() {
    return (
      <div>
      </div>
    );
  }
}
```

Let's print out 'My Pokemon App' onto the page within the `<div></div>` element. 

Insert `<h1>My Pokemon App!</h1>` between the div tags. 

We need to export our component so other components can import and access it. Add `export default App;` at the end of the file. 

At this point, you should have a completed component, but we need to hook it up to our UI to be able to see it.

## Create index.js

Create an `index.js` file under the `src` folder. This will be the starting point of our application and the component that is called in our `index.html` file under the `public` folder. 

You will need to import a few dependencies from the npm package. Import these dependencies as follows at the top of `index.js`: 

```
import React from 'react';
import ReactDOM from 'react-dom';
```

This allows you to use React and ReactDOM within your component. These provides methods that can be used in your app from the react-dom and react npm package. 

Import our 'App' component that we created in the previous step. 

``` 
import App from './App';
```

We need to render our 'App' component and show it under our div with id = 'root'. The div and id are in `index.html` under the `public` folder. 


## Style your component

We are going to style our component with inline styling. We will center our `h1` tag and make the text red. We will create a variable at the top of our file between our imports and class with our styling specifications. 

```
const appStyle = {
  color: 'red', 
  textAlign: 'center'
}
```

Pass the variable to the div element. 

```
  style={appStyle}
```

## Final result 

