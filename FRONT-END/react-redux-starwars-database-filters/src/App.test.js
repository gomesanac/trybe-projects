import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { waitFor, fireEvent, getAllByTestId } from '@testing-library/dom';
import MutationObserver from 'mutationobserver-shim';
import { Provider } from 'react-redux';
import App from './App';

import testData from './testData';
import { elementType } from 'prop-types';

import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

const store = createStore(reducer, applyMiddleware(thunk));

const renderApp = () => {
  return render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
}

const mockFetch = () => {
  const apiResponse = Promise.resolve({
    json: () => Promise.resolve(testData),
    ok: true,
  });
  global.fetch = jest.fn(() => apiResponse);
};

describe('1 - Fazer uma requisição para o endpoint /planets da API de Star Wars e preencher uma tabela com os dados retornados, com exceção dos da coluna residents', () => {
  beforeAll(mockFetch);
  beforeEach(cleanup);

  test('it calls SWAPI', () => {   
    renderApp();
    expect(fetch).toHaveBeenCalled();
  })

  test('it uses SWAPI data', async () => {
    const { findByText, findAllByText } = renderApp();
    const planets = testData.results;
    for(let planetIndex in planets) {
      const name = await findByText(planets[planetIndex].name);
      const rotationPeriod = await findAllByText(planets[planetIndex].rotation_period);
      const orbitalPeriod = await findAllByText(planets[planetIndex].orbital_period);
      const diameter = await findAllByText(planets[planetIndex].diameter);
      const climate = await findAllByText(planets[planetIndex].climate);
      const gravity = await findAllByText(planets[planetIndex].gravity);
      const terrain = await findAllByText(planets[planetIndex].terrain);
      const surfaceWater = await findAllByText(planets[planetIndex].surface_water);
      const population = await findAllByText(planets[planetIndex].population);

      expect(name).toBeInTheDocument();
      expect(rotationPeriod.length).toBeGreaterThanOrEqual(1);
      expect(orbitalPeriod.length).toBeGreaterThanOrEqual(1);
      expect(diameter.length).toBeGreaterThanOrEqual(1);
      expect(climate.length).toBeGreaterThanOrEqual(1);
      expect(gravity.length).toBeGreaterThanOrEqual(1);
      expect(terrain.length).toBeGreaterThanOrEqual(1);
      expect(surfaceWater.length).toBeGreaterThanOrEqual(1);
      expect(population.length).toBeGreaterThanOrEqual(1);
    };
  });

  test('it renders a table with 13 columns', async () => {
    const { findAllByRole } = renderApp();
    const tableHeaders = await findAllByRole('columnheader');
    expect(tableHeaders).toHaveLength(13);
  })

  test('it renders a table with 11 rows', async () => {
    const { findAllByRole } = renderApp();
    const tableRows = await findAllByRole('row');
    expect(tableRows).toHaveLength(11);
  })

})

describe('2 - Sua página deve ter um campo de texto que filtra a tabela para somente exibir planetas cujos nomes incluam o texto digitado', () => {

  beforeAll(mockFetch);
  beforeEach(cleanup);

  test('should have a input field for name filters', async () => {
    const { findByTestId } = renderApp();
    const filterField = await findByTestId('name-filter');
    expect(filterField).toBeInTheDocument();
  })

  test('input filter should change results', async () => {
    const { findAllByRole , findByTestId, findByText } = renderApp();
    const filterField = await findByTestId('name-filter');

    fireEvent.change(filterField, {target: { value: 'o' }});
    let tableRows = await findAllByRole('row');
    expect(tableRows).toHaveLength(8);
    expect(await findByText('Coruscant')).toBeInTheDocument();
    expect(await findByText('Dagobah')).toBeInTheDocument();
    expect(await findByText('Endor')).toBeInTheDocument();
    expect(await findByText('Hoth')).toBeInTheDocument();
    expect(await findByText('Kamino')).toBeInTheDocument();
    expect(await findByText('Naboo')).toBeInTheDocument();
    expect(await findByText('Tatooine')).toBeInTheDocument();

    fireEvent.change(filterField, {target: { value: 'oo' }});
    tableRows = await findAllByRole('row');
    expect(tableRows).toHaveLength(3);
    expect(await findByText('Naboo')).toBeInTheDocument();
    expect(await findByText('Tatooine')).toBeInTheDocument();

    fireEvent.change(filterField, {target: { value: '' }});
  })

  test('should change store filter values', async () => {
    const { findByTestId } = renderApp();
    const filterField = await findByTestId('name-filter');
    fireEvent.change(filterField, {target: { value: 'o' }});
    expect(store.getState().filters.filterByName.name).toEqual('o');
    fireEvent.change(filterField, {target: { value: 'oo' }});
    expect(store.getState().filters.filterByName.name).toEqual('oo');
    fireEvent.change(filterField, {target: { value: '' }});
    expect(store.getState().filters.filterByName.name).toEqual('');
  })
})

