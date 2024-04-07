import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  font-size: ${props => props.theme.fontSizes.medium};
  padding: 5px 10px;
  border: 2px solid ${props => props.theme.colors.dark};
  border-radius: 10px;
  overflow: hidden;
  background-color: ${props => props.theme.colors.background};

  &:hover {
    background-color: ${props => props.theme.colors.white};
  }
`;
