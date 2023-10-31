import { ST } from "next/dist/shared/lib/utils";
import { StyledImage } from "../Image";
import styled from "styled-components";
import Link from "next/link";

export default function Spotlight({ image, artist, slug }) {
  return (
    <StyledLink href={`art-pieces/${slug}`}>
      <StyledImage
        src={image}
        alt="randomPiece"
        height={200}
        width={200}
      ></StyledImage>
      <p>{artist}</p>
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: black;
`;
