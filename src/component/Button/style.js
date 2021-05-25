import styled, { css } from 'styled-components';
import { colors } from '../../constants/colors';

export const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: ${(props) => props.width && props.width};
  margin: ${(props) => props.margin && props.margin};
  padding: ${(props) => props.padding && props.padding};
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  font-size: ${(props) => props.size && `${props.size}px`};
  background-color: ${(props) =>
    props.backgroundColor && props.backgroundColor};
  ${(props) => {
    if (props.disabled) {
      return css`
        background-color: 'gray';
        border: 1px solid gray;
      `;
    } else if (props.border === 'none') {
      return css`
        border: 'none';
      `;
    } else {
      return css`
        background-color: '#FFF';
        border: 1px solid ${colors.lightGray};
      `;
    }
  }};
`;
