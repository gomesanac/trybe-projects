import React from 'react';
import FilterName from './FilterName';
import FilterValues from './FilterValues';
import FilterOrder from './FilterOrder';
import RemoveFilter from './RemoveFilter';

function Filters() {
  return (
    <div>
      <FilterName />
      <FilterValues />
      <FilterOrder />
      <RemoveFilter />
    </div>
  );
}

export default Filters;
