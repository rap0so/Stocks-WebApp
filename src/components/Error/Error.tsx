import React, { FC } from 'react';
import ErrorStyled from './ErrorStyled';

const Error: FC = () => (
  <ErrorStyled
    alignItems="center"
    data-testid="error"
    display="flex"
    justifyContent="center"
    height="100%"
  >
    Oops! Something went wrong, try again later?
  </ErrorStyled>
);

export default Error;
