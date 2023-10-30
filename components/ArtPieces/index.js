import styled from "styled-components";
import ArtPiecePreview from "../ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  console.log(pieces);
  return (
    <StyledList>
      {pieces.map((piece) => (
        <ArtPiecePreview
          key={piece.slug}
          artist={piece.artist}
          image={piece.imageSource}
          title={piece.name}
        ></ArtPiecePreview>
      ))}
    </StyledList>
  );
}

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
`;
