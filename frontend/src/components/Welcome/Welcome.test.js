import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Welcome from './Welcome';

describe('<Welcome />', () => {
  test('it should mount', () => {
    render(<Welcome />);
    
    const welcome = screen.getByTestId('Welcome');

    expect(welcome).toBeInTheDocument();
  });
});