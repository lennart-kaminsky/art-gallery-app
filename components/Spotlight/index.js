import { ST } from "next/dist/shared/lib/utils";
import { StyledImage } from "../Image";
import styled from "styled-components";

export default function Spotlight({ image, artist }) {
  return (
    <StyledDivWrapper>
      <StyledImage
        src={image}
        alt="randomPiece"
        height={200}
        width={200}
      ></StyledImage>
      <p>{artist}</p>
    </StyledDivWrapper>
  );
}

const StyledDivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
