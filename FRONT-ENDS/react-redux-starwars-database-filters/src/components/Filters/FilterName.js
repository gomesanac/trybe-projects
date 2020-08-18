import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterByName } from '../../actions';

class FilterName extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };

    this.onTextChange = this.onTextChange.bind(this);
  }

  onTextChange(event) {
    this.setState({ text: event.target.value });
    this.props.filterByName(event.target.value);
  }

  render() {
    return (
      <div>
        <input
          data-testid="name-filter"
          type="text"
          value={this.state.text}
          placeholder="Faça uma pesquisa"
          onChange={(event) => this.onTextChange(event)}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  numericValues: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  filterByName: (name) => dispatch(filterByName(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterName);

FilterName.propTypes = {
  filterByName: PropTypes.func.isRequired,
};
