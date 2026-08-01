import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the homepage hero heading', async () => {
  render(<App />);
  const heading = await screen.findByRole('heading', {
    level: 1,
    name: /Engineering Digital Products That/i,
  });
  expect(heading).toBeInTheDocument();
});
