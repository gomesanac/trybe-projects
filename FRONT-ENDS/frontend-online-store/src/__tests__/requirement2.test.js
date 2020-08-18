import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Requisito 2', () => {
  it('render without crash', () => {
    render(<App />);
  });

  it('should have a message', () => {
    render(<App />);
    expect(screen.getByTestId('home-initial-message')).toHaveTextContent('Digite algum termo de pesquisa ou escolha uma categoria.')
  });
});
