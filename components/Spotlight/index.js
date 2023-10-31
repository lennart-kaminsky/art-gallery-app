import { ST } from "next/dist/shared/lib/utils";
import { StyledImage } from "../Image";
import styled from "styled-components";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton";

export default function Spotlight({ image, artist, slug }) {
  return (
    <StyledWrapper>
      <FavoriteButton></FavoriteButton>
      <StyledLink href={`art-pieces/${slug}`}>
        <StyledImage src={image} alt="randomPiece" height={200} width={200} />
        <p>{artist}</p>
      </StyledLink>
    </StyledWrapper>
  );
}

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: black;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
