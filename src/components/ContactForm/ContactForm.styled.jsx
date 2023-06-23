import styled from '@emotion/styled';
import { Form } from 'formik';

export const FormContact = styled(Form)`
    width: 350px;
    border: 1px solid black;
    padding: 10px;
}
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  font-weight: 500;
  gap: 5px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  border-bottom: 1px solid #d6d6d6;
  border-top: none;
  border-right: none;
  border-left: none;
  width: 140px;
  transition: border-bottom 0.3s ease-in-out;
  &:focus {
    outline: none;
    border-bottom: 1px solid #898989;
  }
`;

export const Button = styled.button`
  background: none;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  padding: 8px 10px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out,
    transform 0.3s ease-in-out;
  &:hover,
  &:active {
    background-color: #508ef0;
    color: white;
    transform: scale(1.05);
  }
`;

export const Div = styled.div`
  font-size: 14px;
  color: red;
`;
