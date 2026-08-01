import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the homepage hero heading', async () => {
  render(<App />);
  // The homepage lazily loads a large section graph (orbit, tech modules,
  // journey, etc.) — give it more room than RTL's 1s default before the
  // suspense fallback resolves.
  const heading = await screen.findByRole(
    'heading',
    { level: 1, name: /Digital Worlds/i },
    { timeout: 8000 }
  );
  expect(heading).toBeInTheDocument();
}, 10000);
