import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

function RemoveFilter() {
  const { removeFilterNumeric,
    filters: { filterByNumericValues: numericValues },
  } = useContext(StarWarsContext);

  const onClick = (type) => removeFilterNumeric(type);

  return numericValues.map((type) => (
    <div data-testid="filter" key={type.column}>
      <span>{`${type.column} - ${type.comparison} - ${type.value} `}</span>
      <button type="button" onClick={() => onClick(type)}>
        X
      </button>
    </div>
  ));
}

export default RemoveFilter;
