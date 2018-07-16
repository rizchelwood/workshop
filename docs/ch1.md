# Chapter 1: Building the app boilerplate

The app is built on [create-react-app](https://github.com/facebookincubator/create-react-app). Our goal for this section is to create the React boilerplate. You will learn how to set up the initial React components, styling in React, and applying linting rules.

Tools needed are a modern browser like Chrome and an account in CodeSandbox.io. 

## Instructions

We are going to be building this project from scratch in CodeSandbox.io. You will need to create a CodeSandbox account if you do not already have one. CodeSandbox will import all dependences from npm needed for the app. After you've created an account, click the plus button on the top right and select 'Import from Github' then enter the url of the [repo]( https://github.com/rizcheldayao/workshop/tree/master/chapter0-code). 

Note: we will be using ES6 in this workshop. 

## Applying ESLint rules

> ESLint is an open source project and tool that identifies and reports patterns found in JavaScript code. It allows you to identify certain rules to ensure use of clear and consistent coding conventions, while automating the application of those rules. 

CodeSandbox already applies prettier to your sandbox but if you'd like to apply rules locally, follow the directions below in this section. If not, go to the next section.

The dependencies have already been added to the `package.json`. If you'd like to view them, they are all the dependencies that start with `eslint`. 

Create a file named `.eslintrc` in the root folder and paste the following snippet into the file: 

```
{
  "extends": "react-app"
}
```

If you'd like to override any of the settings from `eslint-config-react-app`, edit the `eslintrc` file.

## Create your first component

> React is a JavaScript library for creating user interfaces. It composes the UI in modular components.

We need to create our first component to render on the page. Create the file `src/App.js`. Import the React and Component dependencies from the react package at the top of the `src/App.js` file. 

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

Insert the h1 tags between the div tags.

```
<h1>My Pokemon App</h1>
``` 

We need to export our component so other components can import and access it. Add the export at the end of the file.

```
export default App;
``` 

At this point, you should have a completed component, but we need to hook it up to our UI to be able to see it.

## Link the UI to our React components

Create a div element with the id `root` in the `public/index.html` file. Insert the below code between the body tags.

```
<div id="root"></div>
```

Import these dependencies at the top of `src/index.js` file: 

```
import React from 'react';
import ReactDOM from 'react-dom';
```

This allows you to use React and ReactDOM within your component. These provides methods that can be used in your app from the react-dom and react npm package. 

Import our 'App' component that we created in the previous step. 

``` 
import App from './App';
```

We need to render our 'App' component under the tag with the id `root`. Insert the following code at the end of the `src/index.js` file: 

```
ReactDOM.render(<App />, document.getElementById('root'));
```

You should see the 'My Pokemon App' text in the browser. 

## Style your component

We are going to style our component with inline styling. We will center our h1 tag and color the text in our 'App' component. We will create a variable at the top of our file between our imports and class with our styling specifications in `src/App.js`. 

```
const styles = {
  fontFamily: 'PokemonFireRedRegular',
  color: '#ff5c49',
  textAlign: 'center'
}
```

Pass the variable to the div element. 

```
  style={styles}
```

## Final result 

This is the start of our Pokemon app we will be bulding in this workshop. Next, we will build out the containers and components for showing a list of Pokemon. 

![Chapter 1 result](./images/chapter1.png)

### Resources
- create-react-app: [https://github.com/facebookincubator/create-react-app](https://github.com/facebookincubator/create-react-app)
- React: [https://reactjs.org/](https://reactjs.org/)

