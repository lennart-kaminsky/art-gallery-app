import ArtPieces from "@/components/ArtPieces/";
import styled from "styled-components";
import Spotlight from "@/components/Spotlight";

export default function SpotLightPage({ data }) {
  function getRandomPiece() {
    return data[Math.floor(Math.random() * data.length)];
  }
  const randomPiece = getRandomPiece();
  return (
    <div>
      <StyledTitle>Art Gallery App</StyledTitle>

      <Spotlight image={randomPiece.imageSource} artist={randomPiece.artist} />
    </div>
  );
}

const StyledTitle = styled.h1`
  text-align: center;
  margin-block: 30px 50px;
`;
