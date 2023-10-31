import ArtPieces from "@/components/ArtPieces";
import styled from "styled-components";
import Spotlight from "@/components/Spotlight";
import { StyledTitle } from "@/components/StyledText";

export default function SpotLightPage({ data }) {
  function getRandomPiece() {
    return data[Math.floor(Math.random() * data.length)];
  }
  const randomPiece = getRandomPiece();
  return (
    <div>
      <StyledTitle>Spotlight</StyledTitle>

      <Spotlight
        slug={randomPiece.slug}
        image={randomPiece.imageSource}
        artist={randomPiece.artist}
      />
    </div>
  );
}
