import styled, { css } from 'styled-components';

const borderGenerator = (size, color) => css`
  border: ${`${size}px solid ${color}`};
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width && props.width};
  padding: ${(props) => props.padding && props.padding};
  margin: ${(props) => props.margin && props.margin};
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const Label = styled.label`
  width: 100%;
  font-weight: 600;
  background-color: ${(props) =>
    props.labelBackground ? props.labelBackground : '#FFF'};
  letter-spacing: -0.56px;
  padding: 4px 8px 0px;
  margin-bottom: 4px;
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: ${(props) => props.height && props.height};
  padding: 12px 16px 8px;
  border-radius: 5px;
  background-color: #fff;
  font-size: ${(props) => props.size && props.size};
  font-weight: 400;
  letter-spacing: -0.72px;
  outline: none;
  border: none;
  background-color: ${(props) =>
    props.backgroundColor && props.backgroundColor};
  word-break:break-all
  
  /* &:focus {
    ${(props) => {
    if (props.error) {
      return borderGenerator(1, 'red');
    } else {
      return borderGenerator(1, 'gray');
    }
  }}
  } */
  
  &::placeholder {
    color: gray;
    font-size: 16px;
  }
`;

export const Caption = styled.div`
  margin-top: 6px;
  color: ${(props) => (props.error ? 'red' : 'gray')};
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.48px;
`;
