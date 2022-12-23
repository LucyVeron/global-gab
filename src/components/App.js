import '../styles/App.css';
import React from 'react';
import { useQuery, gql } from '@apollo/client';

const COUNTRY_LIST = gql`
query {
  countries {
    name
    languages {
      name
    }
  }
}`;

function App() {
  const { loading, error, data } = useQuery(COUNTRY_LIST);

  if (loading) return (<> Loading</>);
  if (error) return (<>{JSON.stringify(error)}</>);

  return (<>
    {data.countries.map((country) => {
      return <ul key={country.name}>
        <li>{country.name}</li>
        <ul>{country.languages.map((language) => {
          return <li key={language.name}>{language.name}</li>;
        })}</ul>
      </ul>;
    })}
  </>);
}

export default App;