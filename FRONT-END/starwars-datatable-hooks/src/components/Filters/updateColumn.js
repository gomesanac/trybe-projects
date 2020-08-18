const updateColumn = (numericValues) => {
  const columnValues = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const stateColumns = numericValues.map((element) => element.column);
  return [
    '',
    ...columnValues.filter((option) => !stateColumns.includes(option)),
  ];
};

export default updateColumn;
