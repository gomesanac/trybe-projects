import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterByNumericValues } from '../../actions';

class FilterValue extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number: '',
      column: '',
      comparation: '',
    };

    this.updateColumn = this.updateColumn.bind(this);
    this.onNumberChange = this.onNumberChange.bind(this);
    this.onSelectChange = this.onSelectChange.bind(this);
    this.getColumns = this.getColumns.bind(this);
    this.getComparation = this.getComparation.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    this.updateColumn();
  }

  onNumberChange(event) {
    this.setState({ number: event.target.value });
  }

  onSelectChange(event, chave) {
    const { value } = event.target;
    this.setState({ [chave]: value });
  }

  onClick() {
    const { number, column, comparation } = this.state;
    this.props.filterByNumericValues(column, comparation, number);
    this.setState({ number: '', column: '', comparation: '' });
  }

  getColumns() {
    const select = this.updateColumn();
    return (
      <select
        onChange={(event) => this.onSelectChange(event, 'column')}
        data-testid="column-filter"
        value={this.state.column}
      >
        {select.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  }

  getComparation() {
    const comparation = ['', 'maior que', 'menor que', 'igual a'];
    return (
      <select
        onChange={(event) => this.onSelectChange(event, 'comparation')}
        data-testid="comparison-filter"
        value={this.state.comparation}
      >
        {comparation.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  }

  updateColumn() {
    const { numericValues } = this.props;
    const columns = [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];
    const stateColumns = numericValues.map(({ column }) => column);
    return [
      '',
      ...columns.filter((option) => !stateColumns.includes(option)),
    ];
  }

  render() {
    return (
      <div>
        {this.getColumns()}
        {this.getComparation()}
        <input
          type="number"
          data-testid="value-filter"
          value={this.state.number}
          onChange={(event) => this.onNumberChange(event)}
        />
        <button data-testid="button-filter" onClick={this.onClick}>
          Filtrar
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  numericValues: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  filterByNumericValues: (column, comparison, value) =>
    dispatch(filterByNumericValues(column, comparison, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterValue);

FilterValue.propTypes = {
  numericValues: PropTypes.arrayOf(
    PropTypes.shape({
      column: PropTypes.string,
      comparison: PropTypes.string,
      value: PropTypes.string,
    }),
  ).isRequired,
  filterByNumericValues: PropTypes.func.isRequired,
};
