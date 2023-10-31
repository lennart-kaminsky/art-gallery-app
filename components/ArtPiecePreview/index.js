import { StyledImage } from "../Image";
import Link from "next/link";
import styled from "styled-components";

export default function ArtPiecePreview({ image, title, artist, slug }) {
  return (
    <li>
      {" "}
      <StyledLink href={`/art-pieces/${slug}`}>
        <StyledImage src={image} alt={title} height={200} width={200} />
        <p>
          Titel: {title} | Artist: {artist}
        </p>
      </StyledLink>
    </li>
  );
}

const StyledLink = styled(Link)`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  text-decoration: none;
  color: black;
`;
