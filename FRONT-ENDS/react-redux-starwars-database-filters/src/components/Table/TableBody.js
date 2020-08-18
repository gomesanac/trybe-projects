import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import orderFuncAsc from '../Filters/orderFuncAsc';
import orderFuncDesc from '../Filters/orderFuncDesc';

function TableBody({ planets, name, numericValues, columnSort, sort }) {
  const data =
    sort === 'ASC'
      ? orderFuncAsc(planets, name, numericValues, columnSort)
      : orderFuncDesc(planets, name, numericValues, columnSort);
  return (
    <tbody>
      {data.map((planet) => (
        <tr key={planet.name}>
          <td>{planet.name}</td>
          <td>{planet.rotation_period}</td>
          <td>{planet.orbital_period}</td>
          <td>{planet.diameter}</td>
          <td>{planet.climate}</td>
          <td>{planet.gravity}</td>
          <td>{planet.terrain}</td>
          <td>{planet.surface_water}</td>
          <td>{planet.population}</td>
          <td>
            {planet.films.map((film) => (
              <span key={film}>{film}</span>
            ))}
          </td>
          <td>{planet.created}</td>
          <td>{planet.edited}</td>
          <td>{planet.url}</td>
        </tr>
      ))}
    </tbody>
  );
}

const mapStateToProps = (state) => ({
  planets: state.getPlanets.data,
  name: state.filters.filterByName.name,
  numericValues: state.filters.filterByNumericValues,
  columnSort: state.filters.order.column,
  sort: state.filters.order.sort,
});

export default connect(mapStateToProps)(TableBody);

TableBody.defaultProps = {
  columnSort: 'Name',
  sort: 'ASC',
};

TableBody.propTypes = {
  planets: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      rotation_period: PropTypes.string,
      orbital_period: PropTypes.string,
      diameter: PropTypes.string,
      climate: PropTypes.string,
      gravity: PropTypes.string,
      terrain: PropTypes.string,
      surface_water: PropTypes.string,
      population: PropTypes.string,
      film: PropTypes.string,
      created: PropTypes.string,
      edited: PropTypes.string,
      url: PropTypes.string,
    }),
  ).isRequired,
  name: PropTypes.string.isRequired,
  numericValues: PropTypes.arrayOf(
    PropTypes.shape({
      column: PropTypes.string,
      comparison: PropTypes.string,
      value: PropTypes.string,
      columnSort: PropTypes.string,
      sort: PropTypes.string,
    }),
  ).isRequired,
  columnSort: PropTypes.string.isRequired,
  sort: PropTypes.string.isRequired,
};
