import Image from "next/image";

import styled from "styled-components";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <StyledListItem>
      <StyledImage src={image} alt={title} height={200} width={200} />
      <p>
        Titel: {title} | Artist: {artist}
      </p>
    </StyledListItem>
  );
}

const StyledListItem = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  width: 250px;
  height: 50%;
`;
