import React from 'react';
import updateColumn from './updateColumn';

export const getColumns = (onColumnChange, numericValues, column) => {
  const select = updateColumn(numericValues);
  return (
    <select
      onChange={(event) => onColumnChange(event)}
      data-testid="column-filter"
      value={column}
    >
      {select.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export const getRadios = (onInputChange) => (
  <div>
    <input
      defaultChecked
      data-testid="column-sort-input-asc"
      type="radio"
      id="ASC"
      name="order"
      value="ASC"
      onChange={(event) => onInputChange(event)}
    />
    <label htmlFor="ASC">ASC</label>
    <input
      data-testid="column-sort-input-desc"
      type="radio"
      id="DESC"
      name="order"
      value="DESC"
      onChange={(event) => onInputChange(event)}
    />
    <label htmlFor="DESC">DESC</label>
  </div>
);

export const getComparation = (onComparationChange, comparation) => {
  const comparationValues = ['', 'maior que', 'menor que', 'igual a'];
  return (
    <select
      onChange={(event) => onComparationChange(event)}
      data-testid="comparison-filter"
      value={comparation}
    >
      {comparationValues.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
