import React, { FC } from 'react';
import { Box } from 'reflexbox';

const Title: FC = () => {
  return (
    <Box textAlign="center">
      <h1>
        Stocks WebApp
        {'  '}
        <span aria-label="hand pointing to left" role="img">
          📈
        </span>
      </h1>
    </Box>
  );
};

export default Title;
