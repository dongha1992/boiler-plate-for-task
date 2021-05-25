import React from 'react';
import * as S from './style';

export const Checkbox = (props) => {
  return (
    <S.Container>
      <S.InputCheckbox type="checkbox" checked={props.isSelected} {...props} />
    </S.Container>
  );
};
