import styled from "styled-components";
export default function FavoriteButton() {
  return (
    <StyledButton
      type="button"
      onClick={(event) => {
        event.stopPropagation();
        console.log("Button click");
      }}
    >
      🖤
    </StyledButton>
  );
}

const StyledButton = styled.button`
  position: absolute;
  top: 0px;
  right: 150px;
  z-index: 1;
`;
