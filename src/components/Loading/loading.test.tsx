import { cleanup, render } from '@testing-library/react';
import React from 'react';

import Loading from '.';

describe('Loading', () => {
  afterEach(cleanup);

  it('should render cmp without crash', () => {
    render(<Loading />);
  });

  it('should render base loader', () => {
    const { getByTestId } = render(<Loading />);

    const BaseLoader = getByTestId('bar');

    expect(BaseLoader).toBeInTheDocument();
  });

  it('should render fullscreen when receive `full`', () => {
    const { getByTestId } = render(<Loading full={true} />);

    expect(getByTestId('full')).toBeInTheDocument();
  });

  it('should render full loading styles', () => {
    const { getByTestId } = render(<Loading full={true} />);

    const BaseLoader = getByTestId('full');

    const styles = window.getComputedStyle(BaseLoader!);

    expect(styles.getPropertyValue('align-items')).toBe('center');
    expect(styles.getPropertyValue('display')).toBe('flex');
    expect(styles.getPropertyValue('justify-content')).toBe('center');
    expect(styles.getPropertyValue('height')).toBe('100%');
  });
});
