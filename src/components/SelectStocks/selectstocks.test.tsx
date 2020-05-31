import { cleanup, fireEvent, render } from '@testing-library/react';
import React from 'react';

import SelectStocks from '.';
import { TStocksSymbols, TStocksData } from 'types';

describe('SelectStocks', () => {
  const fakeProps = {
    currentWatching: ['IET'] as TStocksSymbols,
    onClick: jest.fn(),
    stocks: [
      {
        basePrice: 10,
        catchPhrase: 'best application',
        companyName: 'potato enterprise',
        symbol: 'IET',
      },
    ] as TStocksData[],
  };

  afterEach(cleanup);

  it('should render cmp without crash', () => {
    render(<SelectStocks {...fakeProps} />);
  });

  it('should render list of stocks', () => {
    const { container } = render(<SelectStocks {...fakeProps} />);

    const listItemsFound = container.getElementsByTagName('li');

    expect(listItemsFound.length).toBe(fakeProps.stocks.length);
  });

  it('should render span on watching stocks', () => {
    fakeProps.stocks = fakeProps.stocks.concat({
      basePrice: 80,
      catchPhrase: 'another best application',
      companyName: 'beans enterprise',
      symbol: 'TZW',
    });

    const { container } = render(<SelectStocks {...fakeProps} />);

    const listItemsFound = container.getElementsByTagName('li');
    const spanItemsFound = container.getElementsByTagName('span');

    expect(listItemsFound.length).toBe(fakeProps.stocks.length);
    expect(spanItemsFound.length).toBe(fakeProps.currentWatching.length);
  });

  it('should render span on watching stocks', () => {
    const { container } = render(<SelectStocks {...fakeProps} />);
    const firstLiFound = container.getElementsByTagName('li')[0];

    fireEvent.click(firstLiFound);

    expect(fakeProps.onClick).toHaveBeenCalled();
  });
});
