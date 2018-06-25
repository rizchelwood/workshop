# Chapter 1: Build Pokemon List 

Our goal for this section is to create a container and component to build a list of Pokemon with mock data. You will learn how to more about creating a container and component, and pass props from parent to child. 

## Instructions

We are going to be building a list of Pokemon displayed in cards from a mock data set. 

## Build the Pokemon container

To ensure clean code and easier readability, we are going to separate our components into containers and presentational components.

A container is React component that does data fetching, handles state, and renders sub components. It handles all the logic and data manipulation then passes the data down to its presentational components as props. In future chapters, the container will handle all of the Redux state management as well.

A presentational component is a "dumb" component that only receives data from its parent and should never change the data itself. They are be reusable and should only render the views. 

