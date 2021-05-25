import React from 'react';
import * as S from './style';

const Button = (props) => {
  return <S.ButtonWrapper {...props}>{props.children}</S.ButtonWrapper>;
};

export { Button };
