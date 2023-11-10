import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Keyboard from './Keyboard';

describe('<Keyboard />', () => {
  test('it should mount', () => {
    render(<Keyboard />);
    
    const keyboard = screen.getByTestId('Keyboard');

    expect(keyboard).toBeInTheDocument();
  });
});