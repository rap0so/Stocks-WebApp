import { cleanup, render } from '@testing-library/react';
import React from 'react';

import Error from '.';

describe('Error', () => {
  afterEach(cleanup);

  it('should render cmp without crash', () => {
    render(<Error />);
  });

  it('should render error styles', () => {
    const { getByTestId } = render(<Error />);

    const ErrorCmp = getByTestId('error');

    const styles = window.getComputedStyle(ErrorCmp!);

    expect(styles.getPropertyValue('align-items')).toBe('center');
    expect(styles.getPropertyValue('display')).toBe('flex');
    expect(styles.getPropertyValue('justify-content')).toBe('center');
    expect(styles.getPropertyValue('height')).toBe('100%');
  });

  it('should show message error', () => {
    const { getByText } = render(<Error />);

    const errorMessage = getByText(
      'Oops! Something went wrong, try again later?',
    );

    expect(errorMessage).toBeInTheDocument();
  });
});
