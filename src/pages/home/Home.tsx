import useLocalStorage from '@rehooks/local-storage';
import Chart from 'react-apexcharts';
import React, { FC, useEffect, useReducer, useState, useCallback } from 'react';
import { Box, Flex } from 'reflexbox';

import { options as chartOptions } from 'consts/chart';
import Container from 'components/Container';
import Loading from 'components/Loading';
import SelectStocks from 'components/SelectStocks';
import Title from 'components/Title';
import { addItemToArray, rmItemFromArray } from 'helpers/array';
import getPossibleStocks from 'providers/getPossibleStocks';
import parseMessageData from 'providers/parseMessageData';
import socket from 'providers/serverConnection';
import parseHistoryToChart from 'providers/parseHistoryToChart';
import updateChart from 'providers/updateChart/updateChart';
import { TStocksSymbols, TStocksData, TStocksSupportedSymbols } from 'types';

import { THistoryStocks, TNewStock } from './types';

const Home: FC = () => {
  const [historyStocks, setHistoryStocks] = useState<THistoryStocks>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [savedStocks, setSavedStocks] = useLocalStorage<TStocksSymbols>(
    'savedStocks',
    [],
  );

  // TODO: type this reducer properly
  const [currentWatching, setCurrentWatching] = useReducer(
    (_: any, newState: TStocksSymbols) => {
      Object.keys(historyStocks).forEach((key) => {
        const historyKey = key as TStocksSupportedSymbols;
        if (!newState.includes(historyKey)) {
          delete historyStocks[historyKey];
        }
      });

      setHistoryStocks(historyStocks);
      setSavedStocks(newState);

      return newState;
    },
    savedStocks,
  );

  const [possibleStocksToWatch, setPossibleStocksToWatch] = useState<
    TStocksData[]
  >();

  const onStockClick = (stock: TStocksSupportedSymbols) => {
    const isSubscribe = !currentWatching.includes(stock);

    const watchingAll = isSubscribe
      ? addItemToArray(stock, currentWatching)
      : rmItemFromArray(stock, currentWatching);

    setCurrentWatching(watchingAll as TStocksSymbols);

    const messageToWS = JSON.stringify({
      event: isSubscribe ? 'subscribe' : 'unsubscribe',
      stocks: [stock],
    });

    socket.send(messageToWS);
  };

  const onReceiveData = useCallback(
    (newStock: TNewStock) => {
      const [keyStock, valueStock] = Object.entries(newStock)[0] as [
        TStocksSupportedSymbols,
        number,
      ];

      const savedStock = historyStocks[keyStock] || [];
      const updatedStock = savedStock.concat(valueStock);

      historyStocks[keyStock] = updatedStock;

      setHistoryStocks(historyStocks);

      updateChart(historyStocks);
    },
    [historyStocks],
  );

  useEffect(() => {
    socket.addEventListener('open', () => setIsLoading(false));

    socket.addEventListener('message', (messageResponse) => {
      const data = parseMessageData(messageResponse);

      if (data.event === 'connected') {
        const possibleStocks = getPossibleStocks(data);
        setPossibleStocksToWatch(possibleStocks);
      }

      if (data.event === 'stocks-update') {
        onReceiveData(data.stocks);
      }
    });

    // TODO: implement error handler cmp
    socket.addEventListener('error', (errorEvent) => {
      throw new Error(`Socket Error -> ${errorEvent}`);
    });
  }, [onReceiveData]);

  if (isLoading) {
    return <Loading />;
  }

  if (possibleStocksToWatch) {
    return (
      <Container flexDirection="column" mt={[3, 5]} width="100%">
        <Title />

        <Flex mt={5}>
          <Box maxWidth="220px" width="100%">
            <SelectStocks
              onClick={onStockClick}
              stocks={possibleStocksToWatch}
            />
          </Box>

          <Box flex="1">
            {!currentWatching.length ? (
              <Flex alignItems="center" height="100%" justifyContent="center">
                <span aria-label="hand pointing to left" role="img">
                  👈
                </span>

                <Box ml="5px">
                  <p>Select a stock</p>
                </Box>
              </Flex>
            ) : (
              <Chart
                options={chartOptions}
                series={parseHistoryToChart(historyStocks)}
                width="100%"
              />
            )}
          </Box>
        </Flex>
      </Container>
    );
  }

  return <></>;
};

export default Home;
