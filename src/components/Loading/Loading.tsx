import React, { FC } from 'react';
import { PropagateLoader } from 'react-spinners';

import LoadingWrapperStyled from './LoadingWrapperStyled';
import { TLoadingProps } from './types';

const Loading: FC<TLoadingProps> = (props) =>
  props.full ? (
    <LoadingWrapperStyled>
      <PropagateLoader />
    </LoadingWrapperStyled>
  ) : (
    <PropagateLoader />
  );

export default Loading;
