import styled from "styled-components";
export default function FavoriteButton() {
  return <StyledButton type="button">🖤</StyledButton>;
}

const StyledButton = styled.button`
  position: absolute;
  top: 0px;
  right: 50%;
  transform: translate(50%);
  z-index: 1000000;
`;
