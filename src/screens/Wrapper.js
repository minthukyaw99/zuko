import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: 'http://localhost:4000'
});

function Wrapper(WrappedScreen) {
  class WrapperClass extends React.Component {
    render() {
      return(
        <ApolloProvider client={client}>
          <WrappedScreen {...this.prop}/>
        </ApolloProvider>
      )
    }
  }

  return WrapperClass;
}

export default Wrapper;