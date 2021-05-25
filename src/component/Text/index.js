import React from 'react';
import * as S from './style';

const Text = (props) => {
  return <S.Container {...props}>{props.children}</S.Container>;
};

export { Text };
