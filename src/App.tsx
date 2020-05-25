import React from 'react';
import './App.css';
import MainPage from "./Components/MainPage/MainPage";
import { ApolloProvider } from '@apollo/react-hooks';

import ApolloClient from 'apollo-boost';
import {environment} from "./environment";

const client = new ApolloClient({
    uri: environment.apollo.url,
});

function App() {
  return (
  <ApolloProvider client={client}>
    <div className="App">
      <header className="App-header">
        <MainPage/>
      </header>
    </div>
  </ApolloProvider>
  );
}

export default App;
