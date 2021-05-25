import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: ${(props) => (props.isModalOpen ? 'flex' : 'none')};
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.6);
`;

const modalShow = keyframes`
  from {
      opacity: 0;
      margin-top: -50px;
  }
  to {
      opacity: 1;
      margin-top: 0;
  }
`;

export const Card = styled.div`
  width: 100%;
  max-width: 450px;
  border-radius: 8px;
  padding: 20px;
  margin: 0 auto;
  background-color: #fff;
  animation: ${modalShow} 0.3s;
  overflow: hidden;
`;
