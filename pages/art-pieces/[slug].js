import { useRouter } from "next/router";
import ArtPieceDetails from "@/components/ArtPieceDetails";

export default function Details({ data }) {
  const router = useRouter();
  const { slug } = router.query;
  const artPiece = data.find((piece) => piece.slug === slug);
  console.log("Art");
  return (
    <>
      <ArtPieceDetails
        image={artPiece.imageSource}
        title={artPiece.name}
        artist={artPiece.artist}
        year={artPiece.year}
        genre={artPiece.genre}
      />
    </>
  );
}
