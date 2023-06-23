import styled from '@emotion/styled';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  font-weight: 500;
  gap: 10px;
`;

export const Input = styled.input`
  border-bottom: 1px solid #d6d6d6;
  border-top: none;
  border-right: none;
  border-left: none;
  width: 180px;
  transition: border-bottom 0.3s ease-in-out;
  &:focus {
    outline: none;
    border-bottom: 1px solid #898989;
  }
`;