describe('3 - Sua página deve ter um filtro para valores numéricos', () => {

  beforeAll(mockFetch);
  beforeEach(cleanup);

  test('should have the column selection filter', async () => {
    const { findByTestId } = renderApp();

    const columnFilter = await findByTestId('column-filter');

    expect(columnFilter).toHaveProperty('nodeName', 'SELECT');

    expect(columnFilter.children).toHaveLength(6);

    const expectedColumnFilters = ['population',
                                   'orbital_period',
                                   'diameter',
                                   'rotation_period',
                                   'surface_water'];

    let foundColumnFilterArray = [];

    for(let item of columnFilter.children) {
      expect(item).toHaveProperty('nodeName', 'OPTION');
      foundColumnFilterArray.push(item.innerHTML);
    }

    expect(foundColumnFilterArray).toEqual(expect.arrayContaining(expectedColumnFilters));
  })

  test('should have the comparison selection filter', async () => {
    const { findByTestId } = renderApp();

    const comparisonFilter = await findByTestId('comparison-filter');

    expect(comparisonFilter).toHaveProperty('nodeName', 'SELECT');

    expect(comparisonFilter.children).toHaveLength(4);


    const expectedColumnComparisons = ['maior que',
                                       'igual a',
                                       'menor que'];

    let foundComparisonFilterArray = [];
    
    for(let item of comparisonFilter.children) {
      expect(item).toHaveProperty('nodeName', 'OPTION');
      foundComparisonFilterArray.push(item.innerHTML);
    }

    expect(foundComparisonFilterArray).toEqual(expect.arrayContaining(expectedColumnComparisons));

  })

  test('should have the value input filter', async () => {
    const { findByTestId } = renderApp();

    const valueFilter = await findByTestId('value-filter');

    expect(valueFilter).toHaveProperty('nodeName', 'INPUT');
  });
  
  test('should have the filter button', async () => {
    const { findByTestId } = renderApp();

    const buttonFilter = await findByTestId('button-filter');

    expect(buttonFilter).toHaveProperty('nodeName', 'BUTTON');
  })

  test('should filter with less than', async () => {
    const { findByTestId, findAllByRole } = renderApp();

    const columnFilter = await findByTestId('column-filter');
    const comparisonFilter = await findByTestId('comparison-filter');
    const valueFilter = await findByTestId('value-filter');
    const buttonFilter = await findByTestId('button-filter');

    fireEvent.change(columnFilter, {target: { value: "surface_water" }});
    fireEvent.change(comparisonFilter, {target: { value: "menor que" }});
    fireEvent.change(valueFilter, {target: { value: '40' }});
    fireEvent.click(buttonFilter);

    const tableRows = await findAllByRole('row');
    expect(tableRows).toHaveLength(7);

    
  })

  test('should filter with greather than', async () => {
    const { findByTestId, findAllByRole } = renderApp();

    const columnFilter = await findByTestId('column-filter');
    const comparisonFilter = await findByTestId('comparison-filter');
    const valueFilter = await findByTestId('value-filter');
    const buttonFilter = await findByTestId('button-filter');

    fireEvent.change(columnFilter, {target: { value: "diameter" }});
    fireEvent.change(comparisonFilter, {target: { value: "maior que" }});
    fireEvent.change(valueFilter, {target: { value: '8900' }})
    fireEvent.click(buttonFilter);

    const tableRows = await findAllByRole('row')

    expect(tableRows).toHaveLength(5);
  })

  test('should filter with equal to', async () => {
    const { findByTestId, findAllByRole, findByText } = renderApp();
    
    const columnFilter = await findByTestId('column-filter');
    const comparisonFilter = await findByTestId('comparison-filter');
    const valueFilter = await findByTestId('value-filter');
    const buttonFilter = await findByTestId('button-filter');

    fireEvent.change(columnFilter, {target: { value: "population" }});
    fireEvent.change(comparisonFilter, {target: { value: "igual a" }});
    fireEvent.change(valueFilter, {target: { value: '200000' }})
    fireEvent.click(buttonFilter);

    const tableRows = await findAllByRole('row')

    expect(tableRows).toHaveLength(2);
    expect(await findByText('Tatooine')).toBeInTheDocument();
  })

  test('should change store filter values', async () => {
    const expectedFilters = [
      { column: 'surface_water', comparison: 'menor que', value: '40' },
      { column: 'diameter', comparison: 'maior que', value: '8900' },
      { column: 'population', comparison: 'igual a', value: '200000'}
    ]
    expect(store.getState().filters.filterByNumericValues).toEqual(expectedFilters);
  })

})

