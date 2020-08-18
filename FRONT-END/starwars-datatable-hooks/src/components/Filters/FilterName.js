import React, { useState, useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

function FilterName() {
  const [text, setText] = useState('');
  const { filterByName } = useContext(StarWarsContext);

  const onTextChange = (event) => {
    setText(event.target.value);
    filterByName(event.target.value);
  };

  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        value={text}
        placeholder="Faça uma pesquisa"
        onChange={(event) => onTextChange(event)}
      />
    </div>
  );
}

export default FilterName;
