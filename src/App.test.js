// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders FrontendWaveHub title', () => {
    render(<App />);
    const titleElement = screen.getByText(/FrontendWaveHub/i);
    expect(titleElement).toBeInTheDocument();
});
