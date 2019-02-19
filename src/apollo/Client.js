import React from 'react';
import ApolloClient from 'apollo-boost';

import AppConfig from '../config/appConfig';

const client = new ApolloClient({
  uri: `${AppConfig.GRAPHQL_URL}`
});

export default client;