import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('renders learn react link', () => {

       render(<App />);
       expect(screen.getByRole('link',{name: 'Learn React'})).toBeInTheDocument();
});

