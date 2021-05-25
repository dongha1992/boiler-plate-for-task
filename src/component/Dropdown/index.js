import React from 'react';
import * as S from './style';

const Dropdown = (props) => {
  return (
    <S.DropdownWrapper htmlFor={props.id} width={props.width}>
      <S.Select {...props}>{props.children}</S.Select>
    </S.DropdownWrapper>
  );
};

export { Dropdown };
