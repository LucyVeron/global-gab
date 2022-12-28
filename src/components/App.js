import '../styles/App.css';
import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { VectorMap } from "react-jvectormap";
import { Autocomplete, TextField, Typography } from '@mui/material';

const COUNTRY_LIST = gql`
query {
  languages {
    code
    name
  }
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
  const [language, setLanguage] = useState(null);
  const [countries, setCountries] = useState([]);

  const mapData = {
    CN: 1,
    IN: 1,
    SA: 1,
    EG: 1,
    SE: 1,
    FI: 1,
    FR: 1,
    US: 1
  };

  const onLanguageSelect = (e) => {
    setLanguage(e.target.textContent);

    let selection = [];

    data.countries.map((country) => {
      country.languages.map((lang) => {
        if (lang.name === e.target.textContent) {
          selection.push(country);
        }

      });
    });

    setCountries(selection);
  };

  if (loading) return (<> Loading</>);
  if (error) return (<>{JSON.stringify(error)}</>);

  return (<>
    <Autocomplete
      onChange={(e) => onLanguageSelect(e)}
      options={data.languages.map((language) => language.name)}
      renderInput={(params) => <TextField {...params} label="Languages" />}
    />

    <Typography variant="h3">{language}</Typography>

    <ul>
      {countries.map((country) => {
        return <li key={country.code}>{country.name}</li>;
      })}
    </ul>

    {/* <VectorMap
      map={"world_mill"}
      backgroundColor="#0077be"
      zoomOnScroll={false}
      containerStyle={{
        width: "100vw"
      }}
      containerClassName="map"
      regionStyle={{
        initial: {
          fill: "#e4e4e4",
          "fill-opacity": 0.9,
          stroke: "none",
          "stroke-width": 0,
          "stroke-opacity": 0
        },
        hover: {
          "fill-opacity": 0.8,
          cursor: "pointer"
        },
        selectedHover: {}
      }}
      series={{
        regions: [
          {
            values: mapData, //this is your data
            scale: ["#146804", "#ff0000"], //your color game's here
            normalizeFunction: "polynomial"
          }
        ]
      }}
    /> */}
  </>);
}

export default App;