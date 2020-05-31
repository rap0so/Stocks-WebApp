import { cleanup, render } from '@testing-library/react';
import React from 'react';

import Container from '.';

describe('Container', () => {
  afterEach(cleanup);

  it('should render cmp', () => {
    const { container } = render(
      <Container>
        <div>protected by container</div>
      </Container>,
    );

    const ContainerElement = container.firstElementChild;

    expect(ContainerElement).toBeInTheDocument();
  });

  it('should render default style props', () => {
    const { container } = render(
      <Container>
        <div>protected by container</div>
      </Container>,
    );

    const ContainerElement = container.firstElementChild;

    const stylesFromTitle = window.getComputedStyle(ContainerElement!);

    expect(stylesFromTitle.getPropertyValue('margin')).toBe('auto');
    expect(stylesFromTitle.getPropertyValue('max-width')).toBe('1200px');
    expect(stylesFromTitle.getPropertyValue('padding')).toBe('8px');
  });

  // TODO: implement this test
  it('should change padding style on mobile', () => {
    expect(true).toBeTruthy();
  });

  it('should render with new style props', () => {
    const { container } = render(
      <Container mt="10px">
        <div>protected by container</div>
      </Container>,
    );

    const ContainerElement = container.firstElementChild;

    const stylesFromTitle = window.getComputedStyle(ContainerElement!);

    expect(stylesFromTitle.getPropertyValue('margin-top')).toBe('10px');
  });
});
