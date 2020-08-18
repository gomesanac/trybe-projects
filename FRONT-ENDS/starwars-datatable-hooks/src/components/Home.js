import React, { useEffect, useContext } from 'react';
import Table from './Table/Table';
import Filters from './Filters/Filters';
import StarWarsContext from '../context/StarWarsContext';

function Home() {
  const { requestFetch, isFetching } = useContext(StarWarsContext);
  useEffect(() => {
    requestFetch();
  }, []);

  if (isFetching) return <h1>Loading...</h1>;
  return (
    <div>
      <h1>StarWars Datatable with Filters</h1>
      <Filters />
      <Table />
    </div>
  );
}

export default Home;
