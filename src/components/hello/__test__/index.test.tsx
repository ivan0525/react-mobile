import React from 'react';
import { render, getByTestId, screen } from '@testing-library/react';
import Hello from '@/components/hello';

test('Test Hello component', async () => {
  const { container, getByText } = render(<Hello />, {
    container: document.createElement('span'),
  });

  expect(getByText('Hello')?.textContent).toBe('Hello');
  expect(container.firstChild?.nodeName).toBe('SPAN');
  screen.debug(getByTestId(container, 'messages'), 1000, { highlight: true });
});
