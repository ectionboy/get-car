import styled from 'styled-components';

export const CardListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 29px;
  row-gap: 50px;
  padding-bottom: 150px;
`;

export const ButtonStyled = styled.button`
  color: var(--color-main);
  font-weight: 600;
  line-height: 20px;
  margin: auto;
  display: flex;
  width: fit-content;
  padding: ${props => props.$padding || '14px 44px'};
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 12px;
  background-color: var(--color-accent);
  transition: background-color 0.3s var(--timing-function);
  border: none;

  &:hover {
    background-color: var(--color-hover);
  }
`;