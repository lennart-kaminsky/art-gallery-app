import ArtPieces from "@/components/ArtPieces";

export default function ListArtPieces({ data }) {
  return (
    <>
      <ArtPieces pieces={data}></ArtPieces>
    </>
  );
}
