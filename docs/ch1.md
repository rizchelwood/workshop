# Chapter 1: Building the app boilerplate

The application is built on the create-react-app boilerplate. Our goal for this section is to create the boilerplate for the application. You will learn how to set up the initial React components, styling in React, and applying linting rules.

Tools needed are a modern browser like Chrome and an account in CodeSandbox.io. 

## Instructions

We are going to be building this project from scratch in Code Sanbox. You will need to create a Code Sandbox account if you do not already have one. CCode Sandbox will import all dependences from npm needed for the app. After you've created an account, click the plus button on the top right and select 'Import from Github' then enter the url of the [repo]( https://github.com/rizcheldayao/workshop/tree/master/chapter0-code). 

Note: we will be using ES6 in this workshop. 

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

We will create a class called 'App' and extend from Component. Inside the 'App' class, we need to include the render function to render our component. All render functions must return a div element. Insert the following code below your imports. 

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

Insert `<h1>My Pokemon App</h1>` between the div tags. 

We need to export our component so other components can import and access it. Add `export default App;` at the end of the file. 

At this point, you should have a completed component, but we need to hook it up to our UI to be able to see it.

## Link the UI to our React components

Create a `div` element with the id `root` in the `index.html` file under the `public` folder. Insert `<div id="root"></div>` in the body tag. 

Import these dependencies from the npm package at the top of `src/index.js` file: 

```
import React from 'react';
import ReactDOM from 'react-dom';
```

This allows you to use React and ReactDOM within your component. These provides methods that can be used in your app from the react-dom and react npm package. 

Import our 'App' component that we created in the previous step. 

``` 
import App from './App';
```

We need to render our 'App' component under the tag with the id 'root'. Insert the following code at the end of the `index.js` file: 

```
ReactDOM.render(<App />, document.getElementById('root'));
```

## Style your component

We are going to style our component with inline styling. We will center our `h1` tag and make the text red in our 'App' component. We will create a variable at the top of our file between our imports and class with our styling specifications. 

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

This is the start of our Pokemon app we will be bulding in this workshop. Next, we will build out the containers and components for showing a list of Pokemon. 

