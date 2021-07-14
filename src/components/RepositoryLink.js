import styled from "styled-components";

export const RepositoryLink = () => {
  return (
    <RepositoryLinkStyled>
      <a href="https://github.com/LuisFernandoLG/Emoji-App">
        Github repository
      </a>
    </RepositoryLinkStyled>
  );
};

const RepositoryLinkStyled = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 2em;

  background: #272727;
  border-radius: 100px;
  padding: 1rem;

  a {
    text-decoration: none;
    color: #eeeeee;
  }
`;
