import styled from "styled-components";

export const Counter = ({ count }) => {
  return <CounterStyled>{count}</CounterStyled>;
};

const CounterStyled = styled.span`
  margin: 0 0.5rem;
`;
