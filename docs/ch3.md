# Chapter 3: Pull in data from Pokemon API using GraphQL

Our goal for this section is to make an API request using GraphQL. You will learn how to integrate GraphQL into your React app.

## Instructions

We are going to call the Pokemon GraphQL API and show the data to our users. 

> GraphQL is a query language for APIs that allows communication between the client and server to perform data fetching.

## Set up Apollo Client

> Apollo Client is a GraphQL client that allows you to fetch data with GraphQL to build out UI interfaces. 

If you're using Sandbox, click the 'Dependencies' dropdown on the left hand side and click 'Add dependency'. 

You need to add the following dependencies: 

```
apollo-boost
react-apollo
graphql
graphql-tag
```

If you're running the app locally, do an `npm install --save` on all of the above dependencies. 

Import ApolloClient and ApolloProvider below the other existing imports in `src/App.js`.

```
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
```

Create a new Apollo Client instance under imports. 

```
const client = new ApolloClient({
  uri: "https://graphql-pokemon.now.sh/graphql"
});
```

> Note: We will be using an existing Pokemon GraphQL API as our uri. 

Wrap the `<div>` tags with `<ApolloProvider client={client}></ApolloProvider>`. This gives our app access to our Apollo Client and will allow our containers to fetch data from the GraphQL server. 

## Make GraphQL query to get real data

Import `gpl` and `Query` below the existing imports in `src/containers/Pokemon`.

```
import { Query } from "react-apollo";
import gql from "graphql-tag";
```

Remove the `mockData` variable and remove all of the code between the `<div>` tags. 

Create a Query component between the `<div>` tags. 

```
<Query>
</Query>
```

Create the query we need to get from GraphQL. We only want to get the data back that we ask for. We will ask for numer, name, image and types for the first 100 Pokemon. If you'd like to see all of the options you can get back, click [here](https://graphql-pokemon.now.sh/graphql).

Insert the `query` prop into the first `<Query>` tag. 

```
query={gql`
  {
    pokemons(first: 100) {
      number
      name
      image
      types
    }
  }
`}
```

We need to pass the data to our 'Card' component and show a loading and error state. 

In between the `<Query>` tags insert the code below: 

```
{({ loading, error, data }) => {
  if (loading) return <p>Your Pokemon are loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return data.pokemons.map((pokemon) => {
    return <Card key={pokemon.name} pokemon={pokemon} styles={styles} />
  });
}}
```

The above code displays different results depending on if we're loading the data, it errors out, or if we have the data. It passes the each Pokemon Object to the 'Card' component like we had in the previous chapter. 

We need to make changes to our Card component to handle the new data we're being given. 

In `src/components/Card.js` remove the `<p>` tag with the `{pokemon.abilities}` variable and change `{pokemon.type}` to `{pokemon.types.toString()}`; 

## Final result

You should now have an app pulling in real data through GraphQL and displaying them in a card view to the user. 
