import styled, { keyframes } from "styled-components";
import Emoji from "./Emoji";

const FloatEmoji = ({ symbol, sideOne, sideTwo, size }) => {
  return (
    <FloatEmojiStyled size={size} sideOne={sideOne} sideTwo={sideTwo}>
      <Emoji symbol={symbol} />
    </FloatEmojiStyled>
  );
};

export default FloatEmoji;

const floatAnimation = ({ sideOne, sideTwo }) => keyframes`
from{
    transform: translateX(${sideOne}px);
}

to{
    transform: translateX(${sideTwo}px);
    top: -200px;  
}
`;

const FloatEmojiStyled = styled.span`
  font-size: ${({ size }) => (size ? size : "20")}px;

  position: absolute;
  top: 100%;
  bottom: -10px;
  right: 50%;
  left: 50%;

  /* Avoid click */
  pointer-events: none;

  animation: ${floatAnimation} ${({ size }) => (size >= 25 ? 4 : 3.5)}s forwards;
`;
