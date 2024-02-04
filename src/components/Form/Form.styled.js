import styled from 'styled-components';

export const FormEl = styled.form`
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 18px;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #8a8a89;
  font-weight: 500;
  line-height: 18px;
`;

export const Select = styled.select`
  color: var(--color-text-main);
  font-weight: 500;
  line-height: 20px;
  font-family: Manrope;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 18px;
  padding-right: 89px;
  background-color: var(--color-back-second);
  border: none;
  outline: none;
  border-radius: 14px;

  &:focus {
    outline: 1px solid var(--color-accent);
  }
`;

export const Input = styled.input`
  color: var(--color-text-main);
  font-weight: 500;
  line-height: 20px;
  width: 160px;
  font-family: Manrope;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 18px;
  padding-right: 89px;
  background-color: var(--color-back-second);
  border: none;
  outline: none;
  border-radius: 14px;

  &:focus {
    outline: 1px solid var(--color-accent);
  }
`;

export const SelectPrice = styled(Select)`
  padding-right: 30px;
`;