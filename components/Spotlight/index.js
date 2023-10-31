import { StyledImage } from "../Image";
export default function Spotlight({ image, artist }) {
  return (
    <>
      <StyledImage
        src={image}
        alt="randomPiece"
        height={200}
        width={200}
      ></StyledImage>
      <p>artist={artist}</p>
    </>
  );
}
