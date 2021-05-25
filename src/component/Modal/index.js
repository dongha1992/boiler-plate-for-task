import React from 'react';
import * as S from './style';

export const Modal = ({ isModalOpen, children }) => {
  return (
    <S.Container isModalOpen={isModalOpen}>
      {isModalOpen ? <S.Card>{children}</S.Card> : null}
    </S.Container>
  );
};
