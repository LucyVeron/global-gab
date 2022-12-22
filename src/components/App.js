import '../styles/App.css';
import React from 'react';
import { useQuery, gql } from '@apollo/client';

const USER_LIST = gql`
query {
  countries {
    name
    languages {
      name
    }
  }
}`;

function App() {
  const { loading, error, data } = useQuery(USER_LIST);

  if (loading) return (<> Loading</>);
  if (error) return (<>{JSON.stringify(error)}</>);
  return (<>{JSON.stringify(data)}</>);
}

export default App;