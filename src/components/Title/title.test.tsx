import { cleanup, render } from '@testing-library/react';
import React from 'react';

import Title from '.';

describe('Title', () => {
  afterEach(cleanup);

  it('should render cmp without crash', () => {
    render(<Title />);
  });

  it('should render header tag', () => {
    const { container } = render(<Title />);

    const hasHeader = container.getElementsByTagName('h1')[0];

    expect(hasHeader).toBeInTheDocument();
  });

  it('should render title', () => {
    const { getByText } = render(<Title />);

    const hasHeader = getByText('Stocks WebApp');

    expect(hasHeader).toBeInTheDocument();
  });
});
