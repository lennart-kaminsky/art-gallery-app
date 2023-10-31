import Link from "next/link";
import styled from "styled-components";

export default function Navigation() {
  return (
    <StyledNavigation>
      <StyledList>
        <li>
          <StyledLink href="/art-pieces">Art Pieces</StyledLink>
        </li>
        <li>
          <StyledLink href="/">Spotlight</StyledLink>
        </li>
      </StyledList>
    </StyledNavigation>
  );
}

const StyledNavigation = styled.nav`
  width: 100%;

  background-color: black;
  position: fixed;
  bottom: 0;
  color: white;
  padding: 15px 0;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  align-items: center;
  width: 50%;
  &:hover {
    color: gray;
    letter-spacing: 2px;
  }
`;
