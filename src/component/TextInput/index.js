import React from 'react';
import * as S from './style';
import { colors } from '../../constants/colors';

const TextInput = React.forwardRef((props, ref) => {
  return (
    <S.InputContainer
      width={props.width}
      padding={props.padding}
      margin={props.margin}>
      <S.InputWrapper>
        {props.label ? (
          <S.Label htmlFor={props.name}>{props.label}</S.Label>
        ) : (
          ''
        )}
        <S.Input ref={ref} type={props.type} {...props} />
      </S.InputWrapper>
      {props.caption && props.caption.length !== 0 ? (
        <S.Caption error={props.error}>{props.caption}</S.Caption>
      ) : (
        ''
      )}
    </S.InputContainer>
  );
});

TextInput.defaultProps = {
  type: 'text',
  placeholder: '입력해주세요.',
  error: false,
  disabled: false,
  width: '100%',
  backgroundColor: colors.lightGray,
};

export { TextInput };
