import React, { FC } from 'react';
import { BarLoader } from 'react-spinners';

import LoadingWrapperStyled from './LoadingWrapperStyled';
import { TLoadingProps } from './types';

const Loading: FC<TLoadingProps> = ({ full }) =>
  full ? (
    <LoadingWrapperStyled
      alignItems="center"
      display="flex"
      justifyContent="center"
      height="100%"
    >
      <BarLoader color="#fff" />
    </LoadingWrapperStyled>
  ) : (
    <BarLoader />
  );

export default Loading;
