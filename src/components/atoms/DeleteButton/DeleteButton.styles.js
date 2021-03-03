import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 40px;
  height: 40px;
  // background-color: ${(props) => (props.isSecondary ? '#e7e844' : '#c0c7d6')};
  background-color: ${({ theme }) => theme.colors.grey};
  // border-radius: ${({ isSquare }) => (isSquare ? '2px' : '50px')};
  border-radius: 50px;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 14px;
  outline: none;

  svg {
    // fill: red;
    // stroke: red;
    width: 100%;
    height: 100%;
  }
`;
