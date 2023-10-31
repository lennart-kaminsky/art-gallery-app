import { StyledImage } from "../Image";
import styled from "styled-components";
import Link from "next/link";
export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  console.log("Art Piece Detais");
  return (
    <StyledWrapper>
      <StyledImage
        src={image}
        alt={title}
        height={200}
        width={200}
      ></StyledImage>
      <h2>{title}</h2>
      <h3>{artist}</h3>
      <p>{genre}</p>
      <p> {year}</p>
      <StyledLink href="/art-pieces">Back to Gallery</StyledLink>
    </StyledWrapper>
  );
}
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-block: 20px;
  text-align: ;
`;
const StyledLink = styled(Link)`
  padding: 10px 25px;
  background-color: black;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  &:hover {
    background-color: darkgray;
  }
`;
