import React, { FC, MouseEvent } from 'react';
import ReactTooltip from 'react-tooltip';
import { throttle } from 'throttle-debounce';

import { TSelectStocksProps } from './types';
import { TStocksSupportedSymbols } from 'types';
import SelectStocksStyled from './SelectStocksStyled';

export const TIME_TO_THROTTLE: number = 800;

const SelectStocks: FC<TSelectStocksProps> = ({ onClick, stocks }) => {
  const throttledOnClick = throttle(
    TIME_TO_THROTTLE,
    (listValue: TStocksSupportedSymbols) => onClick(listValue),
  );

  const onThrottledOnClick = (
    event: MouseEvent<HTMLLIElement, globalThis.MouseEvent>,
  ) => {
    const clickedSymbol = event.currentTarget.getAttribute(
      'data-symbol',
    )! as TStocksSupportedSymbols;

    throttledOnClick(clickedSymbol);
  };

  return (
    <>
      <ReactTooltip place="right" />

      <SelectStocksStyled>
        {stocks.map((stock, idx) => (
          <li
            data-symbol={stock.symbol}
            data-tip={stock.catchPhrase}
            key={idx}
            onClick={onThrottledOnClick}
          >
            {stock.companyName}
          </li>
        ))}
      </SelectStocksStyled>
    </>
  );
};

export default SelectStocks;
