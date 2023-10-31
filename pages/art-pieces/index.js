import ArtPieces from "@/components/ArtPieces";
import { StyledTitle } from "@/components/StyledText";
export default function ListArtPieces({ data }) {
  return (
    <>
      <StyledTitle>Art Gallery</StyledTitle>
      <ArtPieces pieces={data}></ArtPieces>
    </>
  );
}
