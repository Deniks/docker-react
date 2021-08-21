import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Docker production and nginx ready!/i);
  expect(linkElement).toBeInTheDocument();
});
