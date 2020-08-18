import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import App from '../App';
import * as api from '../services/api';
import mockedCategoriesResult from '../__mocks__/categories';

jest.mock('../services/api');
api.getCategories.mockImplementation(
  () => Promise.resolve(mockedCategoriesResult)
);

describe('Requisito 4', () => {
  it('should request categories from API and show it in the page', async () => {
    render(<App />);
    await waitFor(() => expect(api.getCategories).toHaveBeenCalled());
    expect(screen.getAllByTestId('category').length).toEqual(mockedCategoriesResult.length);
  });
});
