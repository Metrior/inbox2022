import React from 'react';
import { Provider } from 'react-redux';
import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from} from "@apollo/client"
import {onError} from "@apollo/client/link/error";
import PropTypes from 'prop-types';

import "./App.scss"

const errorLink = onError(({graphqlErrors, networkErrors})=>{
    if (graphqlErrors){
        graphqlErrors.map(({message,location,path})=>{
            console.log(`graphql error ${message}`)
        })
    }
})

const link = from([
    errorLink,
    new HttpLink({uri:"https://api.spacex.land/graphql/"})
])

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link:link
})

const App = () => (
    <ApolloProvider client={client}>

    </ApolloProvider>
);

App.propTypes = {
    store: PropTypes.object.isRequired
};

export default App;
