import styled, { keyframes } from "styled-components";
import { Counter } from "./Counter";
import Emoji from "./Emoji";

export const EmojiCounter = ({
  id,
  name,
  symbol,
  count,
  incrementEmojiCount,
  insertFloatEmoji,
}) => {
  const handleOnClick = () => {
    incrementEmojiCount(id);
    insertFloatEmoji(symbol);
  };

  return (
    <EmojiCounterStyled onClick={handleOnClick}>
      <Emoji symbol={symbol} />
      <Counter count={count} />
    </EmojiCounterStyled>
  );
};

const hoverEmojiButton = keyframes`
from{

}

to{
  box-shadow: 2px 2px 20px gray;
}
`;

const EmojiCounterStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px;
  margin: 10px;
  border-radius: 100px;
  border: none;

  cursor: pointer;

  background: ${({ theme: { colors } }) => colors.secondaryColor};
  transition: box-shadow 0.2s;

  &:hover {
    animation: ${hoverEmojiButton} 0.6s ease forwards;
  }
`;
