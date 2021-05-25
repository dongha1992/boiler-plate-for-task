import styled from 'styled-components';

export const DropdownWrapper = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  width: ${(props) => props.width};
  cursor: pointer;
`;

export const Select = styled.select`
  appearance: none;
  border-radius: 5px;
  border: solid 1px gray;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.size};
  margin: ${(props) => props.margin};
  background-color: ${(props) => props.backgroundColor};
  cursor: pointer;
  outline: none;
`;
