import { useState } from "react";
import { generate } from "shortid";
import styled from "styled-components";
import { getRandomNumberPositive } from "../helpers/getRandomNumberPositive";
import { AutoExpire } from "./AutoExpire";
import { EmojiCounter } from "./EmojiCounter";
import FloatEmoji from "./FloatEmoji";

const initialEmojis = [
  {
    id: generate(),
    name: "thumb up",
    symbol: "👍",
    count: 0,
  },
  {
    id: generate(),
    name: "Heart",
    symbol: "❤",
    count: 0,
  },
  {
    id: generate(),
    name: "Happy Face",
    symbol: "😃",
    count: 0,
  },

  {
    id: generate(),
    name: "Eyes",
    symbol: "👀",
    count: 0,
  },

  {
    id: generate(),
    name: "What",
    symbol: "(:",
    count: 0,
  },

  {
    id: generate(),
    name: "devil",
    symbol: "😈",
    count: 0,
  },

  {
    id: generate(),
    name: "Paty",
    symbol: "🎉",
    count: 0,
  },
];

export const EmojiBoard = () => {
  const [emojis, setEmojis] = useState(initialEmojis);
  const [floatEmojis, setFloatEmojis] = useState([]);

  const incrementEmojiCount = (id) => {
    const index = emojis.findIndex((emoji) => emoji.id === id);
    const emojisCopy = JSON.parse(JSON.stringify(emojis));
    emojisCopy[index].count += 1;

    setEmojis(emojisCopy);
  };

  const getRandomFontSize = () => {
    return Math.round(getRandomNumberPositive(12, 100));
  };

  const getRandomSidePositiveNegative = () => {
    const sign = Math.round(Math.random()) * 2 - 1;

    const fullWidth = window.innerWidth;

    return getRandomNumberPositive(0, fullWidth / 2) * sign;
  };

  const insertFloatEmoji = (symbol) => {
    const floatEmoji = {
      id: generate(),
      symbol: symbol,
      size: getRandomFontSize(),
      sideOne: getRandomSidePositiveNegative(),
      sideTwo: getRandomSidePositiveNegative(),
    };

    const x = JSON.parse(JSON.stringify(floatEmojis));

    setFloatEmojis([...x, floatEmoji]);
  };

  return (
    <EmojiBoardStyled>
      {emojis.map(({ id, name, symbol, count }) => {
        return (
          <EmojiCounter
            id={id}
            name={name}
            symbol={symbol}
            count={count}
            incrementEmojiCount={incrementEmojiCount}
            insertFloatEmoji={insertFloatEmoji}
          />
        );
      })}

      <div>
        {floatEmojis.map(({ id, size, symbol, sideOne, sideTwo }) => (
          <AutoExpire key={id} time={4000}>
            <FloatEmoji
              key={id}
              symbol={symbol}
              size={size}
              sideOne={sideOne}
              sideTwo={sideTwo}
            />
          </AutoExpire>
        ))}
      </div>
    </EmojiBoardStyled>
  );
};

const EmojiBoardStyled = styled.div`
  width: 50vw;
  margin: 20px auto;
  border-radius: 100px;
  padding: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  user-select: none;

  background: ${({ theme: { colors } }) => colors.primaryColor};
`;