describe('4 -  Sua página deverá ser carregada com somente um filtro de valores numéricos', () => {
  test('check avaiable filters', async () => {
    const { findByTestId } = renderApp();

    const columnFilter = await findByTestId('column-filter');

    expect(columnFilter.children).toHaveLength(3);

    const expectedColumnFilters = ['orbital_period',
                                   'rotation_period'];

    let foundColumnFilterArray = [];
    
    for(let filter of columnFilter.children) {
      foundColumnFilterArray.push(filter.innerHTML);
    }

    expect(foundColumnFilterArray).toEqual(expect.arrayContaining(expectedColumnFilters));
  })
})

describe('5 - Cada filtro de valores numéricos deve ter um ícone de X que, ao ser clicado, o apaga e desfaz suas filtragens dos dados da tabela', () => {
  test('should show the previously selected filters', async () => {
    const { findAllByTestId, findByText } = renderApp();
    const selectedFilters = await findAllByTestId('filter');
    expect(store.getState().filters.filterByNumericValues).toHaveLength(3);
  });

  test('each filter should have a X button that removes the filter', async () => {
    const { findAllByTestId, queryAllByTestId } = renderApp();
    let selectedFilters = await findAllByTestId('filter');
    let removeButton = selectedFilters[0].querySelector('button');

    fireEvent.click(removeButton);

    selectedFilters = await findAllByTestId('filter');
    removeButton = selectedFilters[0].querySelector('button');
    fireEvent.click(removeButton);

    selectedFilters = await findAllByTestId('filter');
    removeButton = selectedFilters[0].querySelector('button');
    fireEvent.click(removeButton);

    selectedFilters = await queryAllByTestId('filter');

    expect(selectedFilters).toHaveLength(0);
    expect(store.getState().filters.filterByNumericValues).toHaveLength(0);
  });
})

describe('6 - As colunas da tabela devem ser ordenáveis de forma ascendente ou descendente', () => {
  test('check planet table starting order', async () => {
    let sortedPlanets = [];
    for(let planet of testData.results) {
      sortedPlanets.push(planet.name);
    };
    sortedPlanets = sortedPlanets.sort();

    const { findAllByRole } = renderApp();
    const rows = await findAllByRole('row');
    let appPlanetList = [];
    for(let row of rows) {
      appPlanetList.push(row.children[0].innerHTML);
    }
    appPlanetList.shift();
    expect(sortedPlanets).toEqual(appPlanetList);
    expect(store.getState().filters.order.column).toEqual('Name');
    expect(store.getState().filters.order.sort).toEqual('ASC');
  })

  test('change table order', async () => {
    let sortedPlanets = [];
    for(let planet of testData.results) {
      sortedPlanets.push(parseInt(planet.diameter, 10));
    };
    sortedPlanets = sortedPlanets.sort((a, b) => a - b);

    const { findByTestId, findAllByTestId, findAllByRole } = renderApp();
    const columnSort = await findByTestId('column-sort');
    const sortButton = await findByTestId('column-sort-button');
    const sortInput = await findAllByTestId('column-sort-input');

    fireEvent.change(columnSort, {target: { value: 'diameter' }})

    const ascInput = sortInput.filter((input) => input.value == `DESC` )[0];

    fireEvent.click(ascInput);
    
    await fireEvent.click(sortButton);

    const rows = await findAllByRole('row');
    let appPlanetList = [];
    for(let row of rows) {
      appPlanetList.push(parseInt(row.children[3].innerHTML));
    }
    appPlanetList.shift();

    expect(appPlanetList).toEqual(sortedPlanets.reverse());
  })
});
