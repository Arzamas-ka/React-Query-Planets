import React from 'react';
import axios from "axios";
import { useQuery } from 'react-query';

import Card from './Card';


const fetchPlanets = async () => {
  const { data } = await axios.get("https://swapi.dev/api/planets")

  return data;
}

const Planets = () => {
  const { data, status } = useQuery("planets", fetchPlanets);

  const PokemonCard = planets => {
    return planets.results.map((planet, ind) => {
      return <Card key={planet.name} name={planet.name} url={planet.url} ind={ind}/>
    })
  }

  return (
    <div>
      {status === "loading" && <div>Loading...</div>}
      {status === "error" && <div>Error fetching planets</div>}
      {status === "success" && <ul>{PokemonCard(data)}</ul>}
    </div>
  )
}

export default Planets;