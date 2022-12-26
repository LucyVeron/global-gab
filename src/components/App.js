import '../styles/App.css';
import React, { useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import Map from './Map';

const COUNTRY_LIST = gql`
query {
  countries {
    code
    name
    languages {
      name
    }
  }
}`;

function App() {
  const { loading, error, data } = useQuery(COUNTRY_LIST);

  useEffect(() => {
    /* console.log(data); */
  }, [data]);

  if (loading) return (<> Loading</>);
  if (error) return (<>{JSON.stringify(error)}</>);

  return (<>
    <Map />
    {/* {data.countries.map((country) => {
      return <ul key={country.name}>
        <li>{country.name} ({country.code})</li>
        <ul>{country.languages.map((language) => {
          return <li key={language.name}>{language.name}</li>;
        })}</ul>
      </ul>;
    })} */}
  </>);
}

export default App;