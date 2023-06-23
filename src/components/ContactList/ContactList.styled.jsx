import styled from '@emotion/styled';

export const List = styled.ul`
  font-size: 18px;
  font-weight: 500;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  gap: 10px;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const Button = styled.button`
  background: none;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  cursor: pointer;
  transition: background 250ms linear, color 250ms linear;
  &:active,
  &:hover,
  &:focus {
    background: #508ef0;
    color: white;
  }
`;

export const Data = styled.p`
  margin: 0;
`;
