import styled from 'styled-components';

export const Title = styled.h2``;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Item = styled.li``;

export const Wrapper = styled.div`
  display: flex;
  justify-content: start;
  align-item: center;
  gap: 20px;
`;

export const Text = styled.p`
  margin: 0;
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 6px;
  border: transparent;
  background-color: #ffbfbf;
  transition: background-color 150ms linear 0s, transform 150ms linear 0s;

  &:hover {
    background-color: #ff7a7a;
    transform: translateY(2px);
  }
`;
