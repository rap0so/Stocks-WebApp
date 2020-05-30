import useLocalStorage from '@rehooks/local-storage';
import React, { FC, useState, useEffect, useReducer } from 'react';

import Loading from 'components/Loading';

import socket from 'providers/serverConnection';
import { getPossibleStocks } from 'providers/callbackWebSocket';
import { TStocksSymbols } from 'types';
import parseMessageData from 'providers/parseMessageData';

const Home: FC = () => {
  const [savedStocks, setSavedStocks] = useLocalStorage<TStocksSymbols>(
    'savedStocks',
  );

  const [isLoading, setIsLoading] = useState<boolean>(true);

  // TODO: type this reducer properly
  const [currentWatching, setCurrentWatching] = useReducer(
    (_: any, newState: TStocksSymbols) => {
      setSavedStocks(newState);
      return newState;
    },
    [],
  );
  const [possibleStocksToWatch, setPossibleStocksToWatch] = useState<
    TStocksSymbols[]
  >();

  useEffect(() => {
    if (savedStocks) {
      setCurrentWatching(savedStocks);
    }
  }, [savedStocks]);

  useEffect(() => {
    socket.addEventListener('open', () => setIsLoading(false));

    if (!possibleStocksToWatch) {
      socket.addEventListener('message', (messageResponse) => {
        const data = parseMessageData(messageResponse);
        const possibleStocks = getPossibleStocks(data);

        setPossibleStocksToWatch(possibleStocks);

        socket.close();
      });
    }
  });

  if (isLoading) {
    return <Loading />;
  }

  // TODO: implement lateral list of stocks
  if (possibleStocksToWatch) {
    // TODO: implement it
    // tslint:disable-next-line
    const passThisToChart = {
      currentWatching,
    };
    // tslint:disable-next-line
    const passThisToList = {
      onSubscribe: () => {
        // TODO: do stuffs
      },
      onUnsubscribe: () => {
        // TODO: do stuffs
      },
    };

    return <>new cmps here</>;
  }

  // TODO: implement error message
  return <div>Error message here</div>;
};

export default Home;
