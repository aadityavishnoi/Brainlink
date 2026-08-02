import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the homepage hero heading', async () => {
  render(<App />);
  // The homepage lazily loads its section graph — give it more room than
  // RTL's 1s default before the suspense fallback resolves.
  const heading = await screen.findByRole(
    'heading',
    { level: 1, name: /Digital Products Built For Real Business Growth/i },
    { timeout: 8000 }
  );
  expect(heading).toBeInTheDocument();
}, 10000);
